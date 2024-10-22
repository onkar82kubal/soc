import React from "react";

const Setmaintenance = () => {
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Set Maintenance</h4>
      </div>
      <form id="banking-details" data-parsley-validate>
        <div className="body demo-card">
          <div className="header-society">
            <label>Maintenance</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Flat Type</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-flattype"
                />
              </div>
              <div id="error-flattype"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Area</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Sq.ft.</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    required
                    data-parsley-errors-container="#error-area"
                  />
                </div>
              </div>
              <div id="error-area"></div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Maintenance</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-maintenance"
                />
                <div id="error-maintenance"></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Late Fees</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-latefees"
                />
                <div id="error-latefees"></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group addremove">
                <i className="fa fa-trash-o  mr-3"></i>
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Due date</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-duedate"
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <div id="error-duedate"></div>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Parking Charges (Monthly)</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Car</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-car"
                />
              </div>
              <div id="error-car"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Bike</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-bike"
                />
                <div id="error-bike"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Car (Tenant)</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-cartenant"
                />
              </div>
              <div id="error-cartenant"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Bike (Tenant)</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-biketenant"
                />
                <div id="error-biketenant"></div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary mr-1">
                    Save
                  </button>
                  <button type="submit" className="btn btn-primary mr-1">
                    Previous
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Setmaintenance;
