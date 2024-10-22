import React from "react";

const Addsociety = () => {
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Add Society Details</h4>
      </div>
      <form id="basic-form" data-parsley-validate>
        <div className="body demo-card">
          <div className="header-society">
            <label>Society Details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-9 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Society Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-societyname"
                />
              </div>
              <div id="societyname"></div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">No. of Gates</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-nogates"
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="error-nogates"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">No. of Floors</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-nofloors"
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="error-nofloors"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">No. of flats</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Wing Name</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-50">
              <div className="form-group addremove">
                <i className="fa fa-trash-o  mr-3"></i>
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-9 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Address</label>
                <textarea
                  class="form-control"
                  rows="5"
                  cols="30"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Region</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-region"
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="error-region"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">City</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-city"
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="error-city"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-pincode"
                />
              </div>
              <div className="pincode"></div>
            </div>
          </div>
          <div className="header-society">
            <label for="basic-url">Primary contact details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-contactno"
                />
              </div>
              <div className="contactno"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-email"
                />
              </div>
              <div id="error-email"></div>
            </div>
          </div>
          <div className="header-society">
            <label for="basic-url">Onboarding details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Date of Onboarding</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-onboarding"
                />
              </div>
              <div id="onboarding"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Refered by</label>
                <select
                  className="form-control show-tick m-b-10"
                  required
                  data-parsley-errors-container="#error-referedby"
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="error-referedby"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Monthly Charges</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-charges"
                />
              </div>
              <div id="charges"></div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary mr-1">
                    Next
                  </button>
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

export default Addsociety;
