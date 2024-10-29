import React from "react";
import Navigationclose from "../../components/Navigationclose";
import Maintenance from "./Maintenance";
import Donation from "./Donation";
import Amenities from "./Amenities";
import PayEvent from "./PayEvent";

const Paymentcontent = () => {
  return (
    <div id="main-content">
      <Navigationclose />
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="pageTitle">Payments</h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="body">
                <ul className="nav nav-tabs-new">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-toggle="tab"
                      href="#Maintenance"
                    >
                      Maintenance
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Donation">
                      Donation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Amenities">
                      Amenities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Event">
                      Event
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane show active" id="Maintenance">
                    <Maintenance />
                  </div>
                  <div className="tab-pane" id="Donation">
                    <Donation />
                  </div>
                  <div className="tab-pane" id="Amenities">
                    <Amenities />
                  </div>
                  <div className="tab-pane" id="Event">
                    <PayEvent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentcontent;
