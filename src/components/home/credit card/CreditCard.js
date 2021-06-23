import React, { useState } from "react";
import CreditDetails from "./CreditDetails";
import CreditHead from "./CreditHead";
import classes from "./CreditCard.module.css";
import { useSelector } from "react-redux";

const CreditCard = () => {
  const balance = useSelector((state) => state.bank.balance);

  const data = [
    {
      id: "1",
      name: "universal",
      amount: `$${balance.toLocaleString()}`,
      expdate: "*2243 04/21",
      background: "black",
      creditLimit: "$100,000",
      status: "active",
      color: "white",
    },
    {
      id: "2",
      name: "gold",
      amount: "$2343.3",
      expdate: "*1043 07/21",
      background: "#c8ed43",
      creditLimit: "$664343",
      status: "Not active",
      color: "black",
    },
    {
      id: "3",
      name: "junior",
      amount: "$8743.3",
      expdate: "*6743 04/22",
      background: "#29a174",
      creditLimit: "$14343",
      status: "Not active",
      color: "white",
    },
  ];
  const [state, setstate] = useState("1");
  const selected = data.find((ev) => ev.id === state);
  const notSelected = data.filter((ev) => ev.id !== state);
  return (
    <div className={classes.CreditCard}>
      <CreditDetails
        key={selected.id}
        name={selected.name}
        expdate={selected.expdate}
        amount={selected.amount}
        creditLimit={selected.creditLimit}
        status={selected.status}
        background={selected.background}
        color={selected.color}
      />
      {notSelected.map((ev) => (
        <CreditHead
          key={ev.id}
          id={ev.id}
          name={ev.name}
          expdate={ev.expdate}
          amount={ev.amount}
          creditLimit={ev.creditLimit}
          status={ev.status}
          background={ev.background}
          color={ev.color}
          click={setstate}
        />
      ))}
    </div>
  );
};

export default CreditCard;
