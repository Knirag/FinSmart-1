import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Finsmart2024 from "./components/openingpage/finsmartpage";
import Authentication from "./components/login&signup/userauth";
import Sidebar from "./components/Sidebar";
import Budgets from "./components/Budgets/budgetpage";
import Accounts from "./components/Accounts/Accounts";
import Dashboard from "./components/Homepage/dashboard";
import IncomeStatement from "./components/Statements/incomestatement";
import Settings from "./components/Settings/settingsPage";
import Transactions from "./components/Transactions/transactionPage";
import FinancialEducation from "./components/Learning/FinancialEducation";
import AccountManagement from "./components/Learning/AccountManagement";
import BudgetManagement from "./components/Learning/BudgetManagement";
import FinSmartTutorial from "./components/Learning/FinSmartTutorial";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Finsmart2024 />} />
          <Route index element={<Finsmart2024 />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statement" element={<IncomeStatement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/finsmartTransactions" element={<Transactions />} />
          <Route path="/finEducation" element={<FinancialEducation />} />
          <Route path="/finEducation/accountmanagement" element={<AccountManagement />} />
          <Route path="/finEducation/budgetmanagement" element={<BudgetManagement />} />
          <Route path="/finEducation/tutorial" element={<FinSmartTutorial />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);
