import React, { useEffect } from "react";
import { z, ZodType } from "zod";
import Maintenance from "../../types/SetMaintenance";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";

const Setmaintenance = () => {
  const schema: ZodType<Maintenance> = z.object({
    maintenance: z.array(
      z.object({
        flat_type: z
          .string({
            required_error: "Flat Type is required.",
            invalid_type_error: "Flat Type is required.",
          })
          .min(1, "Flat Type is required.")
          .max(50, "Flat Type must be less than 50 characters."),
        area: z
          .number({
            required_error: "Area is required.",
            invalid_type_error: "Area is required.",
          })
          .min(1, "Area is required."),
        amount: z
          .number({
            required_error: "Maintenance is required.",
            invalid_type_error: "Maintenance is required.",
          })
          .min(1, "Maintenance is required."),
        late_fee: z
          .number({
            required_error: "Late Fees is required.",
            invalid_type_error: "Late Fees is required.",
          })
          .min(1, "Late Fees is required."),
      })
    ),
    due_date: z
      .number({
        required_error: "Due date is required.",
        invalid_type_error: "Due date is required.",
      })
      .min(1, "Due date is required.")
      .max(31, "Due date must be less than 31."),
    car: z
      .number({
        required_error: "Car is required.",
        invalid_type_error: "Car is required.",
      })
      .min(1, "Car is required."),
    bike: z
      .number({
        required_error: "Bike is required.",
        invalid_type_error: "Bike is required.",
      })
      .min(1, "Bike is required."),
    tenant_car: z
      .number({
        required_error: "Car is required.",
        invalid_type_error: "Car is required.",
      })
      .min(1, "Car is required."),
    tenant_bike: z
      .number({
        required_error: "Bike is required.",
        invalid_type_error: "Bike is required.",
      })
      .min(1, "Bike is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Maintenance>({
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "maintenance",
    control,
  });

  const submitData = (data: Maintenance) => {
    console.log(data);
  };

  return (
    <div className="card">
      <div className="header header-society">
        <h4>Set Maintenance</h4>
      </div>
      <form id="banking-details" onSubmit={handleSubmit(submitData)}>
        <div className="body demo-card">
          <div className="header header-wings">
            <label className="required-field">Maintenance</label>
            <i className="fa fa-plus" onClick={() => append({})}></i>
          </div>
          {fields.map((field, index) => {
            const errorFormflat_type = errors?.maintenance?.[index]?.flat_type;
            const errorFormarea = errors?.maintenance?.[index]?.area;
            const errorFormamount = errors?.maintenance?.[index]?.amount;
            const errorFormlate_fee = errors?.maintenance?.[index]?.late_fee;
            return (
              <>
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Flat Type</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          {...register(
                            `maintenance.${index}.flat_type` as const
                          )}
                        />
                      </div>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormflat_type?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Area</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Sq.ft.</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          {...register(`maintenance.${index}.area` as const)}
                        />
                      </div>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormarea?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Maintenance</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rs.</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          {...register(`maintenance.${index}.amount` as const)}
                        />
                      </div>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormamount?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Late Fees</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rs.</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          {...register(
                            `maintenance.${index}.late_fee` as const
                          )}
                        />
                      </div>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormlate_fee?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      {index > 0 && (
                        <div className="input-group-append amenities_trash">
                          <i
                            className="fa fa-trash-o  mr-3"
                            onClick={() => remove(index)}
                          ></i>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Due date</label>
                <select
                  className="form-control show-tick"
                  {...register("due_date")}
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.due_date && errors.due_date.message}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-society">
            <label>Parking Charges (Monthly)</label>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Car</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Rs.</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    {...register("car")}
                  />
                </div>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.car && errors.car.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Bike</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Rs.</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    {...register("bike")}
                  />
                </div>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.bike && errors.bike.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Car (Tenant)</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Rs.</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    {...register("tenant_car")}
                  />
                </div>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.tenant_car && errors.tenant_car.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Bike (Tenant)</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Rs.</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    {...register("tenant_bike")}
                  />
                </div>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.tenant_bike && errors.tenant_bike.message}
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

export default Setmaintenance;
