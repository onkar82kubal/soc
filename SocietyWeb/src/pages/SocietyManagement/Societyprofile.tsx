import React from "react";

const Societyprofile = () => {
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Set Society Profile</h4>
      </div>
      <form id="society-profile" data-parsley-validate>
        <div className="body demo-card">
          <div className="header-society">
            {/* <label>Society Details</label> */}
          </div>
          <div className="row clearfix">
            <div className="body">
              <div className="media">
                <div className="media-left m-r-15">
                  <input type="file" className="dropify" />
                </div>
                <div className="media-body">
                  <p>
                    Upload your photo.
                    <br /> <em>Image should be at least 140px x 140px</em>
                  </p>
                  <button
                    type="button"
                    className="btn btn-default"
                    id="btn-upload-photo"
                  >
                    Upload Photo
                  </button>
                  <input type="file" id="filePhoto" className="sr-only" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Amenities</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Amenity name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-amenityname"
                />
              </div>
              <div id="error-amenityname"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Free/Paid</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-freepaid"
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <div id="error-freepaid"></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Per day/Par Hour</label>
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
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Charges</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 mb-50">
              <div className="form-group addremove">
                <i className="fa fa-trash-o  mr-3"></i>
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Commitee members</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Car</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-name"
                />
              </div>
              <div id="error-name"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Role</label>
                <select
                  className="form-control show-tick m-b-10"
                  data-parsley-required
                  data-parsley-trigger-after-failure="change"
                  data-parsley-errors-container="#error-role"
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <div id="error-role"></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-contact"
                />
              </div>
              <div id="error-contact"></div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Email</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  data-parsley-errors-container="#error-email"
                />
              </div>
              <div id="error-email"></div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 mb-50">
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

export default Societyprofile;
