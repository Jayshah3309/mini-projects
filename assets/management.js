(() => {
  const kind = document.body.dataset.management,
    core = ManagementCore,
    schema = core.schemas[kind],
    key = "mini-projects-" + kind + "-v1";
  const samples = {
    student: [{ id: "101", name: "Jay", course: "Computer Science" }],
    library: [
      {
        id: "B1",
        title: "Learning Algorithms",
        author: "Sample Author",
        borrower: "",
      },
    ],
    inventory: [{ id: "I1", name: "Notebook", quantity: 10, price: 2.5 }],
  };
  let records = [],
    editing = null,
    storageOK = true;
  const status = document.getElementById("status"),
    form = document.getElementById("record-form"),
    fields = document.getElementById("fields"),
    tbody = document.getElementById("records");
  function message(text) {
    status.textContent = text;
  }
  try {
    const stored = localStorage.getItem(key);
    records = stored === null ? samples[kind] : core.restore(kind, stored);
  } catch {
    storageOK = false;
    message(
      "Stored data is unavailable or invalid. Using samples; changes are kept only for this session.",
    );
    records = samples[kind];
  }
  for (let i = 0; i < schema.fields.length; i++) {
    const field = schema.fields[i],
      label = document.createElement("label"),
      input = document.createElement("input");
    label.htmlFor = field;
    label.textContent = schema.labels[i];
    input.id = field;
    input.name = field;
    input.required = true;
    input.maxLength = 120;
    if (["quantity", "price"].includes(field)) {
      input.type = "number";
      input.min = "0";
      input.max = "1000000";
      input.step = field === "price" ? "0.01" : "1";
    }
    fields.append(label, input);
  }
  const head = document.getElementById("columns");
  for (const label of [
    ...schema.labels,
    ...(kind === "library" ? ["Loan"] : []),
    "Actions",
  ]) {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = label;
    head.append(th);
  }
  function persist() {
    if (storageOK) {
      try {
        localStorage.setItem(key, JSON.stringify(records));
      } catch {
        storageOK = false;
        message(
          "Storage is unavailable; changes are kept only for this session.",
        );
      }
    }
    render();
  }
  function clear() {
    editing = null;
    form.reset();
    document.getElementById("save").textContent = "Add record";
    document.getElementById("cancel").hidden = true;
  }
  function button(label, fn) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.addEventListener("click", fn);
    return b;
  }
  function render() {
    const filtered = core.search(
      records,
      document.getElementById("search").value,
    );
    tbody.replaceChildren();
    for (const record of filtered) {
      const tr = document.createElement("tr");
      for (const field of schema.fields) {
        const td = document.createElement("td");
        td.textContent =
          field === "price" ? record[field].toFixed(2) : record[field];
        tr.append(td);
      }
      if (kind === "library") {
        const td = document.createElement("td");
        td.textContent = record.borrower
          ? "Borrowed by " + record.borrower
          : "Available";
        tr.append(td);
      }
      const actions = document.createElement("td");
      actions.className = "actions";
      actions.append(
        button("Edit " + record.id, () => {
          editing = record.id;
          for (const field of schema.fields)
            form.elements[field].value = record[field];
          document.getElementById("save").textContent = "Save changes";
          document.getElementById("cancel").hidden = false;
          form.elements.id.focus();
        }),
        button("Delete " + record.id, () => {
          if (!confirm("Delete record " + record.id + "?")) return;
          records = records.filter((r) => r.id !== record.id);
          if (editing === record.id) clear();
          message("Record deleted.");
          persist();
        }),
      );
      if (kind === "library")
        actions.append(
          button((record.borrower ? "Return " : "Borrow ") + record.id, () => {
            try {
              if (record.borrower)
                records = core.returnBook(records, record.id);
              else {
                const borrower = prompt("Borrower name");
                if (borrower === null) return;
                records = core.loan(records, record.id, borrower);
              }
              message("Loan updated.");
              persist();
            } catch (e) {
              message(e.message);
            }
          }),
        );
      tr.append(actions);
      tbody.append(tr);
    }
    document.getElementById("count").textContent =
      filtered.length +
      " of " +
      records.length +
      " records" +
      (kind === "inventory"
        ? " · Stock value: " +
          records.reduce((sum, r) => sum + r.quantity * r.price, 0).toFixed(2)
        : "");
    document.getElementById("empty").hidden = filtered.length > 0;
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const input = Object.fromEntries(new FormData(form));
      if (kind === "library")
        input.borrower = records.find((r) => r.id === editing)?.borrower || "";
      if (records.length >= 10000 && editing === null)
        throw new Error("Collection limit is 10000 records.");
      records = core.upsert(kind, records, input, editing);
      clear();
      message("Record saved." + (storageOK ? "" : " Session only."));
      persist();
    } catch (error) {
      message(error.message);
    }
  });
  document.getElementById("cancel").addEventListener("click", clear);
  document.getElementById("search").addEventListener("input", render);
  document.getElementById("export").addEventListener("click", () => {
    const url = URL.createObjectURL(
        new Blob([JSON.stringify(records, null, 2)], {
          type: "application/json",
        }),
      ),
      a = document.createElement("a");
    a.href = url;
    a.download = kind + "-records.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    message("JSON exported.");
  });
  render();
})();
