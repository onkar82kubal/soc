import React from "react";

const Addmember = () => {
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Add Member</h4>
      </div>
      <form id="add-member" data-parsley-validate>
        <div className="body demo-card">
          <div className="header-society">
            {/* <label>Society Details</label> */}
          </div>
          <div className="row clearfix">
            <div className="body">
              <div className="media">
                <div className="media-body">
                  <button
                    type="button"
                    className="btn btn-default"
                    id="btn-upload-xlx"
                  >
                    Upload XLX
                  </button>
                  <input type="file" id="filePhoto" className="sr-only" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Flat Details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Flat Number</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-flatnumber"
                />
              </div>
              <div id="error-flatnumber"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Wing</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-wing"
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <div id="error-wing"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Flat Type</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-flatType"
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="error-flatType"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Area</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-flatArea"
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="error-flatArea"></div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="fancy-radio">
                  <input
                    type="radio"
                    name="occupied"
                    value="self"
                    required
                    data-parsley-errors-container="#error-occupied"
                  />
                  <span>
                    <i></i>Self occupied
                  </span>
                </label>
                <label className="fancy-radio">
                  <input type="radio" name="occupied" value="rent" />
                  <span>
                    <i></i>Rented
                  </span>
                </label>
                <p id="error-occupied"></p>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Owners details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-ownername"
                />
              </div>
              <div id="error-ownername"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-ownercontact"
                />
                <div id="error-ownercontact"></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Email</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-owneremail"
                />
              </div>
              <div id="error-owneremail"></div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Relation</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-relation"
                />
              </div>
              <div id="error-relation"></div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 mb-50">
              <div className="form-group addremove">
                <i className="fa fa-trash-o  mr-3"></i>
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Tenant details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-tenantname"
                />
              </div>
              <div id="error-tenantname"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-tenantcontact"
                />
                <div id="error-tenantcontact"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Email</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-tenantemail"
                />
              </div>
              <div id="error-tenantemail"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Family members</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-familymembers"
                />
              </div>
              <div id="error-familymembers"></div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="body">
              <div className="media">
                <div className="media-body">
                  <button
                    type="button"
                    className="btn btn-default"
                    id="btn-upload-agreement"
                  >
                    Rent Agreement
                  </button>
                  <input type="file" id="fileAgreement" className="sr-only" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Parking details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Vehicle</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-vehicle"
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <div id="error-vehicle"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Parking slot</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-parkingslot"
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <div id="error-parkingslot"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">
                  Vehicle registration number
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-registration number"
                />
                <div id="error-registrationnumber"></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <div className="body">
                  <div className="media">
                    <div className="media-body">
                      <button
                        type="button"
                        className="btn btn-default"
                        id="btn-upload-fileRCBook"
                      >
                        RC Book
                      </button>
                      <input type="file" id="fileRCBook" className="sr-only" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-6 col-sm-12">
              <div className="form-group addremove">
                <i className="fa fa-trash-o  mr-3"></i>
                <i className="fa fa-plus"></i>
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
                  {/* <button type="submit" className="btn btn-primary">Next</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addmember;
