
// // // ===================================
// // // STUDENT EXPENSE TRACKER
// // // ===================================


// // // 1. GET HTML ELEMENTS

// // const budgetForm = document.getElementById("budgetForm");
// // const budgetInput = document.getElementById("budgetInput");

// // const expenseForm = document.getElementById("expenseForm");
// // const expenseName = document.getElementById("expenseName");
// // const expenseAmount = document.getElementById("expenseAmount");
// // const expenseCategory = document.getElementById("expenseCategory");
// // const expenseDate = document.getElementById("expenseDate");

// // const budgetDisplay = document.getElementById("budgetAmount");
// // const spentDisplay = document.getElementById("totalSpent");
// // const balanceDisplay = document.getElementById("remainingBalance");

// // const expenseList = document.getElementById("expenseList");
// // const transactionCount = document.getElementById("transactionCount");

// // const todayDate = document.getElementById("todayDate");


// // // 2. LOCAL STORAGE

// // let budget = Number(localStorage.getItem("studentBudget")) || 0;

// // let expenses = JSON.parse(
// //     localStorage.getItem("studentExpenses")
// // ) || [];


// // // 3. CATEGORY ICONS

// // const categoryIcons = {
// //     Food: "🍔",
// //     Education: "📚",
// //     Transport: "🚌",
// //     Shopping: "🛍️",
// //     Entertainment: "🎬",
// //     Other: "📦"
// // };


// // // 4. GET TODAY'S DATE

// // function getTodayDate() {
// //     const today = new Date();

// //     const year = today.getFullYear();
// //     const month = String(today.getMonth() + 1).padStart(2, "0");
// //     const day = String(today.getDate()).padStart(2, "0");

// //     return `${year}-${month}-${day}`;
// // }

// // expenseDate.value = getTodayDate();

// // todayDate.textContent = new Date().toLocaleDateString(
// //     "en-IN",
// //     {
// //         day: "numeric",
// //         month: "long",
// //         year: "numeric"
// //     }
// // );


// // // 5. FORMAT MONEY

// // function formatMoney(amount) {
// //     return new Intl.NumberFormat("en-IN", {
// //         style: "currency",
// //         currency: "INR",
// //         maximumFractionDigits: 2
// //     }).format(amount);
// // }


// // // 6. SAVE DATA

// // function saveData() {
// //     localStorage.setItem("studentBudget", budget);

// //     localStorage.setItem(
// //         "studentExpenses",
// //         JSON.stringify(expenses)
// //     );
// // }


// // // 7. SET MONTHLY BUDGET

// // budgetForm.addEventListener("submit", function(event) {

// //     event.preventDefault();

// //     const enteredBudget = Number(budgetInput.value);

// //     if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
// //         alert("Please enter a valid budget amount.");
// //         return;
// //     }

// //     budget = enteredBudget;

// //     saveData();

// //     updateDashboard();

// //     budgetInput.value = "";

// //     alert("Monthly budget saved successfully!");
// // });


// // // 8. ADD NEW EXPENSE

// // expenseForm.addEventListener("submit", function(event) {

// //     event.preventDefault();

// //     const name = expenseName.value.trim();
// //     const amount = Number(expenseAmount.value);
// //     const category = expenseCategory.value;
// //     const date = expenseDate.value;

// //     if (
// //         !name ||
// //         !Number.isFinite(amount) ||
// //         amount <= 0 ||
// //         !category ||
// //         !date
// //     ) {
// //         alert("Please enter valid expense details.");
// //         return;
// //     }

// //     const newExpense = {
// //         id: Date.now() + Math.random(),
// //         name: name,
// //         amount: amount,
// //         category: category,
// //         date: date
// //     };

// //     expenses.push(newExpense);

// //     saveData();

// //     updateDashboard();

// //     expenseForm.reset();

// //     expenseDate.value = getTodayDate();

// // });


// // // 9. CALCULATE MONTHLY EXPENSES

// // function getMonthlyExpenses() {

// //     const currentMonth = getTodayDate().slice(0, 7);

// //     return expenses.filter(function(expense) {
// //         return expense.date.startsWith(currentMonth);
// //     });
// // }


// // // 10. UPDATE DASHBOARD

// // function updateDashboard() {

// //     const monthlyExpenses = getMonthlyExpenses();

// //     const totalSpent = monthlyExpenses.reduce(
// //         function(total, expense) {
// //             return total + expense.amount;
// //         },
// //         0
// //     );

// //     const remaining = budget - totalSpent;

// //     budgetDisplay.textContent = formatMoney(budget);

// //     spentDisplay.textContent = formatMoney(totalSpent);

// //     balanceDisplay.textContent = formatMoney(remaining);

// //     if (remaining < 0) {
// //         balanceDisplay.style.color = "#dc5353";
// //     } else {
// //         balanceDisplay.style.color = "#15956a";
// //     }

// //     transactionCount.textContent =
// //         `${expenses.length} ${expenses.length === 1 ? "Transaction" : "Transactions"}`;

// //     displayExpenses();
// // }


// // // 11. DISPLAY EXPENSES

// // function displayExpenses() {

// //     expenseList.innerHTML = "";

// //     if (expenses.length === 0) {

// //         expenseList.innerHTML = `
// //             <div class="empty-state">
// //                 <div class="empty-icon">🧾</div>
// //                 <h3>No expenses yet</h3>
// //                 <p>Add your first expense to get started!</p>
// //             </div>
// //         `;

// //         return;
// //     }

// //     const sortedExpenses = [...expenses].sort(
// //         function(a, b) {
// //             return b.date.localeCompare(a.date) || b.id - a.id;
// //         }
// //     );

// //     sortedExpenses.forEach(function(expense) {

// //         const item = document.createElement("div");

// //         item.className = "expense-item";

// //         const info = document.createElement("div");
// //         info.className = "expense-info";

// //         const icon = document.createElement("div");
// //         icon.className = "category-icon";
// //         icon.textContent = categoryIcons[expense.category] || "📦";

// //         const details = document.createElement("div");
// //         details.className = "expense-details";

// //         const name = document.createElement("h4");
// //         name.textContent = expense.name;

// //         const description = document.createElement("p");

// //         const formattedDate = new Date(
// //             expense.date + "T00:00:00"
// //         ).toLocaleDateString("en-IN", {
// //             day: "numeric",
// //             month: "short",
// //             year: "numeric"
// //         });

// //         description.textContent =
// //             `${expense.category} • ${formattedDate}`;

// //         details.append(name, description);
// //         info.append(icon, details);

// //         const actions = document.createElement("div");
// //         actions.className = "expense-actions";

// //         const amount = document.createElement("span");
// //         amount.className = "expense-amount";
// //         amount.textContent = `-${formatMoney(expense.amount)}`;

// //         const deleteButton = document.createElement("button");
// //         deleteButton.className = "delete-btn";
// //         deleteButton.textContent = "Delete";

// //         deleteButton.addEventListener("click", function() {
// //             deleteExpense(expense.id);
// //         });

// //         actions.append(amount, deleteButton);

// //         item.append(info, actions);

// //         expenseList.appendChild(item);

// //     });
// // }


// // // 12. DELETE EXPENSE

// // function deleteExpense(id) {

// //     const confirmed = confirm(
// //         "Are you sure you want to delete this expense?"
// //     );

// //     if (!confirmed) {
// //         return;
// //     }

// //     expenses = expenses.filter(function(expense) {
// //         return expense.id !== id;
// //     });

// //     saveData();

// //     updateDashboard();
// // }


// // // 13. LOAD SAVED DATA WHEN PAGE OPENS

// // budgetInput.value = budget || "";

// // updateDashboard();


// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     font-family: Arial, sans-serif;
//     background: #f4f6fa;
//     color: #202938;
//     padding: 30px 16px;
// }

// .container {
//     max-width: 1150px;
//     margin: auto;
// }

// .header {
//     margin-bottom: 30px;
// }

// .eyebrow {
//     color: #16a085;
//     font-size: 12px;
//     font-weight: bold;
//     letter-spacing: 2px;
//     margin-bottom: 10px;
// }

// .header h1 {
//     font-size: 30px;
//     margin-bottom: 8px;
// }

// .header p:last-child,
// .description {
//     color: #778194;
//     font-size: 14px;
//     line-height: 1.5;
// }

// .summary-grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 16px;
//     margin-bottom: 24px;
// }

// .summary-card {
//     background: white;
//     padding: 23px;
//     border-radius: 12px;
//     box-shadow: 0 3px 12px rgba(0,0,0,0.04);
//     border: 1px solid #e9edf3;
// }

// .summary-card p {
//     color: #778194;
//     font-size: 14px;
//     margin-bottom: 12px;
// }

// .summary-card h2 {
//     font-size: 25px;
//     color: #202938;
//     overflow-wrap: anywhere;
// }

// .summary-card:nth-child(2) h2 {
//     color: #15966f;
// }

// .savings-summary h2 {
//     color: #805ad5;
// }

// .panel {
//     background: white;
//     padding: 24px;
//     border-radius: 12px;
//     margin-bottom: 22px;
//     border: 1px solid #e9edf3;
//     box-shadow: 0 3px 12px rgba(0,0,0,0.03);
// }

// .panel h2 {
//     font-size: 19px;
//     margin-bottom: 17px;
// }

// .action-grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 18px;
// }

// .action-grid .panel {
//     margin-bottom: 22px;
// }

// .income-card {
//     border-top: 4px solid #16a085;
// }

// .savings-card {
//     border-top: 4px solid #805ad5;
// }

// .withdraw-card {
//     border-top: 4px solid #e09b35;
// }

// .form-row {
//     display: flex;
//     gap: 12px;
// }

// input, select {
//     width: 100%;
//     padding: 13px;
//     border: 1px solid #dce1e9;
//     border-radius: 7px;
//     font-size: 14px;
//     background: white;
//     color: #202938;
//     margin-top: 7px;
//     margin-bottom: 15px;
//     outline: none;
// }

// input:focus, select:focus {
//     border-color: #16a085;
// }

// label {
//     font-size: 13px;
//     font-weight: 600;
//     color: #465164;
// }

// button {
//     background: #137e68;
//     color: white;
//     border: none;
//     padding: 13px 18px;
//     border-radius: 7px;
//     font-size: 14px;
//     font-weight: 600;
//     cursor: pointer;
//     transition: 0.2s;
// }

// button:hover {
//     background: #0e6655;
// }

// .form-row input {
//     margin: 0;
// }

// .form-row button {
//     white-space: nowrap;
// }

// .action-grid button {
//     width: 100%;
// }

// .savings-card button {
//     background: #805ad5;
// }

// .savings-card button:hover {
//     background: #6844b6;
// }

// .withdraw-card button {
//     background: #c17c20;
// }

// .withdraw-card button:hover {
//     background: #a36516;
// }

// .expense-form {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 8px 16px;
//     align-items: end;
// }

// .expense-form button {
//     grid-column: 1 / -1;
// }

// .section-heading {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

// .expense-item,
// .record-item {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 12px;
//     padding: 16px 0;
//     border-bottom: 1px solid #edf0f4;
// }

// .expense-item:last-child,
// .record-item:last-child {
//     border-bottom: none;
// }

// .item-info h3 {
//     font-size: 15px;
//     margin-bottom: 5px;
// }

// .item-info p {
//     font-size: 12px;
//     color: #8892a2;
// }

// .item-right {
//     display: flex;
//     align-items: center;
//     gap: 15px;
// }

// .item-right strong {
//     white-space: nowrap;
// }

// .delete-btn {
//     background: #fff0f0;
//     color: #d33;
//     padding: 8px 10px;
// }

// .delete-btn:hover {
//     background: #ffe0e0;
// }

// .empty-message {
//     color: #9099a8;
//     font-size: 14px;
//     padding: 12px 0;
// }

// footer {
//     text-align: center;
//     color: #9099a8;
//     font-size: 13px;
//     padding: 15px;
// }

// @media (max-width: 850px) {
//     .summary-grid {
//         grid-template-columns: repeat(2, 1fr);
//     }

//     .action-grid {
//         grid-template-columns: repeat(2, 1fr);
//     }

//     .action-grid .withdraw-card {
//         grid-column: 1 / -1;
//     }
// }

// @media (max-width: 550px) {
//     body {
//         padding: 22px 12px;
//     }

//     .header h1 {
//         font-size: 24px;
//     }

//     .summary-grid,
//     .action-grid,
//     .expense-form {
//         grid-template-columns: 1fr;
//     }

//     .action-grid .withdraw-card {
//         grid-column: auto;
//     }

//     .summary-card {
//         padding: 18px;
//     }

//     .summary-card h2 {
//         font-size: 23px;
//     }

//     .panel {
//         padding: 18px;
//     }

//     .form-row {
//         flex-direction: column;
//     }

//     .form-row button {
//         width: 100%;
//     }

//     .item-right {
//         gap: 7px;
//     }

//     .expense-item,
//     .record-item {
//         align-items: flex-start;
//     }
// }



let budget = Number(localStorage.getItem("studentBudget")) || 0;

function loadArray(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

let expenses = loadArray("studentExpenses");
let incomeRecords = loadArray("studentIncome");
let savingsRecords = loadArray("studentSavings");
let withdrawals = loadArray("studentWithdrawals");

const money = amount =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);

function saveData() {
    localStorage.setItem("studentBudget", budget);
    localStorage.setItem("studentExpenses", JSON.stringify(expenses));
    localStorage.setItem("studentIncome", JSON.stringify(incomeRecords));
    localStorage.setItem("studentSavings", JSON.stringify(savingsRecords));
    localStorage.setItem("studentWithdrawals", JSON.stringify(withdrawals));
}

function totalReceived() {
    return incomeRecords.reduce((sum, item) => sum + item.amount, 0);
}

function totalSpent() {
    return expenses.reduce((sum, item) => sum + item.amount, 0);
}

function totalSavings() {
    const deposits = savingsRecords.reduce(
        (sum, item) => sum + item.amount, 0
    );

    const withdrawn = withdrawals.reduce(
        (sum, item) => sum + item.amount, 0
    );

    return deposits - withdrawn;
}

function availableBalance() {
    return totalReceived() - totalSpent() - totalSavings();
}

function currentMonthSpent() {
    const month = new Date().toISOString().slice(0, 7);

    return expenses
        .filter(item => item.date.startsWith(month))
        .reduce((sum, item) => sum + item.amount, 0);
}

function updateDashboard() {
    document.getElementById("budgetAmount").textContent = money(budget);
    document.getElementById("availableBalance").textContent =
        money(availableBalance());
    document.getElementById("totalSpent").textContent =
        money(currentMonthSpent());
    document.getElementById("totalReceived").textContent =
        money(totalReceived());
    document.getElementById("savingsBalance").textContent =
        money(totalSavings());

    document.getElementById("transactionCount").textContent =
        expenses.length;
}

function setToday() {
    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localDate = new Date(today.getTime() - offset * 60000)
        .toISOString().slice(0, 10);

    document.getElementById("incomeDate").value = localDate;
    document.getElementById("expenseDate").value = localDate;
}

function createRecord(container, title, detail, amount, color) {
    const item = document.createElement("div");
    item.className = "record-item";

    const info = document.createElement("div");
    info.className = "item-info";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const description = document.createElement("p");
    description.textContent = detail;

    const value = document.createElement("strong");
    value.style.color = color;
    value.textContent = money(amount);

    info.append(heading, description);
    item.append(info, value);
    container.appendChild(item);
}

function displayExpenses() {
    const list = document.getElementById("expenseList");
    list.replaceChildren();

    if (expenses.length === 0) {
        list.innerHTML = '<p class="empty-message">No expenses added yet.</p>';
        return;
    }

    [...expenses]
        .sort((a, b) => b.date.localeCompare(a.date))
        .forEach(expense => {
            const item = document.createElement("div");
            item.className = "expense-item";

            const info = document.createElement("div");
            info.className = "item-info";

            const name = document.createElement("h3");
            name.textContent = expense.name;

            const detail = document.createElement("p");
            detail.textContent = `${expense.category} • ${expense.date}`;

            info.append(name, detail);

            const right = document.createElement("div");
            right.className = "item-right";

            const amount = document.createElement("strong");
            amount.textContent = money(expense.amount);

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", () => {
                if (!confirm("Delete this expense?")) return;

                expenses = expenses.filter(e => e.id !== expense.id);
                saveData();
                render();
            });

            right.append(amount, deleteButton);
            item.append(info, right);
            list.appendChild(item);
        });
}

function displayIncome() {
    const list = document.getElementById("incomeList");
    list.replaceChildren();

    if (!incomeRecords.length) {
        list.innerHTML = '<p class="empty-message">No income recorded yet.</p>';
        return;
    }

    [...incomeRecords].sort((a, b) => b.date.localeCompare(a.date))
        .forEach(item => {
            createRecord(
                list, item.source, item.date, item.amount, "#15966f"
            );
        });
}

function displaySavings() {
    const list = document.getElementById("savingsList");
    list.replaceChildren();

    if (!savingsRecords.length && !withdrawals.length) {
        list.innerHTML = '<p class="empty-message">No savings recorded yet.</p>';
        return;
    }

    const records = [
        ...savingsRecords.map(item => ({...item, type: "deposit"})),
        ...withdrawals.map(item => ({...item, type: "withdrawal"}))
    ].sort((a, b) => b.date.localeCompare(a.date));

    records.forEach(item => {
        if (item.type === "deposit") {
            createRecord(
                list,
                `Saved: ${item.note}`,
                item.date,
                item.amount,
                "#805ad5"
            );
        } else {
            createRecord(
                list,
                "Savings withdrawn",
                item.date,
                -item.amount,
                "#c17c20"
            );
        }
    });
}

function render() {
    updateDashboard();
    displayExpenses();
    displayIncome();
    displaySavings();
}

// Set monthly budget
document.getElementById("budgetForm").addEventListener("submit", event => {
    event.preventDefault();

    const amount = Number(document.getElementById("budgetInput").value);

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid budget.");
        return;
    }

    budget = amount;
    saveData();
    render();
    event.target.reset();
});

// Add money
document.getElementById("addMoneyForm").addEventListener("submit", event => {
    event.preventDefault();

    const amount = Number(document.getElementById("incomeAmount").value);
    const source = document.getElementById("incomeSource").value;
    const date = document.getElementById("incomeDate").value;

    if (!Number.isFinite(amount) || amount <= 0 || !source || !date) {
        alert("Please enter valid income details.");
        return;
    }

    incomeRecords.push({
        id: Date.now(),
        amount,
        source,
        date
    });

    saveData();
    render();
    event.target.reset();
    setToday();
});

// Add savings
document.getElementById("savingsForm").addEventListener("submit", event => {
    event.preventDefault();

    const amount = Number(document.getElementById("savingsAmount").value);
    const note = document.getElementById("savingsNote").value.trim();

    if (!Number.isFinite(amount) || amount <= 0 || !note) {
        alert("Please enter valid savings details.");
        return;
    }

    if (amount > availableBalance()) {
        alert("You do not have enough available balance to save this amount.");
        return;
    }

    savingsRecords.push({
        id: Date.now(),
        amount,
        note,
        date: new Date().toISOString().slice(0, 10)
    });

    saveData();
    render();
    event.target.reset();
});

// Withdraw savings
document.getElementById("withdrawForm").addEventListener("submit", event => {
    event.preventDefault();

    const amount = Number(document.getElementById("withdrawAmount").value);

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid withdrawal amount.");
        return;
    }

    if (amount > totalSavings()) {
        alert("You do not have enough savings to withdraw.");
        return;
    }

    withdrawals.push({
        id: Date.now(),
        amount,
        date: new Date().toISOString().slice(0, 10)
    });

    saveData();
    render();
    event.target.reset();
});

// Add expense
document.getElementById("expenseForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("expenseName").value.trim();
    const amount = Number(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;
    const date = document.getElementById("expenseDate").value;

    if (!name || !Number.isFinite(amount) || amount <= 0 ||
        !category || !date) {
        alert("Please enter valid expense details.");
        return;
    }

    if (amount > availableBalance()) {
        alert("Insufficient available balance.");
        return;
    }

    expenses.push({
        id: Date.now(),
        name,
        amount,
        category,
        date
    });

    saveData();
    render();
    event.target.reset();
    setToday();
});

// Start application
setToday();
render();
