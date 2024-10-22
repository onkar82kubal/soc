import React from 'react'
import Navigationclose from './Navigationclose'
import { useForm } from 'react-hook-form';

const Societycontent = () => {
  return (
    <div id="main-content"> 
        <Navigationclose />
        <div className="container-fluid">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className='pageTitle'>Admin Management</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex flex-row-reverse">
                            <div className="page_action">
                                {/* <button type="button" className="btn btn-primary"><i className="fa fa-download"></i> Download report</button>
                                <button type="button" className="btn btn-secondary"><i className="fa fa-send"></i> Send report</button> */}
                            </div>
                            <div className="p-2 d-flex">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="header">
                            {/* <h2>Example Tab 2</h2> */}
                        </div>
                        <div className="body">
                            <ul className="nav nav-tabs-new">
                                <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#Add-society">Add/remove society</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Society-profile">Society Profile</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Banking-details">Banking details</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Set-maintenance">Set maintenance</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Add-member">Add/remove member</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="Add-society">
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
                                                        <label className='required-field'>Society Name</label>
                                                        <input type="text" className="form-control" required data-parsley-errors-container="#error-societyname"/>
                                                    </div>
                                                    <div id="societyname"></div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>No. of Gates</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-nogates">
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
                                                        <label className='required-field'>No. of Floors</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-nofloors">
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
                                                        <label className='required-field'>No. of flats</label>
                                                        <input type="text" id="phone"  className="form-control" required/>
                                                    </div>
                                                </div>
                                        
                                            </div>
                                            <div className="row clearfix">
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Wing Name</label>
                                                        <input type="text" id="phone"  className="form-control" required/>
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
                                                        <label className='required-field'>Address</label>
                                                        <textarea class="form-control" rows="5" cols="30"  required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Region</label>    
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-region">
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
                                                        <label className='required-field'>City</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-city">
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
                                                        <label className='required-field'>Pincode</label>
                                                        <input type="text" className="form-control" required data-parsley-errors-container="#error-pincode" />
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
                                                        <label className='required-field'>Contact</label>
                                                        <input type="text"   className="form-control" required data-parsley-errors-container="#error-contactno"/>
                                                    </div>
                                                    <div className='contactno'></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Email</label>
                                                        <input type="email"  className="form-control" required data-parsley-errors-container="#error-email" />
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
                                                        <label className='required-field'>Date of Onboarding</label>
                                                        <input type="date"  className="form-control" required data-parsley-errors-container="#error-onboarding" />
                                                    </div>
                                                    <div id="onboarding"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Refered by</label>
                                                        <select className="form-control show-tick m-b-10" required data-parsley-errors-container="#error-referedby" >
                                                            <option value=""></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className='error-referedby'></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Monthly Charges</label>
                                                        <input type="number"   className="form-control" required data-parsley-errors-container="#error-charges"/>
                                                    </div>
                                                    <div id="charges"></div>
                                                </div>
                                            </div>
                                            <div className='row clearfix'>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="btn-group">
                                                            <button type="submit" className="btn btn-primary mr-1">Next</button>
                                                            <button type="submit" className="btn btn-primary">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="tab-pane" id="Society-profile">
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
                                                            <input type="file" className="dropify"/>
                                                        </div>
                                                        <div className="media-body">
                                                            <p>Upload your photo.
                                                                <br/> <em>Image should be at least 140px x 140px</em></p>
                                                            <button type="button" className="btn btn-default" id="btn-upload-photo">Upload Photo</button>
                                                            <input type="file" id="filePhoto" className="sr-only"/>
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
                                                        <label className='required-field'>Amenity name</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-amenityname"/>
                                                    </div>
                                                    <div id="error-amenityname"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Free/Paid</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-freepaid">
                                                            <option value=""></option>
                                                            <option value="1">Free</option>
                                                            <option value="2">Paid</option>
                                                        </select>
                                                        <div id="error-freepaid"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Per day/Par Hour</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-nofloors">
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
                                                        <label className='required-field'>Charges</label>
                                                        <input type="text" id="phone"  className="form-control" required/>
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
                                                        <label className='required-field'>Car</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-name"/>
                                                    </div>
                                                    <div id="error-name"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Role</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-role">
                                                            <option value=""></option>
                                                            <option value="1">Free</option>
                                                            <option value="2">Paid</option>
                                                        </select>
                                                        <div id="error-role"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Contact</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-contact"/>
                                                    </div>
                                                    <div id="error-contact"></div>
                                                </div>
                                                <div className="col-lg-2 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Email</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-email"/>
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
                                            <div className='row clearfix'>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="btn-group">
                                                            <button type="submit" className="btn btn-primary mr-1">Save</button>
                                                            <button type="submit" className="btn btn-primary mr-1">Previous</button>
                                                            <button type="submit" className="btn btn-primary">Next</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Banking-details">
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
                                                            <label className='required-field'>Bank Name</label>
                                                            <input type="text"  className="form-control" required data-parsley-errors-container="#error-bankname"/>
                                                        </div>
                                                        <div id="error-bankname"></div>
                                                    </div>
                                                </div>
                                                <div className="row clearfix">
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>Account Name</label>
                                                            <input type="text"  className="form-control" required data-parsley-errors-container="#error-accountname"/>
                                                        </div>
                                                        <div id="error-accountname"></div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>Account Number</label>
                                                            <input type="text"  className="form-control" required data-parsley-errors-container="#error-accountnumber"/>
                                                            <div id="error-accountnumber"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>Account Type</label>
                                                            <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-accounttype">
                                                                <option value=""></option>
                                                                <option value="1">Free</option>
                                                                <option value="2">Paid</option>
                                                            </select>
                                                            <div id="error-accounttype"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>IFSC Code</label>
                                                            <input type="text"  className="form-control" required data-parsley-errors-container="#error-ifsc"/>
                                                        </div>
                                                        <div id="error-ifsc"></div>
                                                    </div>
                                                </div>
                                                <div className='row clearfix'>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="btn-group">
                                                                <button type="submit" className="btn btn-primary mr-1">Save</button>
                                                                <button type="submit" className="btn btn-primary mr-1">Previous</button>
                                                                <button type="submit" className="btn btn-primary">Next</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Set-maintenance">
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
                                                            <label className='required-field'>Flat Type</label>
                                                            <input type="text"  className="form-control" required data-parsley-errors-container="#error-flattype"/>
                                                        </div>
                                                        <div id="error-flattype"></div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>Area</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">Sq.ft.</span>
                                                                </div>
                                                                <input type="text"   className="form-control" required data-parsley-errors-container="#error-area"/>
                                                            </div>
                                                        </div>
                                                        <div id="error-area"></div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>Maintenance</label>
                                                            <input type="text"  className="form-control" required data-parsley-errors-container="#error-maintenance"/>
                                                            <div id="error-maintenance"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>Late Fees</label>
                                                            <input type="text"  className="form-control" required data-parsley-errors-container="#error-latefees"/>
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
                                                <div className='row clearfix'>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label className='required-field'>Due date</label>
                                                            <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-duedate">
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
                                                        <label className='required-field'>Car</label>
                                                        <input type="number"  className="form-control" required data-parsley-errors-container="#error-car"/>
                                                    </div>
                                                    <div id="error-car"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Bike</label>
                                                        <input type="number"  className="form-control" required data-parsley-errors-container="#error-bike"/>
                                                        <div id="error-bike"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Car (Tenant)</label>
                                                        <input type="number"  className="form-control" required data-parsley-errors-container="#error-cartenant"/>
                                                    </div>
                                                    <div id="error-cartenant"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Bike (Tenant)</label>
                                                        <input type="number"  className="form-control" required data-parsley-errors-container="#error-biketenant"/>
                                                        <div id="error-biketenant"></div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className='row clearfix'>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="btn-group">
                                                                <button type="submit" className="btn btn-primary mr-1">Save</button>
                                                                <button type="submit" className="btn btn-primary mr-1">Previous</button>
                                                                <button type="submit" className="btn btn-primary">Next</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Add-member">
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
                                                        <button type="button" className="btn btn-default" id="btn-upload-xlx">Upload XLX</button>
                                                        <input type="file" id="filePhoto" className="sr-only"/>
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
                                                        <label className='required-field'>Flat Number</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-flatnumber"/>
                                                    </div>
                                                    <div id="error-flatnumber"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Wing</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-wing">
                                                            <option value=""></option>
                                                            <option value="1">Free</option>
                                                            <option value="2">Paid</option>
                                                        </select>
                                                        <div id="error-wing"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Flat Type</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-flatType">
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
                                                        <label className='required-field'>Area</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-flatArea">
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
                                                        <input type="radio" name="occupied" value="self" required data-parsley-errors-container="#error-occupied"/>
                                                        <span><i></i>Self occupied</span>
                                                    </label>
                                                    <label className="fancy-radio">
                                                        <input type="radio" name="occupied" value="rent"/>
                                                        <span><i></i>Rented</span>
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
                                                        <label className='required-field'>Name</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-ownername"/>
                                                    </div>
                                                    <div id="error-ownername"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                    <label className='required-field'>Contact</label>
                                                    <input type="text"  className="form-control" required data-parsley-errors-container="#error-ownercontact"/>
                                                        <div id="error-ownercontact"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Email</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-owneremail"/>
                                                    </div>
                                                    <div id="error-owneremail"></div>
                                                </div>
                                                <div className="col-lg-2 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Relation</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-relation"/>
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
                                                        <label className='required-field'>Name</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-tenantname"/>
                                                    </div>
                                                    <div id="error-tenantname"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                    <label className='required-field'>Contact</label>
                                                    <input type="text"  className="form-control" required data-parsley-errors-container="#error-tenantcontact"/>
                                                        <div id="error-tenantcontact"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Email</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-tenantemail"/>
                                                    </div>
                                                    <div id="error-tenantemail"></div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Family members</label>
                                                        <input type="number"  className="form-control" required data-parsley-errors-container="#error-familymembers"/>
                                                    </div>
                                                    <div id="error-familymembers"></div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="body">
                                                    <div className="media">
                                                        <div className="media-body">
                                                            <button type="button" className="btn btn-default" id="btn-upload-agreement">Rent Agreement</button>
                                                            <input type="file" id="fileAgreement" className="sr-only"/>
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
                                                        <label className='required-field'>Vehicle</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-vehicle">
                                                            <option value=""></option>
                                                            <option value="1">Free</option>
                                                            <option value="2">Paid</option>
                                                        </select>
                                                        <div id="error-vehicle"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Parking slot</label>
                                                        <select className="form-control show-tick m-b-10" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-parkingslot">
                                                            <option value=""></option>
                                                            <option value="1">Free</option>
                                                            <option value="2">Paid</option>
                                                        </select>
                                                        <div id="error-parkingslot"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label className='required-field'>Vehicle registration number</label>
                                                        <input type="text"  className="form-control" required data-parsley-errors-container="#error-registration number"/>
                                                        <div id="error-registrationnumber"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="body">
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <button type="button" className="btn btn-default" id="btn-upload-fileRCBook">RC Book</button>
                                                                    <input type="file" id="fileRCBook" className="sr-only"/>
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

                                            <div className='row clearfix'>
                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="btn-group">
                                                            <button type="submit" className="btn btn-primary mr-1">Save</button>
                                                            <button type="submit" className="btn btn-primary mr-1">Previous</button>
                                                            {/* <button type="submit" className="btn btn-primary">Next</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                        
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Societycontent