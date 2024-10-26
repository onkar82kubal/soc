import React, { useEffect } from "react";
import { z, ZodType } from "zod";
import BankingDetailsForm from "../../types/BankingDetails";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";

const Bankingdetails = () => {
  const schema: ZodType<BankingDetailsForm> = z.object({
    bank_name: z
      .string({
        required_error: "Bank name is required.",
        invalid_type_error: "Bank name is required.",
      })
      .min(2, "Bank name is required.")
      .max(50, "Bank name must be less than 50 characters."),
    account_name: z
      .string({
        required_error: "Account name is required.",
        invalid_type_error: "Account name is required.",
      })
      .min(2, "Account name is required.")
      .max(50, "Account name must be less than 50 characters."),
    account_number: z
      .string({
        required_error: "Account name is required.",
        invalid_type_error: "Account name is required.",
      })
      .min(2, "Account name is required.")
      .max(50, "Account name must be less than 50 characters."),
    account_type: z
      .string({
        required_error: "Account Type is required.",
        invalid_type_error: "Account Type is required.",
      })
      .min(2, "Account Type is required.")
      .max(50, "Account Type must be less than 50 characters."),
    ifsc_code: z
      .string({
        required_error: "IFSC is required.",
        invalid_type_error: "IFSC is required.",
      })
      .min(2, "IFSC is required.")
      .max(11, "IFSC must be less than 50 characters."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BankingDetailsForm>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: BankingDetailsForm) => {
    console.log(data);
  };
  return (
    <div className="card">
      <div className="header header-society">
        <h4>Add Bank Details</h4>
      </div>
      <form id="banking-details" onSubmit={handleSubmit(submitData)}>
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
                  {...register("bank_name")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.bank_name && errors.bank_name.message}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Account Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("account_name")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.account_name && errors.account_name.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("account_number")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.account_number && errors.account_number.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Account Type</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("account_type")}
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.account_type && errors.account_type.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">IFSC Code</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("ifsc_code")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.ifsc_code && errors.ifsc_code.message}
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
