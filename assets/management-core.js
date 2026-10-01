(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.ManagementCore = api;
})(globalThis, () => {
  const schemas = {
    student: {
      fields: ["id", "name", "course"],
      labels: ["Student ID", "Name", "Course"],
    },
    library: {
      fields: ["id", "title", "author"],
      labels: ["Book ID", "Title", "Author"],
    },
    inventory: {
      fields: ["id", "name", "quantity", "price"],
      labels: ["Item ID", "Name", "Quantity", "Unit price"],
    },
  };
  function normalize(kind, input) {
    const schema = schemas[kind];
    if (!schema) throw new Error("Unknown record type.");
    const record = {};
    for (const key of schema.fields) {
      const value = String(input[key] ?? "").trim();
      if (!value || value.length > 120)
        throw new Error(
          "Every field is required, with at most 120 characters.",
        );
      record[key] = value;
    }
    if (kind === "inventory") {
      record.quantity = Number(record.quantity);
      record.price = Number(record.price);
      if (
        !Number.isSafeInteger(record.quantity) ||
        record.quantity < 0 ||
        record.quantity > 1000000
      )
        throw new Error("Quantity must be a whole number from 0 to 1000000.");
      if (
        !Number.isFinite(record.price) ||
        record.price < 0 ||
        record.price > 1000000
      )
        throw new Error("Price must be from 0 to 1000000.");
      record.price = Math.round(record.price * 100) / 100;
    }
    if (kind === "library") {
      record.borrower = String(input.borrower ?? "").trim();
      if (record.borrower.length > 120)
        throw new Error("Borrower is too long.");
    }
    return record;
  }
  function upsert(kind, records, input, editing = null) {
    const record = normalize(kind, input);
    if (records.some((r) => r.id === record.id && r.id !== editing))
      throw new Error("This ID already exists.");
    if (editing !== null && !records.some((r) => r.id === editing))
      throw new Error("Record no longer exists.");
    return editing === null
      ? [...records, record]
      : records.map((r) => (r.id === editing ? record : r));
  }
  function loan(records, id, borrower) {
    const name = String(borrower).trim();
    if (!name || name.length > 120)
      throw new Error("Enter a borrower name (at most 120 characters).");
    const record = records.find((r) => r.id === id);
    if (!record) throw new Error("Book not found.");
    if (record.borrower) throw new Error("Book is already borrowed.");
    return records.map((r) => (r.id === id ? { ...r, borrower: name } : r));
  }
  function returnBook(records, id) {
    if (!records.some((r) => r.id === id)) throw new Error("Book not found.");
    return records.map((r) => (r.id === id ? { ...r, borrower: "" } : r));
  }
  function restore(kind, text) {
    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length > 10000)
      throw new Error("Invalid stored collection.");
    const records = data.map((r) => normalize(kind, r));
    if (new Set(records.map((r) => r.id)).size !== records.length)
      throw new Error("Duplicate stored IDs.");
    return records;
  }
  function search(records, query) {
    const q = String(query).trim().toLowerCase();
    return records.filter((r) =>
      Object.values(r).some((v) => String(v).toLowerCase().includes(q)),
    );
  }
  return { schemas, normalize, upsert, loan, returnBook, restore, search };
});
