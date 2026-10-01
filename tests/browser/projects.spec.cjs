const { test, expect } = require("@playwright/test"),
  { default: AxeBuilder } = require("@axe-core/playwright"),
  fs = require("node:fs"),
  path = require("node:path"),
  vm = require("node:vm");
const context = { window: {} };
vm.runInNewContext(
  fs.readFileSync(path.join(__dirname, "../../assets/projects.js"), "utf8"),
  context,
);
const projects = context.window.MINI_PROJECTS;
for (const item of projects)
  test("page opens without script errors: " + item.slug, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto("/" + item.slug + "/");
    expect(response.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Gallery", exact: true }).last(),
    ).toBeVisible();
    expect(errors).toEqual([]);
  });
test("gallery filters and keyboard access", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".project-card")).toHaveCount(100);
  await page.getByLabel("Search projects").fill("Fibonacci");
  await expect(page.locator(".project-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Clear filters" }).click();
  await page.getByRole("radio", { name: "Planned", exact: true }).check();
  await expect(page.locator(".project-card")).toHaveCount(27);
  await page.getByRole("button", { name: "Clear filters" }).click();
  await page
    .getByLabel("Category", { exact: true })
    .selectOption("Management apps");
  await expect(page.locator(".project-card")).toHaveCount(5);
  await page.getByLabel("Search projects").fill("no-match-zz");
  await expect(
    page.getByText("No projects match those filters."),
  ).toBeVisible();
  await page.getByRole("button", { name: "Show all projects" }).click();
  await expect(page.locator(".project-card")).toHaveCount(100);
  await page.keyboard.press("Tab");
  expect(
    await page.evaluate(() => document.activeElement !== document.body),
  ).toBe(true);
});
for (const [slug, kind, values] of [
  [
    "66-student-database",
    "student",
    { id: "T1", name: "Test Student", course: "CS" },
  ],
  [
    "67-library-management",
    "library",
    { id: "T1", title: "Test Book", author: "Writer" },
  ],
  [
    "70-inventory-management",
    "inventory",
    { id: "T1", name: "Test Item", quantity: "4", price: "2.50" },
  ],
])
  test("CRUD and persistence: " + kind, async ({ page }) => {
    await page.goto("/" + slug + "/");
    for (const [key, value] of Object.entries(values))
      await page.locator("#" + key).fill(value);
    await page.getByRole("button", { name: "Add record", exact: true }).click();
    await expect(page.locator("#status")).toHaveText("Record saved.");
    await page.reload();
    await page.locator("#search").fill("T1");
    await expect(page.locator("#records tr")).toHaveCount(1);
    await page.getByRole("button", { name: "Edit T1", exact: true }).click();
    const field = kind === "library" ? "title" : "name";
    await page.locator("#" + field).fill("Changed");
    await page.getByRole("button", { name: "Save changes" }).click();
    await expect(page.locator("#records")).toContainText("Changed");
    if (kind === "library") {
      page.once("dialog", (d) => d.accept("Jay"));
      await page
        .getByRole("button", { name: "Borrow T1", exact: true })
        .click();
      await expect(page.locator("#records")).toContainText("Borrowed by Jay");
      await page
        .getByRole("button", { name: "Return T1", exact: true })
        .click();
      await expect(page.locator("#records")).toContainText("Available");
    }
    page.once("dialog", (d) => d.accept());
    await page.getByRole("button", { name: "Delete T1", exact: true }).click();
    await expect(page.locator("#records tr")).toHaveCount(0);
  });
test("trace step play pause and reset", async ({ page }) => {
  await page.goto("/28-bubble-sort/");
  const panel = page.locator(".trace-panel");
  await panel.getByLabel("Values for the trace").fill("3,1,2");
  await panel.getByRole("button", { name: "Reset", exact: true }).click();
  await panel.getByRole("button", { name: "Step", exact: true }).click();
  await expect(panel.locator("#trace-status")).toContainText("Step 2");
  await panel.getByRole("button", { name: "Play", exact: true }).click();
  await expect(
    panel.getByRole("button", { name: "Pause", exact: true }),
  ).toBeEnabled();
  await panel.getByRole("button", { name: "Pause", exact: true }).click();
  await panel.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(panel.locator("#trace-status")).toContainText("Step 1");
  await panel.getByLabel("Values for the trace").fill("bad");
  await panel.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(panel.locator("#trace-status")).toContainText("finite numbers");
});
for (const slug of [
  "",
  "66-student-database",
  "67-library-management",
  "70-inventory-management",
])
  test("accessibility: " + (slug || "gallery"), async ({ page }) => {
    await page.goto("/" + slug + (slug ? "/" : ""));
    const scan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(scan.violations).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
  });
for (const slug of [
  "",
  "25-array-statistics",
  "28-bubble-sort",
  "48-avl-tree",
  "55-dijkstra",
  "66-student-database",
  "67-library-management",
  "70-inventory-management",
])
  test(
    "capture actual screenshot: " + (slug || "gallery"),
    async ({ page }, testInfo) => {
      await page.goto("/" + slug + (slug ? "/" : ""));
      await expect(page.locator("h1")).toBeVisible();
      if (slug === "48-avl-tree") {
        for (const value of [30, 20, 10]) {
          await page.locator("#avlInput").fill(String(value));
          await page
            .getByRole("button", { name: "Insert", exact: true })
            .click();
        }
        await page
          .locator(".trace-panel")
          .getByRole("button", { name: "Step", exact: true })
          .click();
      }
      if (slug === "28-bubble-sort") {
        await page.getByRole("button", { name: "Sort", exact: true }).click();
        await page
          .locator(".trace-panel")
          .getByRole("button", { name: "Step", exact: true })
          .click();
      }
      await page.evaluate(() => document.fonts.ready);
      const folder = path.join(__dirname, "../../artifacts/screenshots");
      fs.mkdirSync(folder, { recursive: true });
      await page.screenshot({
        path: path.join(
          folder,
          (slug || "gallery") + "-" + testInfo.project.name + ".png",
        ),
        fullPage: Boolean(slug),
      });
    },
  );
