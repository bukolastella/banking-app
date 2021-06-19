import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

// import "./styles.css";

const Chart = () => {
  const [state] = useState({
    data: {
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Outflow",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },

        {
          label: "Inflow",
          backgroundColor: "rgba(155,231,91,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [45, 79, 50, 41, 16, 85, 20],
        },
      ],
    },
  });
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      x: { grid: { display: false } },
    },
    type: "bar",
  };
  return (
    <Bar data={state.data} width={"100%"} height={"100%"} options={options} />
  );
};

export default Chart;
