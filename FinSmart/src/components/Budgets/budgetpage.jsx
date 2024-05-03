import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import IncomeList from "./IncomeList";
import "../../App.css";
import MonthlyFilter from "../Homepage/MonthlyFilter";
import IncomeForm from "./IncomeForm";
import ExpensesFilter from "./ExpensesFilter";
const Budget = styled.div``;

const BudgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 90px;
  width: 900px;
  height: 100%;
  background: rgb(59, 10, 84);
  color: "#05f7d3";
  border-radius: 9px;
  box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
`;
const AddIcon = styled(Link)`
  display: flex;
  font-size: 50px;
  color: #03dbfc;
  border-radius: 30px;
  background-color: rgb(59, 10, 84);
  position: absolute;
  top: 190px;
  right: 40px;
`;
const MinusIcon = styled(Link)`
  display: flex;
  font-size: 50px;
  color: #03dbfc;
  border-radius: 30px;
  background-color: rgb(59, 10, 84);
  position: absolute;
  bottom: 20px;
  right: 40px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 999;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(49, 49, 49, 0.8);
  position: fixed;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: rgb(59, 10, 84);
  padding: 14px 28px;
  border-radius: 7px;
  min-height: 400px;
  min-width: 290px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5);
`;

const Budgets = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const toggleModal = (type) => {
    setModalType(type);
    setModal(!modal);

    if (!modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  const [expenses, setExpenses] = useState([
    {
      id: "",
      description: "",
      amount: "",
      category: "",
      account: "",
      month: "",
    },
  ]);
  const [income, setIncome] = useState([
    {
      id: "",
      description: "",
      amount: "",
      account: "",
      month: "",
    },
  ]);
  useEffect(() => {
    // Retrieve expenses data from local storage
    const storedExpenses = JSON.parse(localStorage.getItem("expenseData")) || [];
    setExpenses(storedExpenses);
  }, []);


  const [expenseData, setExpenseData] = useState([]);

  const handleAddExpense = (newData) => {
    setExpenseData([...expenseData, newData]);
     const updatedAccounts = expenses.map((item) => {
    if (item.account === newData.account) {
      // Deduct the expense amount from the balance
      return { ...item, balance: parseFloat(item.balance) - parseFloat(newData.amount) };
    }
    return item;
     });
     setExpenses(updatedAccounts);
    };
  const [incomeData, setIncomeData] = useState([]);

  const handleAddIncome = (newData) => {
    setIncomeData([...incomeData, newData]);
    const updatedAccounts = income.map((item) => {
      if (item.account === newData.account) {
        // Add the income amount to the balance
        return {
          ...item,
          balance: parseFloat(item.balance) + parseFloat(newData.amount),
        };
      }
      return item;
    });

    // Update the income state with the updated account balances
    setIncome(updatedAccounts);
  };
  return (
    <Budget>
      {/* INCOME */}
      <h4 className="FinValuesI">Income:</h4>
      <MonthlyFilter />
      <BudgetContainer>
        <IncomeList incomeData={incomeData} items={income} />
      </BudgetContainer>
      <AddIcon>
        <CiCirclePlus onClick={() => toggleModal("income")} />
      </AddIcon>

      {/* EXPENSES Modal */}

      {modal && modalType === "income" && (
        <Modal>
          <Overlay>
            <ModalContent>
              <h5 style={{ color: "#ffff" }}>Add Income:</h5>
              <IncomeForm addIncome={handleAddIncome} onSubmit={toggleModal} />
              <button
                className="close-modal"
                onClick={() => toggleModal("income")}
              >
                Cancel
              </button>
            </ModalContent>
          </Overlay>
        </Modal>
      )}

      {/* EXPENSES */}
      <h4 className="FinValuesE">Expenses:</h4>
      {/* <ExpensesFilter/> */}
      <BudgetContainer>
        <ExpenseList expenses={expenses} items={expenses} />
      </BudgetContainer>

      {/* EXPENSES Modal */}
      <MinusIcon>
        <CiCircleMinus onClick={() => toggleModal("expense")} />
      </MinusIcon>
      {modal && modalType === "expense" && (
        <Modal>
          <Overlay>
            <ModalContent>
              <h5 style={{ color: "#ffff" }}>Add Expense:</h5>

              <ExpenseForm
                addExpense={handleAddExpense}
                onSubmit={toggleModal}
              />

              {/* BUTTONS */}
              <button
                className="close-modal"
                onClick={() => toggleModal("expense")}
              >
                Cancel
              </button>
            </ModalContent>
          </Overlay>
        </Modal>
      )}
    </Budget>
  );
};
export default Budgets;
