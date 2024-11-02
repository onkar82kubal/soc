import React from "react";

const Role = () => {
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Create Role</h4>
      </div>
      <form id="add-member">
        <div className="body demo-card">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Title</label>
                <input type="text" className="form-control" />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Description</label>
                <input type="text" className="form-control" />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label>Device Type</label>
                <select className="form-control show-tick m-b-10">
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label>Society Name</label>
                <select className="form-control show-tick m-b-10">
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary">
                    Save
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

export default Role;
