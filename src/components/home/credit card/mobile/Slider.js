import React from "react";
import Credit from "../Credit";
import classes from "./Slider.module.css";
import { useSelector } from "react-redux";

const Slider = () => {
  const balance = useSelector((state) => state.bank.balance);

  const data = [
    {
      id: "1",
      name: "universal",
      amount: `$${balance.toLocaleString()}`,
      expdate: "*2243 04/21",
    },
    {
      id: "2",
      name: "gold",
      amount: "$2343.3",
      expdate: "*1043 07/21",
    },
    {
      id: "3",
      name: "junior",
      amount: "$8743.3",
      expdate: "*6743 04/22",
    },
  ];
  // const data = [
  //   { id: "1", name: "universal", amount: "$3443.3", expdate: "*2243 04/21" },
  //   { id: "2", name: "gold", amount: "$2343.3", expdate: "*1043 07/21" },
  //   { id: "3", name: "junior", amount: "$8743.3", expdate: "*6743 04/22" },
  // ];
  const slides = data.map((ev, i) => {
    let k;
    let a;
    let c;
    if (i === 0) {
      k = 0;
      a = "black";
    }
    if (i === 1) {
      k = 110;
      a = "#c8ed43";
      c = "black";
    }
    if (i === 2) {
      k = 220;
      a = "#29a174";
    }

    return (
      <Credit
        key={ev.id}
        name={ev.name}
        amount={ev.amount}
        expdate={ev.expdate}
        style={{
          transform: `translateX(${k}%)`,
          position: "absolute",
          backgroundColor: `${a}`,
          color: `${c}`,
          fontWeight: "bold",
        }}
      />
    );
  });
  return (
    <div className={classes.flex}>
      <div className={classes.Slider}>{slides}</div>
      <div className={classes.dot}></div>
    </div>
  );
};

export default Slider;
