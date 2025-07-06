# Personal Finance Visualizer

A personal finance dashboard built with React that allows users to manage their expenses, visualize spending patterns, and compare actual expenses against monthly budgets using beautiful charts and insights.


## Features

- Add, edit, and delete transactions
- View pie and bar charts of expenses by category and by month
- Set monthly budgets and compare them against actual spending
- Get smart insights on over/under-budget categories
- Intuitive and clean UI with responsive layout

---

##  Technologies Used

- **Frontend**: React, Recharts
- **Backend**: Node.js + Express (hosted on Render)
- **Styling**: CSS (App.css, responsive layout)

---

## Project Structure

├── src/
│   ├── App.js               # Main component
│   ├── App.css              # Global styles (dark theme)
│   ├── index.js             # Entry point
│   ├── index.css            # Base resets
│   └── Componenet/
│       ├── TransactionForm.js
│       ├── TransactionList.js
│       ├── DashboardCards.jsx
│       ├── BudgetForm.jsx
│       ├── BudgetComparisonChart.jsx
│       ├── ExpensesChart.js
│       ├── CategoryPieChart.jsx
│       └── SpendingInsights.jsx


2. Install Dependencies

npm install

3. Start the Development Server

npm start
App runs at: http://localhost:3000

4. Live Website:
https://personal-finance-visualizer-sd75.onrender.com/

5. API Endpoints:
GET /transactions

POST /transactions

PUT /transactions/:id

DELETE /transactions/:id

GET /budgets

POST /budgets

GET /categories

Visualizations
Category Pie Chart
Shows distribution of expenses across categories.

Monthly Bar Chart
Visualizes expenses grouped by month.

Budget Comparison
Bar chart comparing actual expenses vs. budget per category for the selected month.


Author
Nishitha Adapa
GitHub: (https://github.com/NishithaAdapa7)
LinkedIn: https://www.linkedin.com/in/adapa-nishitha-629855257/

License
This project is licensed under the MIT License.