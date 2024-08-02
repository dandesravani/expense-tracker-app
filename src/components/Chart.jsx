import React from "react"
import Chart from "react-apexcharts"

export const ExpenseChart = () => {
  return (
    <div className="donut">
      <Chart
        type="donut"
        width={"380"}
        series={[10, 20]}
        labels={["total", "expense"]}
      />
    </div>
  )
}
