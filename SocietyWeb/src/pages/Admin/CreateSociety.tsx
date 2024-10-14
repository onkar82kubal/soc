import React from 'react'

const CreateSociety = () => {
  return (
    <>
    <div className="card">
          <div className="header">
              <h2>Create Society</h2>
          </div>
          <div className="body">
              <form id="basic-form" method="post">
                  <div className="form-group">
                      <label>Society Name</label>
                      <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                      <label>Address</label>
                      <textarea class="form-control" rows="5" cols="30" required></textarea>
                  </div>
                  <div className="form-group">
                      <label>Pin code</label>
                      <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                      <label>Contact</label>
                      <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                      <label>Trial</label>
                      <br />
                      <label className="fancy-radio">
                          <input type="radio" name="istrial" value="Y" required data-parsley-errors-container="#error-radio"/>
                          <span><i></i>Yes</span>
                      </label>
                      <label className="fancy-radio">
                          <input type="radio" name="istrial" value="N"/>
                          <span><i></i>No</span>
                      </label>
                      <p id="error-radio"></p>
                  </div>
                  <div className="form-group">
                    <div className="fancy-checkbox">
                        <label><input type="checkbox"/><span>Is Active</span></label>
                    </div>
                  </div>
                  <div className="form-group">
                      <label for="food">Area Sales Managers</label>
                      <br/>
                      <select id="food" name="food[]" class="multiselect multiselect-custom" multiple="multiple" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-multiselect">
                          <option value="cheese">Cheese</option>
                          <option value="tomatoes">Tomatoes</option>
                          <option value="mozarella">Mozzarella</option>
                          <option value="mushrooms">Mushrooms</option>
                          <option value="pepperoni">Pepperoni</option>
                          <option value="onions">Onions</option>
                      </select>
                      <p id="error-multiselect"></p>
                  </div>
                  <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                  <button type="submit" className="btn btn-primary">Save</button>
                  </div>
                  
              </form>
          </div>
    </div>
    <div className="card">
          <div className="header">
              <h2>Society List</h2>
          </div>
          <div className="body">

          </div>
    </div>
    </>
  )
}

export default CreateSociety