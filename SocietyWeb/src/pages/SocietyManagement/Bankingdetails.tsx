import React from "react";

const Bankingdetails = () => {
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Add Bank Details</h4>
      </div>
      <form id="banking-details" data-parsley-validate>
        <div className="body demo-card">
          <div className="header-society">
            {/* <label>Society Details</label> */}
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Bank Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-bankname"
                />
              </div>
              <div id="error-bankname"></div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Account Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-accountname"
                />
              </div>
              <div id="error-accountname"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-accountnumber"
                />
                <div id="error-accountnumber"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Account Type</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-accounttype"
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <div id="error-accounttype"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">IFSC Code</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-ifsc"
                />
              </div>
              <div id="error-ifsc"></div>
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

export default Bankingdetails;
