import React from "react";
import { z, ZodType } from "zod";
import AddsocietyForm from "../../types/Addsociety";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";

const Addsociety = () => {
  const schema: ZodType<AddsocietyForm> = z.object({
    society_name: z
      .string({
        required_error: "Society name is required.",
        invalid_type_error: "Society name is required.",
      })
      .min(2, "Society name is required.")
      .max(50, "Society name must be less than 50 characters."),
    no_gates: z
      .number({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(1)
      .max(200),
    no_floors: z
      .number({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(1)
      .max(2000),
    no_flats: z
      .number({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(1)
      .max(50000),
    wing_name: z
      .string({
        required_error: "Wing name is required.",
        invalid_type_error: "Wing name is required.",
      })
      .min(1, "Wing name is required.")
      .max(500000),
    address: z
      .string({
        required_error: "Address is required.",
        invalid_type_error: "Address is required.",
      })
      .min(1, "Address is required.")
      .max(5000),
    region: z
      .string({
        required_error: "Region is required.",
        invalid_type_error: "Region is required.",
      })
      .min(1, "Region is required.")
      .max(500),
    city: z
      .string({
        required_error: "City is required.",
        invalid_type_error: "City is required.",
      })
      .min(1, "City is required.")
      .max(50),
    pincode: z
      .number({
        required_error: "Pincode is required.",
        invalid_type_error: "Pincode is required.",
      })
      .min(1, "Pincode is required.")
      .max(50000000000),
    primary_contact: z
      .number({
        required_error: "Contact is required.",
        invalid_type_error: "Contact is required.",
      })
      .min(1, "Contact is required.")
      .max(5000000000000000000),
    primary_email: z
      .string({
        required_error: "Email is required.",
        invalid_type_error: "Email is required.",
      })
      .min(1, "Email is required.")
      .max(50),
    date_onboarding: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .date(),
    refered_by: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(1, "This is required.")
      .max(50),
    monthly_charges: z
      .number({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(1, "This is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddsocietyForm>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: AddsocietyForm) => {
    console.log(data);
  };

  return (
    <div className="card">
      <div className="header header-society">
        <h4>Add Society Details</h4>
      </div>
      <form onSubmit={handleSubmit(submitData)} id="basic-form">
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
                  {...register("society_name")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.society_name && errors.society_name.message}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">No. of Gates</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("no_gates", { valueAsNumber: true })}
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.no_gates && errors.no_gates.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">No. of Floors</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("no_floors", { valueAsNumber: true })}
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.no_floors && errors.no_floors.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">No. of flats</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("no_flats", { valueAsNumber: true })}
                />
              </div>
              <ul className="parsley-errors-list filled">
                <li className="parsley-required">
                  {errors.no_flats && errors.no_flats.message}
                </li>
              </ul>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Wing Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("wing_name")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.wing_name && errors.wing_name.message}
                  </li>
                </ul>
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
                  {...register("address")}
                ></textarea>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.address && errors.address.message}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Region</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("region")}
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.region && errors.region.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">City</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("city")}
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.city && errors.city.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("pincode", { valueAsNumber: true })}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.pincode && errors.pincode.message}
                  </li>
                </ul>
              </div>
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
                  type="number"
                  className="form-control"
                  {...register("primary_contact", { valueAsNumber: true })}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.primary_contact && errors.primary_contact.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Email</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("primary_email")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.primary_email && errors.primary_email.message}
                  </li>
                </ul>
              </div>
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
                  {...register("date_onboarding")}
                  // min={moment().format("DD/MM/YYYY")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.date_onboarding && errors.date_onboarding.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Refered by</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("refered_by")}
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.refered_by && errors.refered_by.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Monthly Charges</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("monthly_charges", { valueAsNumber: true })}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.monthly_charges && errors.monthly_charges.message}
                  </li>
                </ul>
              </div>
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
