import React from "react";
import Navigationclose from "../../components/Navigationclose";
import Addsociety from "./Addsociety";
import Societyprofile from "./Societyprofile";
import Bankingdetails from "./Bankingdetails";
import Setmaintenance from "./Setmaintenance";
import Addmember from "./Addmember";

const Societycontent = () => {
  return (
    <div id="main-content">
      <Navigationclose />
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="pageTitle">Admin Management</h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="body">
                <ul className="nav nav-tabs-new">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-toggle="tab"
                      href="#Add-society"
                    >
                      Add/remove society
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#Society-profile"
                    >
                      Society Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#Banking-details"
                    >
                      Banking details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#Set-maintenance"
                    >
                      Set maintenance
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#Add-member"
                    >
                      Add/remove member
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane show active" id="Add-society">
                    <Addsociety />
                  </div>
                  <div className="tab-pane" id="Society-profile">
                    <Societyprofile />
                  </div>
                  <div className="tab-pane" id="Banking-details">
                    <Bankingdetails />
                  </div>
                  <div className="tab-pane" id="Set-maintenance">
                    <Setmaintenance />
                  </div>
                  <div className="tab-pane" id="Add-member">
                    <Addmember />
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

export default Societycontent;
