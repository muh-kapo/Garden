const STORAGE_KEY = "garden-owner-feedback-state";

const colors = {
  BP: "Baby Pink",
  BB: "Baby Blue",
  BE: "Beige",
  BK: "Black",
  BW: "Brown",
  BU: "Burgundy",
  BY: "Butter Yellow",
  CF: "Cafe",
  GN: "Green",
  GY: "Grey",
  LL: "Lilac",
  MT: "Mint",
  NB: "Navy Blue",
  NG: "Navy Green",
  ND: "Nude",
  OL: "Olive",
  OR: "Orange",
  PP: "Pepsi",
  PK: "Pink",
  PR: "Purple",
  RD: "Red",
  RB: "Royal Blue",
  WH: "White",
};

const categories = {
  DR: "Wedding dress",
  EV: "Evening dress",
  AC: "Accessory",
  VL: "Veil",
  SH: "Shoes",
};

const sizes = {
  RG: "Regular",
  CV: "Curvey",
  OW: "Overweight",
};

const fabricTypes = ["Lace", "Satin", "Tulle", "Organza", "Chiffon", "Crepe", "Mikado", "Sequin", "Beaded"];
const fabricSources = ["Main supplier", "Fabric market", "Tulip storage", "Designer source", "Accessories supplier", "Imported fabric", "Local tailor"];
const taskTypes = [
  "Confirm pickup time",
  "Inspect return condition",
  "Send cleaning item",
  "Follow up payment balance",
  "Prepare dress for fitting",
  "Update item photos",
  "Call new lead",
  "Close daily cash report",
  "Check alteration progress",
];

const seedState = {
  role: "Owner",
  items: [
    {
      code: "DR-RG-WH-LC-0001",
      description: "Wedding dress / Regular / White / Lace",
      categoryCode: "DR",
      sizeCode: "RG",
      colorCode: "WH",
      status: "Available",
      location: "Rack A / Shelf 1",
      rentalPrice: 18000,
      insuranceAmount: 10000,
      baseCost: 42000,
      salePrice: 72000,
      fabricType: "Lace",
      fabricSource: "Main supplier",
      fabricMeters: 6,
      rentCount: 0,
      notes: "Excellent condition",
    },
    {
      code: "DR-RG-BP-LC-0002",
      description: "Wedding dress / Regular / Baby Pink / Lace",
      categoryCode: "DR",
      sizeCode: "RG",
      colorCode: "BP",
      status: "Rented",
      location: "Out with customer",
      rentalPrice: 22000,
      insuranceAmount: 12000,
      baseCost: 50000,
      salePrice: 84000,
      fabricType: "Lace",
      fabricSource: "Main supplier",
      fabricMeters: 7,
      rentCount: 4,
      notes: "Return check required",
    },
    {
      code: "EV-RG-GN-ST-0003",
      description: "Evening dress / Regular / Green / Satin",
      categoryCode: "EV",
      sizeCode: "RG",
      colorCode: "GN",
      status: "Reserved",
      location: "Rack C / Shelf 2",
      rentalPrice: 9000,
      insuranceAmount: 5000,
      baseCost: 18000,
      salePrice: 31000,
      fabricType: "Satin",
      fabricSource: "Fabric market",
      fabricMeters: 4.5,
      rentCount: 2,
      notes: "Reserved for weekend",
    },
    {
      code: "VL-RG-WH-TL-0004",
      description: "Veil / Regular / White / Tulle",
      categoryCode: "VL",
      sizeCode: "RG",
      colorCode: "WH",
      status: "Cleaning",
      location: "Cleaning queue",
      rentalPrice: 2500,
      insuranceAmount: 1500,
      baseCost: 4500,
      salePrice: 9500,
      fabricType: "Tulle",
      fabricSource: "Accessories supplier",
      fabricMeters: 2,
      rentCount: 6,
      notes: "Minor makeup mark",
    },
    {
      code: "DR-CV-ND-ST-0005",
      description: "Wedding dress / Curvey / Nude / Satin",
      categoryCode: "DR",
      sizeCode: "CV",
      colorCode: "ND",
      status: "Alteration",
      location: "Tailor desk",
      rentalPrice: 19000,
      insuranceAmount: 10000,
      baseCost: 39000,
      salePrice: 69000,
      fabricType: "Satin",
      fabricSource: "Main supplier",
      fabricMeters: 6.5,
      rentCount: 1,
      notes: "Hem adjustment",
    },
    {
      code: "DR-OW-WH-OG-0006",
      description: "Wedding dress / Overweight / White / Organza",
      categoryCode: "DR",
      sizeCode: "OW",
      colorCode: "WH",
      status: "Sold",
      location: "Sold stock",
      rentalPrice: 24000,
      insuranceAmount: 13000,
      baseCost: 56000,
      salePrice: 93000,
      fabricType: "Organza",
      fabricSource: "Imported fabric",
      fabricMeters: 8,
      rentCount: 5,
      notes: "Sold on June 6",
    },
  ],
  customers: [
    { name: "Aisha N.", phone: "+20 100 111 2299", method: "Instagram", salesPerson: "Nour", eventDate: "2026-06-15", notes: "Bride, prefers white gowns" },
    { name: "Mariam K.", phone: "+20 111 219 8841", method: "Old customer", salesPerson: "Salma", eventDate: "2026-06-08", notes: "Needs veil and shoes" },
    { name: "Sara H.", phone: "+20 122 700 3321", method: "Google", salesPerson: "Nour", eventDate: "2026-07-02", notes: "Evening dress customer" },
  ],
  rentals: [
    {
      customer: "Mariam K.",
      itemCode: "DR-RG-BP-LC-0002",
      itemName: "Wedding dress / Regular / Baby Pink / Lace",
      pickup: "2026-06-11",
      returnDate: "2026-06-12",
      status: "Rented",
      insuranceAmount: 12000,
      paymentMethod: "Cash",
      paid: 15000,
      balance: 7000,
    },
    {
      customer: "Sara H.",
      itemCode: "EV-RG-GN-ST-0003",
      itemName: "Evening dress / Regular / Green / Satin",
      pickup: "2026-06-15",
      returnDate: "2026-06-17",
      status: "Reserved",
      insuranceAmount: 5000,
      paymentMethod: "Card",
      paid: 3000,
      balance: 6000,
    },
    {
      customer: "Aisha N.",
      itemCode: "DR-OW-WH-OG-0006",
      itemName: "Wedding dress / Overweight / White / Organza",
      pickup: "2026-07-15",
      returnDate: "2026-07-16",
      status: "Returned",
      insuranceAmount: 13000,
      paymentMethod: "Instapay",
      paid: 24000,
      balance: 0,
    },
  ],
  sales: [
    {
      customer: "Aisha N.",
      itemCode: "DR-OW-WH-OG-0006",
      itemName: "Wedding dress / Overweight / White / Organza",
      date: "2026-06-06",
      status: "Paid",
      paymentMethod: "Card",
      basePrice: 56000,
      salePrice: 93000,
      paid: 93000,
      balance: 0,
      profit: 37000,
      salesPerson: "Nour",
    },
  ],
  expenses: [
    { category: "Cleaning", label: "Cleaning service", amount: 3200, date: "2026-06-07" },
    { category: "Tailoring", label: "Alteration supplies", amount: 1800, date: "2026-06-06" },
    { category: "Fabric", label: "Lace fabric purchase", amount: 9500, date: "2026-06-05" },
    { category: "Marketing", label: "Instagram campaign", amount: 5000, date: "2026-06-09" },
    { category: "Rent", label: "Shop rent", amount: 25000, date: "2026-06-01" },
  ],
  tasks: [
    { title: "Inspect return condition", owner: "Storage staff", status: "Today", dueDate: "2026-06-11", linked: "Rental for Mariam K.", details: "Check lace and hem before cleaning." },
    { title: "Confirm pickup time", owner: "Sales staff", status: "Today", dueDate: "2026-06-11", linked: "Sara H.", details: "Confirm by phone." },
    { title: "Update item photos", owner: "Manager", status: "Next", dueDate: "2026-06-13", linked: "New stock", details: "Use clear front/back photos." },
    { title: "Close daily cash report", owner: "Accountant", status: "Done", dueDate: "2026-06-10", linked: "Accounting", details: "Cash counted." },
  ],
  buyingNeeds: [
    { need: "White veils", quantity: 6, reason: "High rental demand with bridal gowns", priority: "High", estimate: 18000, responsiblePerson: "Manager", purchaseStatus: "Needed", purchaseDate: "" },
    { need: "Overweight bridal gowns", quantity: 3, reason: "Few Overweight choices available", priority: "High", estimate: 140000, responsiblePerson: "Owner", purchaseStatus: "Researching", purchaseDate: "" },
    { need: "Green evening dresses", quantity: 4, reason: "Popular color this month", priority: "Medium", estimate: 45000, responsiblePerson: "Sales staff", purchaseStatus: "Ordered", purchaseDate: "2026-06-10" },
  ],
};

let state = loadState();

const viewTitles = {
  dashboard: "Dashboard",
  inventory: "Inventory",
  rentals: "Rentals",
  sales: "Sales",
  customers: "Customers",
  accounting: "Accounting lite",
  tasks: "Staff tasks",
  buying: "Buying list",
};

function loadState() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return structuredClone(seedState);
  try {
    return { ...structuredClone(seedState), ...JSON.parse(stored) };
  } catch {
    return structuredClone(seedState);
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function currentMonth() {
  return todayISO().slice(0, 7);
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(Number(amount || 0));
}

function statusClass(status) {
  return String(status).toLowerCase().replace(/\s+/g, "-");
}

function badge(status, type = "status") {
  return `<span class="${type}-badge ${statusClass(status)}">${status}</span>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isPrivileged() {
  return state.role === "Owner" || state.role === "Admin";
}

function itemDescription(item) {
  return [
    categories[item.categoryCode] || item.category || "Item",
    sizes[item.sizeCode] || item.size || "Size",
    colors[item.colorCode] || item.color || "Color",
    item.fabricType || "Fabric",
  ].join(" / ");
}

function fabricCode(fabric) {
  return {
    Lace: "LC",
    Satin: "ST",
    Tulle: "TL",
    Organza: "OG",
    Chiffon: "CH",
    Crepe: "CR",
    Mikado: "MK",
    Sequin: "SQ",
    Beaded: "BD",
  }[fabric] || "FB";
}

function nextItemCode(categoryCode, sizeCode, colorCode, fabricType) {
  const nextNumber =
    Math.max(
      0,
      ...state.items.map((item) => {
        const match = String(item.code).match(/(\d+)$/);
        return match ? Number(match[1]) : 0;
      }),
    ) + 1;
  return `${categoryCode}-${sizeCode}-${colorCode}-${fabricCode(fabricType)}-${String(nextNumber).padStart(4, "0")}`;
}

function selectedMonthRecords(records, dateKey, month) {
  return records.filter((record) => String(record[dateKey] || "").startsWith(month));
}

function totalExpenses(month = currentMonth()) {
  return selectedMonthRecords(state.expenses, "date", month).reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function totalPaidIncome(month = currentMonth()) {
  const rentalIncome = selectedMonthRecords(state.rentals, "pickup", month).reduce((sum, rental) => sum + Number(rental.paid || 0), 0);
  const salesIncome = selectedMonthRecords(state.sales, "date", month).reduce((sum, sale) => sum + Number(sale.paid || 0), 0);
  return rentalIncome + salesIncome;
}

function renderSummary() {
  const available = state.items.filter((item) => item.status === "Available").length;
  const rented = state.items.filter((item) => item.status === "Rented").length;
  const selectedDate = document.querySelector("#analysis-date")?.value || todayISO();
  const todayReturns = state.rentals.filter((rental) => rental.returnDate === selectedDate).length;
  const netProfit = totalPaidIncome(currentMonth()) - totalExpenses(currentMonth());

  document.querySelector("#available-count").textContent = available;
  document.querySelector("#rented-count").textContent = rented;
  document.querySelector("#returns-count").textContent = todayReturns;
  document.querySelector("#net-profit").textContent = isPrivileged() ? formatMoney(netProfit) : "Hidden";
}

function renderDashboard() {
  if (!isPrivileged()) return;

  const selectedDate = document.querySelector("#analysis-date").value || todayISO();
  const selectedMonth = document.querySelector("#analysis-month").value || currentMonth();
  const dayRentals = state.rentals.filter((rental) => rental.pickup <= selectedDate && rental.returnDate >= selectedDate);
  const monthRentals = selectedMonthRecords(state.rentals, "pickup", selectedMonth);
  const monthSales = selectedMonthRecords(state.sales, "date", selectedMonth);
  const monthExpenses = selectedMonthRecords(state.expenses, "date", selectedMonth);
  const rentalIncome = monthRentals.reduce((sum, rental) => sum + Number(rental.paid || 0), 0);
  const salesIncome = monthSales.reduce((sum, sale) => sum + Number(sale.paid || 0), 0);
  const expenseTotal = monthExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const netProfit = rentalIncome + salesIncome - expenseTotal;
  const lastRented = [...state.rentals].sort((a, b) => b.pickup.localeCompare(a.pickup))[0];
  const mostProfitable = [...state.sales].sort((a, b) => Number(b.profit || 0) - Number(a.profit || 0))[0];

  const reports = [
    { label: "Dresses rented on selected date", value: dayRentals.length, note: selectedDate },
    { label: "This month profit", value: formatMoney(netProfit), note: `${selectedMonth} after expenses` },
    { label: "Most profitable dress", value: mostProfitable?.itemCode || "-", note: mostProfitable ? formatMoney(mostProfitable.profit) : "No sales yet" },
    { label: "Last rented", value: lastRented?.itemCode || "-", note: lastRented ? `${lastRented.customer} / ${lastRented.pickup}` : "No rentals yet" },
    { label: "Sales income", value: formatMoney(salesIncome), note: "Paid sales in selected month" },
    { label: "Rental income", value: formatMoney(rentalIncome), note: "Paid rentals in selected month" },
  ];

  document.querySelector("#analytics-grid").innerHTML = reports
    .map(
      (report) => `
        <article class="report-item">
          <strong>${escapeHtml(report.label)}</strong>
          <h2>${escapeHtml(report.value)}</h2>
          <p>${escapeHtml(report.note)}</p>
        </article>
      `,
    )
    .join("");

  const topExpenses = [...monthExpenses].sort((a, b) => Number(b.amount) - Number(a.amount)).slice(0, 5);
  document.querySelector("#top-expenses-list").innerHTML =
    topExpenses
      .map(
        (expense) => `
          <article class="list-item">
            <div>
              <span class="item-title">${escapeHtml(expense.category)}</span>
              <span class="item-meta">${escapeHtml(expense.label)} / ${escapeHtml(expense.date)}</span>
            </div>
            <strong>${formatMoney(expense.amount)}</strong>
          </article>
        `,
      )
      .join("") || `<article class="list-item"><span class="item-meta">No expenses in this month.</span></article>`;

  renderRentalCalendar(selectedMonth);

  const activity = [
    ...state.rentals.map((rental) => ({ title: `Rental ${rental.status}`, meta: `${rental.customer} / ${rental.itemCode}`, value: rental.pickup })),
    ...state.sales.map((sale) => ({ title: "Sale", meta: `${sale.customer} / ${sale.itemCode}`, value: formatMoney(sale.profit) })),
    ...state.tasks.map((task) => ({ title: task.title, meta: `${task.owner} / ${task.linked || "General"}`, value: task.status })),
  ].slice(0, 9);

  document.querySelector("#activity-grid").innerHTML = activity
    .map(
      (entry) => `
        <article class="activity-item">
          <div>
            <span class="item-title">${escapeHtml(entry.title)}</span>
            <span class="item-meta">${escapeHtml(entry.meta)}</span>
          </div>
          <strong>${escapeHtml(entry.value)}</strong>
        </article>
      `,
    )
    .join("");
}

function renderRentalCalendar(month) {
  const [year, monthNumber] = month.split("-").map(Number);
  const daysInMonth = new Date(year, monthNumber, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = `${month}-${String(index + 1).padStart(2, "0")}`;
    const rentals = state.rentals.filter((rental) => rental.pickup <= day && rental.returnDate >= day);
    return `
      <article class="calendar-day">
        <strong>${index + 1}</strong>
        <span class="item-meta">${rentals.length} rented</span>
        ${rentals.map((rental) => `<span class="calendar-entry">${escapeHtml(rental.itemCode)}</span>`).join("")}
      </article>
    `;
  });

  document.querySelector("#rental-calendar").innerHTML = days.join("");
}

function renderInventory() {
  const search = document.querySelector("#inventory-search").value.trim().toLowerCase();
  const statusFilter = document.querySelector("#inventory-status-filter").value;
  const filtered = state.items.filter((item) => {
    const matchesSearch = [item.code, item.description, itemDescription(item), item.location, item.fabricSource, item.fabricType]
      .join(" ")
      .toLowerCase()
      .includes(search);
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  document.querySelector("#inventory-table").innerHTML = filtered
    .map(
      (item) => `
        <tr>
          <td><strong>${escapeHtml(item.code)}</strong></td>
          <td>${escapeHtml(item.description || itemDescription(item))}</td>
          <td>${escapeHtml(sizes[item.sizeCode] || item.size || "-")}</td>
          <td>${escapeHtml(colors[item.colorCode] || item.color || "-")}<br /><span class="item-meta">${escapeHtml(item.colorCode || "")}</span></td>
          <td>${badge(item.status)}</td>
          <td>${Number(item.rentCount || 0)}</td>
          <td>${escapeHtml(item.location)}</td>
          <td>${formatMoney(item.rentalPrice)}<br /><span class="item-meta">Deposit ${formatMoney(item.insuranceAmount)}</span></td>
          <td>${escapeHtml(item.fabricType)}<br /><span class="item-meta">${escapeHtml(item.fabricSource)} / ${Number(item.fabricMeters || 0)}m</span></td>
          <td>${formatMoney(item.salePrice)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderRentals() {
  document.querySelector("#rentals-table").innerHTML = state.rentals
    .map(
      (rental) => `
        <tr>
          <td><strong>${escapeHtml(rental.customer)}</strong></td>
          <td>${escapeHtml(rental.itemName)}<br /><span class="item-meta">${escapeHtml(rental.itemCode)}</span></td>
          <td>${escapeHtml(rental.pickup)}</td>
          <td>${escapeHtml(rental.returnDate)}</td>
          <td>${badge(rental.status)}</td>
          <td>${formatMoney(rental.insuranceAmount)}</td>
          <td>${escapeHtml(rental.paymentMethod || "-")}</td>
          <td>${formatMoney(rental.paid)}</td>
          <td>${formatMoney(rental.balance)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderSales() {
  document.querySelector("#sales-table").innerHTML = state.sales
    .map(
      (sale) => `
        <tr>
          <td><strong>${escapeHtml(sale.customer)}</strong><br /><span class="item-meta">${escapeHtml(sale.salesPerson || "-")}</span></td>
          <td>${escapeHtml(sale.itemName)}<br /><span class="item-meta">${escapeHtml(sale.itemCode)}</span></td>
          <td>${escapeHtml(sale.date)}</td>
          <td>${formatMoney(sale.basePrice)}</td>
          <td>${formatMoney(sale.paid)}<br /><span class="item-meta">Balance ${formatMoney(sale.balance)}</span></td>
          <td>${isPrivileged() ? formatMoney(sale.profit) : "Hidden"}</td>
          <td>${badge(sale.status)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderCustomers() {
  document.querySelector("#customer-grid").innerHTML = state.customers
    .map(
      (customer) => `
        <article class="customer-card">
          <strong>${escapeHtml(customer.name)}</strong>
          <span class="item-meta">${escapeHtml(customer.phone)}</span>
          <span class="item-meta">Method: ${escapeHtml(customer.method || "-")}</span>
          <span class="item-meta">Sales person: ${escapeHtml(customer.salesPerson || "-")}</span>
          <span class="item-meta">Event: ${escapeHtml(customer.eventDate || "-")}</span>
          <p>${escapeHtml(customer.notes || "")}</p>
        </article>
      `,
    )
    .join("");
}

function renderAccounting() {
  if (!isPrivileged()) return;

  const rentalIncome = state.rentals.reduce((sum, rental) => sum + Number(rental.paid || 0), 0);
  const salesIncome = state.sales.reduce((sum, sale) => sum + Number(sale.paid || 0), 0);
  const expenses = state.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const openBalances = [...state.rentals, ...state.sales].reduce((sum, record) => sum + Number(record.balance || 0), 0);
  const depositsHeld = state.rentals.reduce((sum, rental) => sum + Number(rental.insuranceAmount || 0), 0);
  const netProfit = rentalIncome + salesIncome - expenses;

  const rentalCounts = state.rentals.reduce((counts, rental) => {
    counts[rental.itemCode] = (counts[rental.itemCode] || 0) + 1;
    return counts;
  }, {});
  const mostRented = Object.entries(rentalCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([itemCode, count]) => `${itemCode} (${count})`)
    .join(", ");

  const reports = [
    { label: "Rental income", value: formatMoney(rentalIncome), note: "Paid rental amounts" },
    { label: "Sales income", value: formatMoney(salesIncome), note: "Paid sale amounts" },
    { label: "Expenses", value: formatMoney(expenses), note: "All recorded expenses" },
    { label: "Open balances", value: formatMoney(openBalances), note: "Customer money still due" },
    { label: "Net profit", value: formatMoney(netProfit), note: "Income minus expenses" },
    { label: "Deposits held", value: formatMoney(depositsHeld), note: "Customer insurance/deposit amounts" },
    { label: "Most rented dresses", value: mostRented || "-", note: "Based on rental records" },
  ];

  document.querySelector("#accounting-grid").innerHTML = reports
    .map(
      (report) => `
        <article class="report-item">
          <strong>${escapeHtml(report.label)}</strong>
          <h2>${escapeHtml(report.value)}</h2>
          <p>${escapeHtml(report.note)}</p>
        </article>
      `,
    )
    .join("");
}

function renderTasks() {
  const columns = ["Today", "Next", "Done"];
  document.querySelector("#task-board").innerHTML = columns
    .map((column) => {
      const tasks = state.tasks.filter((task) => task.status === column);
      return `
        <section class="task-column">
          <h2>${column}</h2>
          ${tasks
            .map(
              (task) => `
                <article class="task-card">
                  <strong>${escapeHtml(task.title)}</strong>
                  <span class="item-meta">${escapeHtml(task.owner)}</span>
                  <span class="item-meta">Due: ${escapeHtml(task.dueDate || "-")}</span>
                  <span class="item-meta">${escapeHtml(task.linked || "General task")}</span>
                  <p>${escapeHtml(task.details || "")}</p>
                </article>
              `,
            )
            .join("")}
        </section>
      `;
    })
    .join("");
}

function renderBuying() {
  document.querySelector("#buying-table").innerHTML = state.buyingNeeds
    .map(
      (need) => `
        <tr>
          <td><strong>${escapeHtml(need.need)}</strong></td>
          <td>${Number(need.quantity || 0)}</td>
          <td>${escapeHtml(need.reason)}</td>
          <td>${badge(need.priority, "priority")}</td>
          <td>${formatMoney(need.estimate)}</td>
          <td>${escapeHtml(need.responsiblePerson || "-")}</td>
          <td>${escapeHtml(need.purchaseStatus || "-")}</td>
          <td>${escapeHtml(need.purchaseDate || "-")}</td>
        </tr>
      `,
    )
    .join("");
}

function renderRoleAccess() {
  document.querySelectorAll("[data-owner-only]").forEach((element) => {
    element.classList.toggle("is-hidden", !isPrivileged());
  });
  document.querySelectorAll("[data-profit-card]").forEach((element) => {
    element.classList.toggle("is-hidden", !isPrivileged());
  });
  if (!isPrivileged() && ["dashboard", "accounting"].includes(activeView())) {
    setView("inventory");
  }
}

function activeView() {
  return document.querySelector(".nav-item.is-active")?.dataset.view || "dashboard";
}

function renderAll() {
  renderRoleAccess();
  renderSummary();
  renderDashboard();
  renderInventory();
  renderRentals();
  renderSales();
  renderCustomers();
  renderAccounting();
  renderTasks();
  renderBuying();
}

function setView(view) {
  if (!isPrivileged() && ["dashboard", "accounting"].includes(view)) {
    view = "inventory";
  }

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === view);
  });
  document.querySelector("#view-title").textContent = viewTitles[view];
}

function fillSelect(select, entries) {
  select.innerHTML = entries.map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("");
}

function populateStaticDropdowns() {
  fillSelect(
    document.querySelector("#item-form [name='colorCode']"),
    Object.entries(colors).map(([code, label]) => [code, `${code} - ${label}`]),
  );
  fillSelect(
    document.querySelector("#item-form [name='fabricType']"),
    fabricTypes.map((fabric) => [fabric, fabric]),
  );
  fillSelect(
    document.querySelector("#item-form [name='fabricSource']"),
    fabricSources.map((source) => [source, source]),
  );
  fillSelect(
    document.querySelector("#task-form [name='taskType']"),
    taskTypes.map((task) => [task, task]),
  );
}

function syncItemCodingFields() {
  const form = document.querySelector("#item-form");
  const categoryCode = form.elements.category.value;
  const sizeCode = form.elements.size.value;
  const colorCode = form.elements.colorCode.value;
  const fabricType = form.elements.fabricType.value;
  form.elements.code.value = nextItemCode(categoryCode, sizeCode, colorCode, fabricType);
  form.elements.description.value = itemDescription({ categoryCode, sizeCode, colorCode, fabricType });
}

function populateRentalFormOptions() {
  fillSelect(
    document.querySelector("#rental-customer"),
    state.customers.map((customer) => [customer.name, customer.name]),
  );
  fillSelect(
    document.querySelector("#rental-item"),
    state.items
      .filter((item) => item.status === "Available" || item.status === "Reserved")
      .map((item) => [item.code, `${item.code} / ${item.description || itemDescription(item)} / ${formatMoney(item.rentalPrice)}`]),
  );
}

function updateRentalAmountsFromSelectedItem() {
  const itemCode = document.querySelector("#rental-item").value;
  const item = state.items.find((stockItem) => stockItem.code === itemCode);
  if (!item) return;

  document.querySelector("#rental-form [name='insuranceAmount']").value = item.insuranceAmount || 0;
  document.querySelector("#rental-form [name='paid']").value = 0;
  document.querySelector("#rental-form [name='balance']").value = item.rentalPrice || 0;
}

function populateSaleFormOptions() {
  fillSelect(
    document.querySelector("#sale-customer"),
    state.customers.map((customer) => [customer.name, customer.name]),
  );
  fillSelect(
    document.querySelector("#sale-item"),
    state.items
      .filter((item) => item.status !== "Sold")
      .map((item) => [item.code, `${item.code} / ${item.description || itemDescription(item)} / ${formatMoney(item.salePrice)}`]),
  );
}

function updateSaleAmountsFromSelectedItem() {
  const itemCode = document.querySelector("#sale-item").value;
  const item = state.items.find((stockItem) => stockItem.code === itemCode);
  if (!item) return;

  const form = document.querySelector("#sale-form");
  form.elements.basePrice.value = item.baseCost || 0;
  form.elements.salePrice.value = item.salePrice || 0;
  form.elements.paid.value = item.salePrice || 0;
  form.elements.profit.value = Number(item.salePrice || 0) - Number(item.baseCost || 0);
}

function updateSaleProfit() {
  const form = document.querySelector("#sale-form");
  form.elements.profit.value = Number(form.elements.salePrice.value || 0) - Number(form.elements.basePrice.value || 0);
}

function openDialog(id) {
  const dialog = document.querySelector(`#${id}`);
  dialog.showModal();
}

function closeDialog(id) {
  document.querySelector(`#${id}`).close();
}

function setupEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelector("#role-select").addEventListener("change", (event) => {
    state.role = event.target.value;
    saveState();
    renderAll();
  });

  document.querySelector("#inventory-search").addEventListener("input", renderInventory);
  document.querySelector("#inventory-status-filter").addEventListener("change", renderInventory);
  document.querySelector("#analysis-date").addEventListener("change", renderAll);
  document.querySelector("#analysis-month").addEventListener("change", renderAll);

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => closeDialog(button.dataset.closeDialog));
  });

  document.querySelector("#quick-action-button").addEventListener("click", () => {
    syncItemCodingFields();
    openDialog("item-dialog");
  });

  document.querySelectorAll("#item-form [data-code-part]").forEach((field) => {
    field.addEventListener("change", syncItemCodingFields);
  });

  document.querySelector("#add-rental-button").addEventListener("click", () => {
    populateRentalFormOptions();
    updateRentalAmountsFromSelectedItem();
    openDialog("rental-dialog");
  });
  document.querySelector("#rental-item").addEventListener("change", updateRentalAmountsFromSelectedItem);

  document.querySelector("#add-sale-button").addEventListener("click", () => {
    populateSaleFormOptions();
    updateSaleAmountsFromSelectedItem();
    document.querySelector("#sale-form [name='date']").value = todayISO();
    openDialog("sale-dialog");
  });
  document.querySelector("#sale-item").addEventListener("change", updateSaleAmountsFromSelectedItem);
  document.querySelector("#sale-form [name='basePrice']").addEventListener("input", updateSaleProfit);
  document.querySelector("#sale-form [name='salePrice']").addEventListener("input", updateSaleProfit);

  document.querySelector("#add-customer-button").addEventListener("click", () => openDialog("customer-dialog"));
  document.querySelector("#add-task-button").addEventListener("click", () => {
    document.querySelector("#task-form [name='dueDate']").value = todayISO();
    openDialog("task-dialog");
  });

  document.querySelector("#seed-data-button").addEventListener("click", () => {
    state = structuredClone(seedState);
    saveState();
    document.querySelector("#role-select").value = state.role;
    setInitialDates();
    renderAll();
    setView("dashboard");
  });

  document.querySelector("#item-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const item = {
      code: formData.get("code"),
      description: formData.get("description"),
      categoryCode: formData.get("category"),
      sizeCode: formData.get("size"),
      colorCode: formData.get("colorCode"),
      location: formData.get("location"),
      status: formData.get("status"),
      rentalPrice: Number(formData.get("rentalPrice")),
      insuranceAmount: Number(formData.get("insuranceAmount")),
      baseCost: Number(formData.get("baseCost")),
      salePrice: Number(formData.get("salePrice")),
      fabricType: formData.get("fabricType"),
      fabricSource: formData.get("fabricSource"),
      fabricMeters: Number(formData.get("fabricMeters")),
      rentCount: Number(formData.get("rentCount")),
      notes: formData.get("notes"),
    };

    state.items.unshift(item);
    saveState();
    renderAll();
    form.reset();
    closeDialog("item-dialog");
    setView("inventory");
  });

  document.querySelector("#rental-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const item = state.items.find((stockItem) => stockItem.code === formData.get("itemCode"));
    if (!item) return;

    const rental = {
      customer: formData.get("customer"),
      itemCode: item.code,
      itemName: item.description || itemDescription(item),
      pickup: formData.get("pickup"),
      returnDate: formData.get("returnDate"),
      status: formData.get("status"),
      insuranceAmount: Number(formData.get("insuranceAmount")),
      paymentMethod: formData.get("paymentMethod"),
      paid: Number(formData.get("paid")),
      balance: Number(formData.get("balance")),
    };

    state.rentals.unshift(rental);
    item.status = rental.status;
    item.location = rental.status === "Rented" ? "Out with customer" : item.location;
    item.rentCount = Number(item.rentCount || 0) + 1;

    saveState();
    renderAll();
    form.reset();
    closeDialog("rental-dialog");
    setView("rentals");
  });

  document.querySelector("#sale-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const item = state.items.find((stockItem) => stockItem.code === formData.get("itemCode"));
    if (!item) return;

    const salePrice = Number(formData.get("salePrice"));
    const paid = Number(formData.get("paid"));
    const sale = {
      customer: formData.get("customer"),
      itemCode: item.code,
      itemName: item.description || itemDescription(item),
      date: formData.get("date"),
      status: formData.get("status"),
      paymentMethod: formData.get("paymentMethod"),
      basePrice: Number(formData.get("basePrice")),
      salePrice,
      paid,
      balance: Math.max(0, salePrice - paid),
      profit: Number(formData.get("profit")),
      salesPerson: formData.get("salesPerson"),
    };

    state.sales.unshift(sale);
    item.status = "Sold";
    item.location = "Sold stock";

    saveState();
    renderAll();
    form.reset();
    closeDialog("sale-dialog");
    setView("sales");
  });

  document.querySelector("#customer-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    state.customers.unshift({
      name: formData.get("name"),
      phone: formData.get("phone"),
      method: formData.get("method"),
      salesPerson: formData.get("salesPerson"),
      eventDate: formData.get("eventDate"),
      notes: formData.get("notes"),
    });
    saveState();
    renderAll();
    form.reset();
    closeDialog("customer-dialog");
    setView("customers");
  });

  document.querySelector("#task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    state.tasks.unshift({
      title: formData.get("taskType"),
      owner: formData.get("owner"),
      status: formData.get("status"),
      dueDate: formData.get("dueDate"),
      linked: formData.get("linked"),
      details: formData.get("details"),
    });
    saveState();
    renderAll();
    form.reset();
    closeDialog("task-dialog");
    setView("tasks");
  });
}

function setInitialDates() {
  document.querySelector("#analysis-date").value = todayISO();
  document.querySelector("#analysis-month").value = currentMonth();
}

function init() {
  populateStaticDropdowns();
  setInitialDates();
  document.querySelector("#role-select").value = state.role || "Owner";
  syncItemCodingFields();
  setupEvents();
  renderAll();
  setView(isPrivileged() ? "dashboard" : "inventory");
}

init();
