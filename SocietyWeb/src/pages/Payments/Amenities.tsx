import React from "react";

const Amenities = () => {
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Book an Amenity</h4>
      </div>
      <form id="add-member">
        <div className="body demo-card">
          <div className="header-society">
            {/* <label>Society Details</label> */}
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Flat Number</label>
                <select className="form-control show-tick m-b-10">
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label>&nbsp;</label>
                <input type="text" className="form-control" readOnly />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Booking Details</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">From</label>
                <input
                  className="form-control"
                  aria-label="Date and time"
                  type="datetime-local"
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">To</label>
                <input
                  className="form-control"
                  aria-label="Date and time"
                  type="datetime-local"
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Booking Charges</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Rs.</span>
                  </div>
                  <input className="form-control" type="number" />
                </div>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Payment Details</label>
          </div>
          <label className="fancy-checkbox">
            <input
              type="checkbox"
              name="checkbox"
              required
              data-parsley-errors-container="#error-checkbox"
            />
            <span>Cheque</span>
          </label>
          <label className="fancy-checkbox">
            <input
              type="checkbox"
              name="checkbox"
              required
              data-parsley-errors-container="#error-checkbox"
            />
            <span>Online</span>
          </label>
          <label className="fancy-checkbox">
            <input
              type="checkbox"
              name="checkbox"
              required
              data-parsley-errors-container="#error-checkbox"
            />
            <span>Cash</span>
          </label>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Date of Payment</label>
                <input type="date" className="form-control" />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Refference No.</label>
                <input type="text" className="form-control" />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required"></li>
                </ul>
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

export default Amenities;
