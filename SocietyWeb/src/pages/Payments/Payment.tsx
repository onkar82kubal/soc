import React from "react";
import { Navbar } from "react-bootstrap";
import Leftside from "../../components/Leftside";
import Rightside from "../../components/Rightside";
import Paymentcontent from "./Paymentcontent";

const Payment = () => {
  return (
    <div id="wrapper" className="theme-cyan">
      <div className="dashBoard">
        <Navbar />
        <Leftside />
        <Rightside />
        <Paymentcontent />
      </div>
    </div>
  );
};

export default Payment;
