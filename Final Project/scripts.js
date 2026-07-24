// ==============================
// GLOBAL DATA
// ==============================


let accountBalance = 0;


let transactions = [];

let filteredTransactions = [];

let budgets = JSON.parse(localStorage.getItem("budgets")) || [];

let savingsGoals =
JSON.parse(localStorage.getItem("savingsGoals")) || [];

let customBudgetCategories =
JSON.parse(localStorage.getItem("customBudgetCategories")) || [];


let transactionTypes = [
    "Income",
    "Food",
    "Housing",
    "Transportation",
    "Entertainment",
    "Shopping",
    "Bills",
    "Healthcare",
    "Education",
    "Subscriptions",
    "Savings",
    "Other"
];

let editingTransactionId = null;


const initializeButton = document.getElementById("initialize-btn");

const balanceInput = document.getElementById("starting-balance");

const balanceDisplay = document.getElementById("current-balance");

const messageDisplay = document.getElementById("balance-message");

const balanceSetup = document.getElementById("balance-setup");

const transactionDirection =
    document.getElementById("transaction-direction");

const homeBalanceDisplay =
    document.getElementById("home-current-balance");


const homeIncomeDisplay =
    document.getElementById("home-total-income");


const homeExpenseDisplay =
    document.getElementById("home-total-expenses");

const budgetCategory =
    document.getElementById("budget-category");


const budgetLimit =
    document.getElementById("budget-limit");


const createBudgetButton =
    document.getElementById("create-budget-btn");


const budgetList =
    document.getElementById("budget-list");


const budgetMessage =
    document.getElementById("budget-message");

const addTransactionButton =
    document.getElementById("add-transaction-btn");

const transactionCard =
    document.getElementById("transaction-card");

const transactionDescription =
    document.getElementById("transaction-description");

const transactionAmount =
    document.getElementById("transaction-amount");

const transactionType =
    document.getElementById("transaction-type");

const transactionList =
    document.getElementById("transaction-list");

const transactionSearch =
    document.getElementById("transaction-search");

const transactionFilter =
    document.getElementById("transaction-filter");

const transactionMessage =
    document.getElementById("transaction-message");

const addTypeButton =
    document.getElementById("add-type-btn");

const newTransactionType =
    document.getElementById("new-transaction-type");

const typeMessage =
    document.getElementById("type-message");

const addTransactionButtonText =
    document.getElementById("add-transaction-btn");

const totalIncomeDisplay =
    document.getElementById("total-income");

const totalExpensesDisplay =
    document.getElementById("total-expenses");

const netChangeDisplay =
    document.getElementById("net-change");

const startDate =
    document.getElementById("start-date");

const endDate =
    document.getElementById("end-date");

    const budgetEditBox =
    document.getElementById("edit-budget-box");


const editBudgetLimit =
    document.getElementById("edit-budget-limit");


const saveBudgetEdit =
    document.getElementById("save-budget-edit");


const cancelBudgetEdit =
    document.getElementById("cancel-budget-edit");


let currentEditingBudget = null;

const customBudgetCategory =
    document.getElementById("custom-budget-category");

const removeCategoryButton =
    document.getElementById("remove-category-btn");

const savingsName =
    document.getElementById("savings-name");


const savingsTarget =
    document.getElementById("savings-target");


const createSavingsButton =
    document.getElementById("create-savings-btn");


const savingsMessage =
    document.getElementById("savings-message");

const savingsList =
    document.getElementById("savings-list");

const editSavingsBox =
    document.getElementById("edit-savings-box");

const editSavingsName =
    document.getElementById("edit-savings-name");

const editSavingsTarget =
    document.getElementById("edit-savings-target");

const saveSavingsEdit =
    document.getElementById("save-savings-edit");

const cancelSavingsEdit =
    document.getElementById("cancel-savings-edit");

let currentEditingSavings = null;

const calculatorSavingsGoal =
    document.getElementById("calculator-savings-goal");


const calculatorAmount =
    document.getElementById("calculator-amount");


const calculatorFrequency =
    document.getElementById("calculator-frequency");


const calculateSavingsButton =
    document.getElementById("calculate-savings-btn");


const calculatorResult =
    document.getElementById("calculator-result");

    const timeToGoalMode =
    document.getElementById("time-to-goal-mode");


const requiredSavingsMode =
    document.getElementById("required-savings-mode");


const paycheckInputSection =
    document.getElementById("paycheck-input-section");


const timeframeInputSection =
    document.getElementById("timeframe-input-section");


const calculatorTimeframe =
    document.getElementById("calculator-timeframe");


const calculatorTimeUnit =
    document.getElementById("calculator-time-unit");

const homeSavingsProgress =
    document.getElementById("home-savings-progress");

// Only run Home page code if elements exist

if (initializeButton) {

    initializeButton.addEventListener(
        "click",
        initializeBudget
    );

}

if(removeCategoryButton){


    removeCategoryButton.addEventListener(
        "click",
        removeBudgetCategory
    );


}

// Only run transaction code if page exists

if (addTransactionButton) {

    addTransactionButton.addEventListener(
        "click",
        addTransaction
    );

}



if (addTypeButton) {

    addTypeButton.addEventListener(
        "click",
        addNewTransactionType
    );

}


if (transactionSearch) {

    transactionSearch.addEventListener(
        "input",
        filterTransactions
    );

}



if (transactionFilter) {

    transactionFilter.addEventListener(
        "change",
        filterTransactions
    );

}

if (startDate) {

    startDate.addEventListener(
        "change",
        filterTransactions
    );

}


if (endDate) {

    endDate.addEventListener(
        "change",
        filterTransactions
    );

}

if (createBudgetButton) {


    createBudgetButton.addEventListener(
        "click",
        createBudget
    );


}

if(createSavingsButton){

    createSavingsButton.addEventListener(
        "click",
        createSavingsGoal
    );

}

if(saveSavingsEdit){

    saveSavingsEdit.addEventListener(
    "click",
    function(){

        if(!currentEditingSavings){

            return;

        }


        const name =
            editSavingsName.value.trim();


        const target =
            Number(editSavingsTarget.value);



        if(name === "" || target <= 0){

            return;

        }



        currentEditingSavings.name = name;

        currentEditingSavings.target = target;



        saveSavings();

        displaySavings();



        editSavingsBox.style.display =
            "none";


    });

}



if(cancelSavingsEdit){

    cancelSavingsEdit.addEventListener(
    "click",
    function(){


        editSavingsBox.style.display =
            "none";


    });

}

if(calculateSavingsButton){

    calculateSavingsButton.addEventListener(
        "click",
        calculateSavingsGoalAmount
    );

}

if(timeToGoalMode){

    timeToGoalMode.addEventListener(
        "change",
        updateCalculatorMode
    );

}


if(requiredSavingsMode){

    requiredSavingsMode.addEventListener(
        "change",
        updateCalculatorMode
    );

}



function updateCalculatorMode(){


    if(timeToGoalMode.checked){


        paycheckInputSection.style.display =
            "block";


        timeframeInputSection.style.display =
            "none";


    }


    else {


        paycheckInputSection.style.display =
            "none";


        timeframeInputSection.style.display =
            "block";


    }


}

// ==============================
// HOME FUNCTIONS
// ==============================


function initializeBudget() {


    const enteredBalance =
        Number(balanceInput.value);



    if (enteredBalance <= 0 || isNaN(enteredBalance)) {


        messageDisplay.textContent =
            "Please enter a valid starting balance.";


        messageDisplay.style.color = "red";


        return;

    }



    accountBalance = enteredBalance;

    // Remove any previous initial balance transactions
    transactions =
        transactions.filter(function(transaction) {

            return !transaction.isInitialBalance;

        });



    // Create starting balance transaction
    const startingTransaction = {

        id: Date.now(),

        description: "Initial Account Balance",

        type: "Starting Balance",

        amount: enteredBalance,

        direction: "deposit",

        date: new Date().toISOString().split("T")[0],

        balanceAfter: enteredBalance,

        isInitialBalance: true

    };



    transactions.push(startingTransaction);



    saveData();



    displayBalance();
    
    displayTransactions();

    displayBudgets();
    
    loadBudgetCategories();

    updateHomeOverview();



    messageDisplay.textContent =
        "Budget successfully initialized!";


    messageDisplay.style.color = "green";



    balanceSetup.style.display = "none";



    balanceInput.value = "";

}




function displayBalance() {


    if (balanceDisplay) {


        balanceDisplay.textContent =
            `$${accountBalance.toFixed(2)}`;

    }

}

function updateHomeOverview() {


    if (!homeIncomeDisplay) {

        return;

    }



    let totalIncome = 0;

    let totalExpenses = 0;



    transactions.forEach(function(transaction) {


        if (transaction.amount > 0 && !transaction.isInitialBalance) {


            totalIncome += transaction.amount;


        }
        else if (
            transaction.amount < 0 &&
            transaction.type !== "Savings"
        ) {

            totalExpenses += Math.abs(transaction.amount);

        }


    });



    if (homeBalanceDisplay) {

        homeBalanceDisplay.textContent =
            `$${accountBalance.toFixed(2)}`;

    }



    homeIncomeDisplay.textContent =
        `$${totalIncome.toFixed(2)}`;



    homeExpenseDisplay.textContent =
        `$${totalExpenses.toFixed(2)}`;


}

function updateSavingsOverview() {

    if (!homeSavingsProgress) {

        return;

    }


    let totalSaved = 0;

    let totalTarget = 0;


    savingsGoals.forEach(function(goal) {

        totalSaved += goal.saved;

        totalTarget += goal.target;

    });


    if(totalTarget === 0){

        homeSavingsProgress.textContent =
            "No savings goals created.";

        return;

    }


    const percentage =
        (totalSaved / totalTarget) * 100;


    homeSavingsProgress.textContent =
        `${percentage.toFixed(1)}% Complete ($${totalSaved.toFixed(2)} / $${totalTarget.toFixed(2)})`;

}

// ==============================
// TRANSACTION FUNCTIONS
// ==============================



function addTransaction() {


    const description =
        transactionDescription.value.trim();


    const amount =
        Number(transactionAmount.value);


    const type =
        transactionType.value;


    const direction =
        transactionDirection.value;



    if (
        description === "" ||
        amount <= 0 ||
        isNaN(amount)
    ) {

        transactionMessage.textContent =
            "Please enter valid transaction information.";

        transactionMessage.style.color = "red";

        return;

    }



    let transactionAmountValue = amount;



    // Money leaving the account
    if (
        direction === "withdrawal" ||
        type === "Savings"
    ) {

        transactionAmountValue = -amount;

    }



    // EDIT EXISTING TRANSACTION
    if (editingTransactionId !== null) {


        const transaction =
            transactions.find(function(transaction){

                return transaction.id === editingTransactionId;

            });



        if(transaction){


            transaction.description =
                description;


            transaction.type =
                type;


            transaction.amount =
                transactionAmountValue;


            transaction.direction =
                direction;


        }



        editingTransactionId = null;


        addTransactionButton.textContent =
            "Add Transaction";


        if(transactionCard){

            transactionCard.classList.remove("editing");

        }


    }



    // ADD NEW TRANSACTION
    else {


        const newTransaction = {


            id: Date.now(),


            description: description,


            type: type,


            amount: transactionAmountValue,


            direction: direction,


            date: new Date().toISOString().split("T")[0],


            balanceAfter: 0


        };



        transactions.push(newTransaction);



        updateSavingsFromTransaction(newTransaction);


    }



    recalculateBalances();


    saveData();


    displayTransactions();


    displayBudgets();


    displaySavings();


    loadBudgetCategories();



    transactionDescription.value = "";

    transactionAmount.value = "";



    transactionMessage.textContent =
        "Transaction saved successfully!";


    transactionMessage.style.color = "green";


}

function updateSummary() {


    let totalIncome = 0;

    let totalExpenses = 0;



    transactions.forEach(function(transaction) {


        if (transaction.amount > 0) {


            totalIncome += transaction.amount;


        }
        else if(transaction.type !== "Savings") {

            totalExpenses += Math.abs(transaction.amount);

        }


    });



    const netChange =
        totalIncome - totalExpenses;



    if (totalIncomeDisplay) {


        totalIncomeDisplay.textContent =
            `$${totalIncome.toFixed(2)}`;


    }



    if (totalExpensesDisplay) {


        totalExpensesDisplay.textContent =
            `$${totalExpenses.toFixed(2)}`;


    }



    if (netChangeDisplay) {


        netChangeDisplay.textContent =
            `$${netChange.toFixed(2)}`;


    }


}


// ==============================
// DISPLAY TRANSACTIONS
// ==============================


function displayTransactions() {


    if (!transactionList) {

        return;

    }



    transactionList.innerHTML = "";



    filteredTransactions.forEach(function(transaction) {


        const row =
            document.createElement("tr");



        let rowClass = "";


        if (transaction.isInitialBalance) {

            rowClass = "initial-balance-row";

        }

        else if (
            transaction.type === "Savings" &&
            transaction.direction === "deposit"
        ) {

            rowClass = "withdrawal-row";

        }

        else if (transaction.direction === "deposit") {

            rowClass = "deposit-row";

        }

        else if (transaction.direction === "withdrawal") {

            rowClass = "withdrawal-row";

        }


        if (transaction.balanceAfter < 0) {

            rowClass = "negative-balance-row";

        }


    row.className = rowClass;



    row.innerHTML = `

    <td>${transaction.date}</td>

    <td title="${transaction.description}" class="transaction-description">
        ${transaction.description}
    </td>

    <td>${transaction.type}</td>

    <td class="${
        transaction.isInitialBalance
            ? "initial-balance-amount"
            : transaction.direction === "deposit"
                ? "deposit-amount"
                : "withdrawal-amount"
    }">

    ${
        transaction.isInitialBalance
            ? "$" + Math.abs(transaction.amount).toFixed(2)
            :
            transaction.direction === "deposit"
                ? "+$" + Math.abs(transaction.amount).toFixed(2)
                : "-$" + Math.abs(transaction.amount).toFixed(2)
    }

    </td>

    <td>$${transaction.balanceAfter.toFixed(2)}</td>

    <td>
    ${
        transaction.isInitialBalance
        ? ""
        : `
        <button class="edit-btn" onclick="editTransaction(${transaction.id})">
            Edit
        </button>

        <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">
            Delete
        </button>
        `
    }
    </td>

`;



        transactionList.appendChild(row);


    });


    updateSummary();
}


function deleteTransaction(id){


    transactions =
        transactions.filter(function(transaction){

            return transaction.id !== id;

        });



    recalculateBalances();


    saveData();


    filteredTransactions = transactions;


    displayTransactions();

    displayBudgets();

    displaySavings();

    updateHomeOverview();

}

function editTransaction(id) {


    const transaction =
        transactions.find(function(transaction) {

            return transaction.id === id;

        });



    if (!transaction) {

        return;

    }



    transactionDescription.value =
        transaction.description;



    transactionAmount.value =
        Math.abs(transaction.amount);



    transactionType.value =
        transaction.type;



    editingTransactionId =
        transaction.id;



    addTransactionButton.textContent =
        "Save Changes";

    if(transactionCard){

        transactionCard.classList.add("editing");

    }

}

function recalculateBalances() {


    let currentBalance = 0;



    transactions.forEach(function(transaction) {


        currentBalance += transaction.amount;



        transaction.balanceAfter =
            currentBalance;


    });



    accountBalance = currentBalance;



    localStorage.setItem(
        "accountBalance",
        accountBalance
    );


}

function filterTransactions() {


    const searchText =
        transactionSearch.value.toLowerCase();


    const selectedType =
        transactionFilter.value;


    const selectedStartDate =
        startDate.value;


    const selectedEndDate =
        endDate.value;


    filteredTransactions =
        transactions.filter(function(transaction) {


            const amountString =
                Math.abs(transaction.amount)
                .toFixed(2);



            const matchesSearch =

                transaction.description
                .toLowerCase()
                .includes(searchText)

                ||

                transaction.type
                .toLowerCase()
                .includes(searchText)

                ||

                amountString === searchText;



            const matchesType =
                selectedType === "All" ||
                transaction.type === selectedType;



            const transactionDate = new Date(transaction.date);

            transactionDate.setHours(0, 0, 0, 0);



            const start =
                selectedStartDate
                    ? new Date(selectedStartDate + "T00:00:00")
                    : null;



            const end =
                selectedEndDate
                    ? new Date(selectedEndDate + "T23:59:59")
                    : null;



            const matchesDate =

                (!start || transactionDate >= start)

                &&

                (!end || transactionDate <= end);



            return matchesSearch 
                && matchesType
                && matchesDate;


        });



    displayTransactions();

    displayBudgets();

    loadBudgetCategories();


}


// ==============================
// CUSTOM TRANSACTION TYPES
// ==============================


function addNewTransactionType() {


    const newType =
        newTransactionType.value.trim();



    if (newType === "") {


        typeMessage.textContent =
            "Enter a transaction type.";


        typeMessage.style.color = "red";


        return;

    }



    transactionTypes.push(newType);



    saveData();



    updateTransactionDropdown();



    newTransactionType.value = "";



    typeMessage.textContent =
        "Transaction type added!";


    typeMessage.style.color = "green";

}




function updateTransactionDropdown() {


    if (!transactionType) {

        return;

    }



    transactionType.innerHTML = "";



    transactionTypes.forEach(function(type) {


        const option =
            document.createElement("option");


        option.value = type;

        option.textContent = type;


        transactionType.appendChild(option);


    });

    updateFilterDropdown();
}

function updateFilterDropdown() {


    if (!transactionFilter) {

        return;

    }



    transactionFilter.innerHTML = `

        <option value="All">
            All Transactions
        </option>

    `;



    transactionTypes.forEach(function(type) {


        const option =
            document.createElement("option");


        option.value = type;

        option.textContent = type;


        transactionFilter.appendChild(option);


    });

}



// ==============================
// LOCAL STORAGE
// ==============================


function saveData() {


    localStorage.setItem(
        "accountBalance",
        accountBalance
    );


    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );


    localStorage.setItem(
        "transactionTypes",
        JSON.stringify(transactionTypes)
    );

    localStorage.setItem(
    "customBudgetCategories",
    JSON.stringify(customBudgetCategories)
);


}




function loadData() {

    const savedBalance =
        localStorage.getItem("accountBalance");


    const savedTransactions =
        localStorage.getItem("transactions");


    const savedTypes =
        localStorage.getItem("transactionTypes");



    if (savedBalance != null) {

    accountBalance =
        Number(savedBalance);


    if (balanceSetup) {

        balanceSetup.style.display = "none";

    }

    }



    if (savedTransactions) {

        transactions =
            JSON.parse(savedTransactions);

    }



    if (savedTypes) {

        transactionTypes =
            JSON.parse(savedTypes);

    }

    if (!transactionTypes.includes("Savings")) {

        transactionTypes.push("Savings");

        saveData();

    }



    displayBalance();
    
    filteredTransactions = transactions;

    displayTransactions();

    displayBudgets();

    loadBudgetCategories();

    updateTransactionDropdown();

    updateHomeOverview();

    updateSavingsOverview();


}

// ==============================
// BUDGET FUNCTIONS
// ==============================

function createBudget() {


    let category;


    if(customBudgetCategory.value.trim() !== "") {


        category =
            customBudgetCategory.value.trim();


    }
    else {


        category =
            budgetCategory.value;


    }


    const limit =
        Number(budgetLimit.value);



    if (limit <= 0 || isNaN(limit)) {


        budgetMessage.textContent =
            "Please enter a valid budget amount.";


        budgetMessage.style.color = "red";


        return;

    }



    const existingBudget =
        budgets.find(function(budget) {

            return budget.category.toLowerCase()
                === category.toLowerCase();

        });


    if (existingBudget) {


        budgetMessage.textContent =
            "A budget for this category already exists.";


        budgetMessage.style.color = "red";


        return;

    }



    const newBudget = {


        id: Date.now(),


        category: category,


        limit: limit


    };



    budgets.push(newBudget);

    if(
        customBudgetCategory.value.trim() !== ""
    ) {


        if (!customBudgetCategories.includes(category)) {

        customBudgetCategories.push(category);

    }


        localStorage.setItem(
            "customBudgetCategories",
            JSON.stringify(customBudgetCategories)
        );


    }



    saveBudgets();

    displayBudgets();

    loadBudgetCategories();




    budgetMessage.textContent =
        "Budget created successfully!";


    budgetMessage.style.color = "green";



    budgetLimit.value = "";

}

function saveBudgets() {

    localStorage.setItem(
        "budgets",
        JSON.stringify(budgets)
    );

}


function displayBudgets() {


    if (!budgetList) {

        return;

    }


    budgetList.innerHTML = "";



    budgets.forEach(function(budget) {


        const card =
            document.createElement("div");


        card.className =
            "budget-card";



        card.innerHTML = `


            <h4>
                ${budget.category}
            </h4>


            <p>
                Monthly Limit:
                $${budget.limit.toFixed(2)}
            </p>


            <p>
                Spent:
                $${calculateBudgetSpent(budget.category).toFixed(2)}
            </p>


            <p>
                Remaining:
                $${(
                    budget.limit - calculateBudgetSpent(budget.category)
                ).toFixed(2)}
            </p>


            <div class="progress-container">

                <div 
                class="progress-bar ${getBudgetStatus(budget.category)}"
                style="width:${getBudgetPercentage(budget.category)}%"
                >
                </div>


                <div class="progress-markers">

                    <span class="zero-marker">
                        0%
                    </span>


                    <span class="half-marker">
                        50%
                    </span>


                    <span class="full-marker">
                        100%
                    </span>

                </div>

            </div>

            <button 
            class="edit-budget-btn"
            onclick="editBudget(${budget.id})">

                Edit Budget

            </button>

            <button 
            class="delete-budget-btn"
            onclick="deleteBudget(${budget.id})">

                Delete Budget

            </button>


        `;



        budgetList.appendChild(card);


    });


}

function calculateBudgetSpent(category) {


    let totalSpent = 0;



    transactions.forEach(function(transaction) {


        if (

            transaction.type === category

            &&

            transaction.direction === "withdrawal"

        ) {


            totalSpent += Math.abs(transaction.amount);


        }


    });



    return totalSpent;


}

function getBudgetPercentage(category) {


    const budget =
        budgets.find(function(item){

            return item.category === category;

        });



    const spent =
        calculateBudgetSpent(category);



    let percentage =
        (spent / budget.limit) * 100;



    if (percentage > 100) {

        percentage = 100;

    }



    return percentage;


}

function getBudgetStatus(category) {


    const percentage =
        getBudgetPercentage(category);



    if (percentage >= 90) {


        return "budget-danger";


    }


    else if (percentage >= 70) {


        return "budget-warning";


    }


    else {


        return "budget-safe";


    }


}

function deleteBudget(id) {


    budgets =
        budgets.filter(function(budget) {

            return budget.id !== id;

        });



    saveBudgets();

    displayBudgets();

    loadBudgetCategories();



}

function editBudget(id) {


    const budget =
        budgets.find(function(item){

            return item.id === id;

        });



    if (!budget) {

        return;

    }



    currentEditingBudget = budget;



    editBudgetLimit.value =
        budget.limit;



    budgetEditBox.style.display =
        "block";


}

if(saveBudgetEdit){

saveBudgetEdit.addEventListener(
"click",
function(){


    const newLimit =
        Number(editBudgetLimit.value);



    if(newLimit <= 0 || isNaN(newLimit)) {

        return;

    }



    currentEditingBudget.limit =
        newLimit;



    saveBudgets();

    displayBudgets();

    loadBudgetCategories();




    budgetEditBox.style.display =
        "none";


});
}

if(cancelBudgetEdit){

cancelBudgetEdit.addEventListener(
"click",
function(){

    budgetEditBox.style.display = "none";

});

}

function loadBudgetCategories(){


    if (!budgetCategory) {

        return;

    }



    const options =
        budgetCategory.querySelectorAll(".custom-category");


    options.forEach(function(option){

        option.remove();

    });



    customBudgetCategories.forEach(function(category){


        const option =
            document.createElement("option");


        option.value =
            category;


        option.textContent =
            category;


        option.className =
            "custom-category";


        budgetCategory.appendChild(option);


    });


}

function removeBudgetCategory(){


    const category =
        customBudgetCategory.value.trim();



    if(category === "") {

        return;

    }



    customBudgetCategories =
        customBudgetCategories.filter(function(item){


            return item.toLowerCase()
                !== category.toLowerCase();


        });



    localStorage.setItem(
        "customBudgetCategories",
        JSON.stringify(customBudgetCategories)
    );



    loadBudgetCategories();



    customBudgetCategory.value = "";

}

// ==============================
// SAVINGS FUNCTIONS
// ==============================

function createSavingsGoal(){


    const name =
        savingsName.value.trim();


    const target =
        Number(savingsTarget.value);



    if(
        name === "" ||
        target <= 0 ||
        isNaN(target)
    ){

        savingsMessage.textContent =
            "Please enter valid savings information.";


        savingsMessage.style.color =
            "red";


        return;

    }



    const newGoal = {


        id: Date.now(),


        name: name,


        target: target,


        saved: 0


    };



    savingsGoals.push(newGoal);



    saveSavings();

    updateSavingsOverview();



    savingsName.value = "";

    savingsTarget.value = "";

    displaySavings();

    loadSavingsCalculatorGoals();


    savingsMessage.textContent =
        "Savings goal created!";


    savingsMessage.style.color =
        "green";

}

function saveSavings(){


    localStorage.setItem(
        "savingsGoals",
        JSON.stringify(savingsGoals)
    );


}

function displaySavings(){


    if(!savingsList){

        return;

    }



    savingsList.innerHTML = "";



    savingsGoals.forEach(function(goal){



        const card =
            document.createElement("div");



        card.className =
            "savings-card";



        const percentage =
            (goal.saved / goal.target) * 100;



        card.innerHTML = `


            <h4>
                ${goal.name}
            </h4>



            <p>
                Target:
                $${goal.target.toFixed(2)}
            </p>



            <p>
                Saved:
                $${goal.saved.toFixed(2)}
            </p>



            <div class="savings-progress-container">


                <div 
                class="savings-progress-bar"
                style="width:${Math.min(percentage,100)}%"
                >

                </div>


            </div>



            <p>
                ${Math.floor(percentage)}% Complete
            </p>

            <button 
            class="add-savings-btn"
            onclick="showSavingsInput(${goal.id})">

                Add Money

            </button>

            <button
            class="edit-savings-btn"
            onclick="editSavingsGoal(${goal.id})">

                Edit Goal

            </button>

            <button
            class="delete-savings-btn"
            onclick="deleteSavingsGoal(${goal.id})">

                Delete Goal

            </button>

            <div 
            id="savings-input-${goal.id}" 
            class="savings-input-box"
            style="display:none;">


                <input 
                type="number"
                id="savings-amount-${goal.id}"
                placeholder="Enter amount">


                <button
                class="save-savings-btn"
                onclick="saveMoneyToSavings(${goal.id})">

                    Save

                </button>


                <button
                class="cancel-savings-btn"
                onclick="hideSavingsInput(${goal.id})">

                    Cancel

                </button>


            </div>


        `;



        savingsList.appendChild(card);



    });

    loadSavingsCalculatorGoals();

}

function addMoneyToSavings(id){


    const goal =
        savingsGoals.find(function(goal){

            return goal.id === id;

        });



    if(!goal){

        return;

    }



    const amount =
        Number(prompt("Enter amount to add:"));



    if(
        amount <= 0 ||
        isNaN(amount)
    ){

        return;

    }



    goal.saved += amount;

    transactions.push({

        id: Date.now(),

        description: goal.name,

        type: "Savings",

        amount: -amount,

        direction: "withdrawal",

        date: new Date().toISOString().split("T")[0],

        balanceAfter: accountBalance - amount

    });

    recalculateBalances();

    saveSavings();

    saveData();

    updateSavingsOverview();

    displaySavings();

    filteredTransactions = transactions;

    displayTransactions();

    updateHomeOverview();
}

function showSavingsInput(id){


    const box =
        document.getElementById(
            `savings-input-${id}`
        );


    if(box){

        box.style.display = "block";

    }

}

function hideSavingsInput(id){


    const box =
        document.getElementById(
            `savings-input-${id}`
        );


    if(box){

        box.style.display = "none";

    }


}

function saveMoneyToSavings(id) {


    const goal =
        savingsGoals.find(function(goal) {

            return goal.id === id;

        });



    if (!goal) {

        return;

    }



    const input =
        document.getElementById(
            `savings-amount-${id}`
        );



    const amount =
        Number(input.value);



    if (
        amount <= 0 ||
        isNaN(amount)
    ) {

        return;

    }



    // Update savings goal amount
    goal.saved += amount;



    // Create transaction history entry
    const newTransaction = {

        id: Date.now(),

        description: goal.name,

        type: "Savings",

        amount: -amount,

        direction: "withdrawal",

        date: new Date().toISOString().split("T")[0],

        balanceAfter: 0

    };



    transactions.push(newTransaction);



    // Update account balance
    recalculateBalances();



    // Save changes
    saveData();

    saveSavings();



    // Refresh displays
    filteredTransactions = transactions;

    displayTransactions();

    displaySavings();

    updateHomeOverview();

    updateSavingsOverview();



    // Clear input and hide box
    input.value = "";


    hideSavingsInput(id);

}

function updateSavingsFromTransaction(transaction){

    if(transaction.type !== "Savings"){

        return;

    }


    const goal =
        savingsGoals.find(function(goal){

            return goal.name.trim().toLowerCase()
                === transaction.description.trim().toLowerCase();

        });



    if(!goal){

        return;

    }



    if(transaction.direction === "deposit"){

        goal.saved += Math.abs(transaction.amount);

    }


    else if(transaction.direction === "withdrawal"){

        goal.saved -= Math.abs(transaction.amount);


        if(goal.saved < 0){

            goal.saved = 0;

        }

    }



    saveSavings();

    updateSavingsOverview();

    displaySavings();

}

function editSavingsGoal(id){

    const goal =
        savingsGoals.find(function(goal){

            return goal.id === id;

        });

    if(!goal){

        return;

    }

    currentEditingSavings = goal;

    editSavingsName.value =
        goal.name;

    editSavingsTarget.value =
        goal.target;

    editSavingsBox.style.display =
        "block";

}

function deleteSavingsGoal(id){


    if(!confirm(
        "Delete this savings goal?"
    )){

        return;

    }



    const goal =
        savingsGoals.find(function(goal){

            return goal.id === id;

        });



    if(!goal){

        return;

    }



    // Return saved money back to account
    if(goal.saved > 0){

        transactions.push({

            id: Date.now(),

            description: "Returned from " + goal.name,

            type: "Savings",

            amount: goal.saved,

            direction: "deposit",

            date: new Date().toISOString().split("T")[0],

            balanceAfter: 0

        });

    }



    // Remove savings goal
    savingsGoals =
        savingsGoals.filter(function(goal){

            return goal.id !== id;

        });



    recalculateBalances();


    saveSavings();

    updateSavingsOverview();

    saveData();


    displaySavings();

    displayTransactions();

}

function loadSavingsCalculatorGoals(){

    if(!calculatorSavingsGoal){

        return;

    }


    calculatorSavingsGoal.innerHTML = `

        <option value="">
            Select a goal
        </option>

    `;



    savingsGoals.forEach(function(goal){


        const option =
            document.createElement("option");


        option.value =
            goal.id;


        option.textContent =
            goal.name;


        calculatorSavingsGoal.appendChild(option);


    });


}

function calculateSavingsGoalAmount(){


    const goalId =
        Number(calculatorSavingsGoal.value);



    const goal =
        savingsGoals.find(function(goal){

            return goal.id === goalId;

        });



    if(!goal){

        calculatorResult.textContent =
            "Please select a savings goal.";

        return;

    }



    const remaining =
        goal.target - goal.saved;



    // Mode 1: How long until goal?

    if(timeToGoalMode.checked){


        const amountPerPaycheck =
            Number(calculatorAmount.value);


        const frequency =
            Number(calculatorFrequency.value);



        if(
            amountPerPaycheck <= 0 ||
            isNaN(amountPerPaycheck)
        ){

            calculatorResult.textContent =
                "Please enter valid information.";

            return;

        }



        const yearlySavings =
            amountPerPaycheck * frequency;



        const months =
            Math.ceil(
                (remaining / yearlySavings) * 12
            );



        calculatorResult.innerHTML = `

            You need 

            <strong>
            $${remaining.toFixed(2)}
            </strong>

            more to reach

            <strong>
            ${goal.name}
            </strong>

            <br><br>

            You will reach your goal in about:

            <br><br>

            <strong>
            ${months} months
            </strong>

        `;


    }



    // Mode 2: Required savings per paycheck

    else {


        let timeframe =
            Number(calculatorTimeframe.value);


        const unit =
            calculatorTimeUnit.value;



        const frequency =
            Number(calculatorFrequency.value);



        if(
            timeframe <= 0 ||
            isNaN(timeframe)
        ){

            calculatorResult.textContent =
                "Please enter valid information.";

            return;

        }



        if(unit === "years"){

            timeframe *= 12;

        }



        const totalPaychecks =
            timeframe / 12 * frequency;



        const requiredPerPaycheck =
            remaining / totalPaychecks;



        calculatorResult.innerHTML = `

            You need to save:

            <br><br>

            <strong>
            $${requiredPerPaycheck.toFixed(2)}
            </strong>

            per paycheck

            <br><br>

            to reach

            <strong>
            ${goal.name}
            </strong>

            in ${timeframe} months.

        `;


    }

}

// Load saved information

loadData();

if (budgetList) {

    displayBudgets();

}

displaySavings();


if (budgetCategory) {

    loadBudgetCategories();

}

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Light Mode";

    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Light Mode";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Dark Mode";

        }

    });

}