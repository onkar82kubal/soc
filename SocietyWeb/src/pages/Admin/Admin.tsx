import React from "react";
import { Navbar } from "react-bootstrap";
import Leftside from "../../components/Leftside";
import Rightside from "../../components/Rightside";
import Admincontent from "../../components/Admincontent";

const Admin = () => {
  return (
    <div id="wrapper" className="theme-cyan">
      <div className="dashBoard">
        <Navbar />
        <Leftside />
        <Rightside />
        <Admincontent />
      </div>
    </div>
  );
};

export default Admin;
