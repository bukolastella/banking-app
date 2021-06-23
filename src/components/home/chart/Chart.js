import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
// import "./styles.css";

const Chart = () => {
  const date = useSelector((state) => state.bank.date);
  const posAmount = useSelector((state) => state.bank.posAmount);
  const negAmount = useSelector((state) => state.bank.negAmount);
  const dateLabels = date.map((ev) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = days[new Date(ev).getDay()];
    return dayName;
  });
  const adjDateLabels = dateLabels.slice(-7);
  const [state] = useState({
    data: {
      labels: adjDateLabels,
      datasets: [
        {
          label: "Outflow",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: Object.values(negAmount)
            .map((ev) => Math.abs(ev))
            .slice(-7),
        },

        {
          label: "Inflow",
          backgroundColor: "rgba(155,231,91,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: Object.values(posAmount).slice(-7),
        },
        // {
        //   label: "CHART STATISTICS",
        // },
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
      x: {
        grid: { display: false },
      },
      // y: { grid: { display: false } },
    },
    type: "bar",
  };
  return (
    <Bar data={state.data} width={"100%"} height={"100%"} options={options} />
  );
};

export default Chart;
