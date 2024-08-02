import React from "react"
import {Navbar} from "./Navbar"
import {ExpenseDetails} from "./ExpenseDetails"
import {BalanceDetails} from "./BalanceDetails"
import {ExpenseChart} from "./Chart"

export const ExpensiveTrackerApp = () => {
  const [transactions, set] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [expense, setExpense] = React.useState(0)
  const [balance, setBalance] = React.useState(0)

  const handleTransaction = transaction => {
    set([...transactions, transaction])
  }

  React.useEffect(() => {
    let expense = 0
    let total = 0

    transactions.forEach(item => {
      item.description === "income"
        ? (total = total + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount))
    })
    setTotal(total)
    setExpense(expense)
    setBalance(total - expense)
  }, [transactions])

  return (
    <>
      <Navbar handleSubmit={handleTransaction} />
      {/* <ExpenseChart /> */}
      <BalanceDetails
        totalExpense={expense}
        totalIncome={total}
        balance={balance}
      />
      <ExpenseDetails transactions={transactions} />
    </>
  )
}
