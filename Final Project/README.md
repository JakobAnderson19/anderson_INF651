# BudgetTracker

## Description

BudgetTracker is a personal finance management web application that allows users to track income, expenses, budgets, and savings goals. The application provides an easy-to-use interface for managing financial information and viewing overall financial progress.

Users can create budgets, add transactions, set savings goals, and monitor their financial activity through different sections of the application.

## Features

- Create and manage a starting account balance
- Add income and expense transactions
- Categorize transactions using built-in or custom categories
- Edit and delete transactions
- Search and filter transactions by:
  - Description
  - Category
  - Date range
- View monthly financial summaries:
  - Total income
  - Total expenses
  - Net change
- Create and manage budget categories
- Track spending progress using budget progress bars
- Create multiple savings goals
- Add money toward savings goals
- Automatically update savings progress from savings transactions
- Savings goal calculator:
  - Calculate how long until a goal is reached
  - Calculate required savings per paycheck
- Light and dark mode toggle
- Data persistence using browser local storage

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Local Storage

## How to Run

1. Download or clone the repository.
2. Open the `Final Project` folder.
3. Open `index.html` in a web browser.
4. Use the navigation menu to access:
   - Financial Overview
   - Transactions & Income
   - Budget Management
   - Savings Goals

No additional software or server setup is required.

## Folder Structure
```text
Final Project/
│
├── index.html
├── transactions.html
├── budget.html
├── savings.html
│
├── scripts.js
├── styles.css
│
└── README.md
```

## Author

Jakob

## Known Limitations

- Data is stored locally in the browser and is not synchronized between devices.
- The application does not currently support user accounts or cloud storage.
- Financial data cannot be exported or imported.
- The application is designed for personal budgeting and does not connect to banking services.

## Future Improvements

- Add user accounts and authentication
- Implement cloud database storage
- Add financial charts and visual reports
- Allow users to export financial data
- Add recurring transactions
- Add mobile-friendly improvements
- Add additional customization options for themes and categories
