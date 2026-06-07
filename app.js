const STORAGE_KEY = "garden-demo-state";

const seedState = {
  items: [
    {
      code: "TULIP-DR-0001",
      name: "Pearl bridal gown",
      category: "Wedding dress",
      size: "M",
      color: "Ivory",
      status: "Available",
      location: "Rack A / Shelf 1",
      rentalPrice: 1800,
      salePrice: 7200,
      notes: "Excellent condition",
    },
    {
      code: "TULIP-DR-0002",
      name: "Rose lace gown",
      category: "Wedding dress",
      size: "S",
      color: "White",
      status: "Rented",
      location: "Out with customer",
      rentalPrice: 2200,
      salePrice: 8400,
      notes: "Return check required",
    },
    {
      code: "TULIP-EV-0003",
      name: "Emerald evening dress",
      category: "Evening dress",
      size: "L",
      color: "Green",
      status: "Reserved",
      location: "Rack C / Shelf 2",
      rentalPrice: 900,
      salePrice: 3100,
      notes: "Reserved for weekend",
    },
    {
      code: "TULIP-AC-0004",
      name: "Crystal veil",
      category: "Veil",
      size: "One size",
      color: "Ivory",
      status: "Cleaning",
      location: "Cleaning queue",
      rentalPrice: 250,
      salePrice: 950,
      notes: "Minor makeup mark",
    },
    {
      code: "TULIP-DR-0005",
      name: "Satin fitted gown",
      category: "Wedding dress",
      size: "M",
      color: "Champagne",
      status: "Alteration",
      location: "Tailor desk",
      rentalPrice: 1900,
      salePrice: 6900,
      notes: "Hem adjustment",
    },
    {
      code: "TULIP-DR-0006",
      name: "Classic ball gown",
      category: "Wedding dress",
      size: "XL",
      color: "Ivory",
      status: "Sold",
      location: "Sold stock",
      rentalPrice: 2400,
      salePrice: 9300,
      notes: "Sold on June 6",
    },
  ],
  customers: [
    {
      name: "Aisha N.",
      phone: "+971 50 111 2299",
      eventDate: "2026-06-15",
      notes: "Bride, prefers ivory gowns",
    },
    {
      name: "Mariam K.",
      phone: "+971 55 219 8841",
      eventDate: "2026-06-08",
      notes: "Needs veil and shoes",
    },
    {
      name: "Sara H.",
      phone: "+971 52 700 3321",
      eventDate: "2026-07-02",
      notes: "Evening dress customer",
    },
  ],
  rentals: [
    {
      customer: "Mariam K.",
      itemCode: "TULIP-DR-0002",
      itemName: "Rose lace gown",
      pickup: "2026-06-06",
      returnDate: "2026-06-07",
      status: "Rented",
      paid: 1500,
      balance: 700,
    },
    {
      customer: "Sara H.",
      itemCode: "TULIP-EV-0003",
      itemName: "Emerald evening dress",
      pickup: "2026-06-13",
      returnDate: "2026-06-15",
      status: "Reserved",
      paid: 300,
      balance: 600,
    },
  ],
  sales: [
    {
      customer: "Aisha N.",
      itemCode: "TULIP-DR-0006",
      itemName: "Classic ball gown",
      date: "2026-06-06",
      status: "Paid",
      paid: 9300,
      balance: 0,
    },
    {
      customer: "Mariam K.",
      itemCode: "TULIP-AC-0004",
      itemName: "Crystal hair pins",
      date: "2026-06-07",
      status: "Partial",
      paid: 250,
      balance: 150,
    },
  ],
  expenses: [
    { label: "Cleaning service", amount: 320, date: "2026-06-07" },
    { label: "Alteration supplies", amount: 180, date: "2026-06-06" },
  ],
  tasks: [
    {
      title: "Check Rose lace gown return condition",
      owner: "Storage staff",
      status: "Today",
      linked: "Rental for Mariam K.",
    },
    {
      title: "Call Sara H. to confirm pickup time",
      owner: "Sales staff",
      status: "Today",
      linked: "Reserved evening dress",
    },
    {
      title: "Update buying need for M size veils",
      owner: "Manager",
      status: "Next",
      linked: "Buying list",
    },
    {
      title: "Close daily cash report",
      owner: "Accountant",
      status: "Done",
      linked: "Accounting",
    },
  ],
  buyingNeeds: [
    {
      need: "Ivory veils",
      reason: "High rental demand with bridal gowns",
      priority: "High",
      estimate: 1800,
      status: "Needed",
    },
    {
      need: "Plus size bridal gowns",
      reason: "Few XL choices available",
      priority: "High",
      estimate: 14000,
      status: "Needed",
    },
    {
      need: "Green evening dresses",
      reason: "Popular color this month",
      priority: "Medium",
      estimate: 4500,
      status: "Researching",
    },
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
    return JSON.parse(stored);
  } catch {
    return structuredClone(seedState);
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(amount);
}

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function badge(status, type = "status") {
  return `<span class="${type}-badge ${statusClass(status)}">${status}</span>`;
}

function renderSummary() {
  const available = state.items.filter((item) => item.status === "Available").length;
  const rented = state.items.filter((item) => item.status === "Rented").length;
  const todayReturns = state.rentals.filter((rental) => rental.returnDate === "2026-06-07").length;
  const pendingBalance = [...state.rentals, ...state.sales].reduce(
    (sum, record) => sum + record.balance,
    0,
  );

  document.querySelector("#available-count").textContent = available;
  document.querySelector("#rented-count").textContent = rented;
  document.querySelector("#returns-count").textContent = todayReturns;
  document.querySelector("#pending-balance").textContent = formatMoney(pendingBalance);
}

function renderDashboard() {
  const timeline = [
    ...state.rentals.map((rental) => ({
      title: `${rental.status}: ${rental.itemName}`,
      meta: `${rental.customer} / Pickup ${rental.pickup} / Return ${rental.returnDate}`,
      status: rental.status,
      amount: formatMoney(rental.balance),
    })),
    ...state.tasks
      .filter((task) => task.status !== "Done")
      .map((task) => ({
        title: task.title,
        meta: `${task.owner} / ${task.linked}`,
        status: task.status,
        amount: task.status,
      })),
  ];

  document.querySelector("#today-timeline").innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <div>
            <span class="item-title">${item.title}</span>
            <span class="item-meta">${item.meta}</span>
          </div>
          ${badge(item.status)}
        </article>
      `,
    )
    .join("");

  const stockHealth = state.items
    .filter((item) => item.status !== "Available")
    .slice(0, 5)
    .map(
      (item) => `
        <article class="list-item">
          <div>
            <span class="item-title">${item.code}</span>
            <span class="item-meta">${item.name} / ${item.location}</span>
          </div>
          ${badge(item.status)}
        </article>
      `,
    );

  document.querySelector("#stock-health-list").innerHTML = stockHealth.join("");

  const activity = [
    { title: "Rental payment", meta: "Mariam K. paid deposit", value: formatMoney(1500) },
    { title: "Sale completed", meta: "Classic ball gown", value: formatMoney(9300) },
    { title: "Cleaning queue", meta: "Crystal veil added", value: "1 item" },
  ];

  document.querySelector("#activity-grid").innerHTML = activity
    .map(
      (entry) => `
        <article class="activity-item">
          <div>
            <span class="item-title">${entry.title}</span>
            <span class="item-meta">${entry.meta}</span>
          </div>
          <strong>${entry.value}</strong>
        </article>
      `,
    )
    .join("");
}

function renderInventory() {
  const search = document.querySelector("#inventory-search").value.trim().toLowerCase();
  const statusFilter = document.querySelector("#inventory-status-filter").value;

  const filtered = state.items.filter((item) => {
    const matchesSearch = [item.code, item.name, item.size, item.color, item.location, item.category]
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
          <td><strong>${item.code}</strong></td>
          <td>${item.name}<br /><span class="item-meta">${item.category}</span></td>
          <td>${item.size}</td>
          <td>${item.color}</td>
          <td>${badge(item.status)}</td>
          <td>${item.location}</td>
          <td>${formatMoney(item.rentalPrice)}</td>
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
          <td><strong>${rental.customer}</strong></td>
          <td>${rental.itemName}<br /><span class="item-meta">${rental.itemCode}</span></td>
          <td>${rental.pickup}</td>
          <td>${rental.returnDate}</td>
          <td>${badge(rental.status)}</td>
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
          <td><strong>${sale.customer}</strong></td>
          <td>${sale.itemName}<br /><span class="item-meta">${sale.itemCode}</span></td>
          <td>${sale.date}</td>
          <td>${badge(sale.status)}</td>
          <td>${formatMoney(sale.paid)}</td>
          <td>${formatMoney(sale.balance)}</td>
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
          <strong>${customer.name}</strong>
          <span class="item-meta">${customer.phone}</span>
          <span class="item-meta">Event: ${customer.eventDate}</span>
          <p>${customer.notes}</p>
        </article>
      `,
    )
    .join("");
}

function renderAccounting() {
  const rentalIncome = state.rentals.reduce((sum, rental) => sum + rental.paid, 0);
  const salesIncome = state.sales.reduce((sum, sale) => sum + sale.paid, 0);
  const expenses = state.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const openBalances = [...state.rentals, ...state.sales].reduce(
    (sum, record) => sum + record.balance,
    0,
  );

  const reports = [
    { label: "Rental income", value: formatMoney(rentalIncome), note: "Paid rental amounts" },
    { label: "Sales income", value: formatMoney(salesIncome), note: "Paid sale amounts" },
    { label: "Expenses", value: formatMoney(expenses), note: "Cleaning and supplies" },
    { label: "Open balances", value: formatMoney(openBalances), note: "Customer money still due" },
    {
      label: "Demo cash position",
      value: formatMoney(rentalIncome + salesIncome - expenses),
      note: "Prototype calculation",
    },
  ];

  document.querySelector("#accounting-grid").innerHTML = reports
    .map(
      (report) => `
        <article class="report-item">
          <strong>${report.label}</strong>
          <h2>${report.value}</h2>
          <p>${report.note}</p>
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
                  <strong>${task.title}</strong>
                  <span class="item-meta">${task.owner}</span>
                  <span class="item-meta">${task.linked}</span>
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
          <td><strong>${need.need}</strong></td>
          <td>${need.reason}</td>
          <td>${badge(need.priority, "priority")}</td>
          <td>${formatMoney(need.estimate)}</td>
          <td>${need.status}</td>
        </tr>
      `,
    )
    .join("");
}

function renderAll() {
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
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });

  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === view);
  });

  document.querySelector("#view-title").textContent = viewTitles[view];
}

function nextItemCode(category) {
  const categoryCode =
    {
      "Wedding dress": "DR",
      "Evening dress": "EV",
      Accessory: "AC",
      Veil: "VL",
      Shoes: "SH",
    }[category] || "IT";

  const nextNumber = state.items.length + 1;
  return `TULIP-${categoryCode}-${String(nextNumber).padStart(4, "0")}`;
}

function setupEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelector("#inventory-search").addEventListener("input", renderInventory);
  document.querySelector("#inventory-status-filter").addEventListener("change", renderInventory);

  const dialog = document.querySelector("#item-dialog");
  document.querySelector("#quick-action-button").addEventListener("click", () => dialog.showModal());

  document.querySelector("#item-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get("category");

    const item = {
      code: nextItemCode(category),
      name: formData.get("name"),
      category,
      size: formData.get("size"),
      color: formData.get("color"),
      location: formData.get("location"),
      status: formData.get("status"),
      rentalPrice: Number(formData.get("rentalPrice")),
      salePrice: Number(formData.get("salePrice")),
      notes: formData.get("notes"),
    };

    state.items.unshift(item);
    saveState();
    renderAll();
    event.currentTarget.reset();
    dialog.close();
    setView("inventory");
  });

  document.querySelector("#seed-data-button").addEventListener("click", () => {
    state = structuredClone(seedState);
    saveState();
    renderAll();
    setView("dashboard");
  });
}

setupEvents();
renderAll();
