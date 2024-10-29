import React from "react";
import { z, ZodType } from "zod";
import AddMemberForm from "../../types/AddMember";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";

const Addmember = () => {
  const schema: ZodType<AddMemberForm> = z.object({
    flat_number: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(2, "This is required.")
      .max(50, "This must be less than 50 characters."),
    wing_name: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(2, "This is required.")
      .max(50, "This must be less than 50 characters."),
    flat_type: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(2, "This is required.")
      .max(50, "This must be less than 50 characters."),
    area: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(2, "This is required.")
      .max(50, "This must be less than 50 characters."),
    occupation_type: z.string({
      required_error: "This is required.",
      invalid_type_error: "This is required.",
    }),
    owners_details: z.array(
      z.object({
        name: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .min(1, "Name is required.")
          .max(50, "Name must be less than 50 characters."),
        contact: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .min(1, "Name is required.")
          .max(50, "Name must be less than 50 characters."),
        email: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .email()
          .min(5, "Name is required."),
        relation: z
          .string({
            required_error: "This is required.",
            invalid_type_error: "This is required.",
          })
          .min(1, "This is required.")
          .max(50, "This must be less than 50 characters."),
      })
    ),
    tenant_name: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(1, "This is required.")
      .max(50, "This must be less than 50 characters."),
    tenant_contact: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(1, "This is required.")
      .max(50, "This must be less than 50 characters."),
    tenant_email: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .email()
      .min(5, "Name is required."),
    family_members: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(5, "Name is required.")
      .max(50, "This must be less than 50 characters."),
    rent_agreement: z
      .string({
        required_error: "This is required.",
        invalid_type_error: "This is required.",
      })
      .min(5, "Name is required.")
      .max(50, "This must be less than 50 characters."),

    parking_details: z.array(
      z.object({
        vehicle: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .min(1, "Name is required.")
          .max(50, "Name must be less than 50 characters."),
        parking_slot: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .min(1, "Name is required.")
          .max(50, "Name must be less than 50 characters."),
        vehicle_number: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .min(1, "Name is required.")
          .max(50, "Name must be less than 50 characters."),
        rc_book: z
          .string({
            required_error: "This is required.",
            invalid_type_error: "This is required.",
          })
          .min(1, "This is required.")
          .max(50, "This must be less than 50 characters."),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddMemberForm>({
    resolver: zodResolver(schema),
  });

  const {
    fields: ownersFields,
    append: ownersAppend,
    remove: ownersRemove,
  } = useFieldArray({ control, name: "owners_details" });

  const {
    fields: parkingFields,
    append: parkingAppend,
    remove: parkingRemove,
  } = useFieldArray({ control, name: "parking_details" });

  const submitData = (data: AddMemberForm) => {
    console.log(data);
  };

  return (
    <div className="card">
      <div className="header header-society">
        <h4>Add Member</h4>
      </div>
      <form id="add-member" onSubmit={handleSubmit(submitData)}>
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
                  {...register("flat_number")}
                  className={
                    errors.flat_number
                      ? "form-control parsley-error"
                      : "form-control"
                  }
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.flat_number && errors.flat_number.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Wing</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("wing_name")}
                >
                  <option value=""></option>
                  <option value="1">Free</option>
                  <option value="2">Paid</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.wing_name && errors.wing_name.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Flat Type</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("flat_type")}
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.flat_type && errors.flat_type.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Area</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("area")}
                >
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.area && errors.area.message}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Occupation</label>
                <select
                  className="form-control show-tick m-b-10"
                  {...register("occupation_type")}
                >
                  <option value=""></option>
                  <option value="1">Self</option>
                  <option value="2">Rented</option>
                </select>
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.occupation_type && errors.occupation_type.message}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header header-wings">
            <label className="required-field">Owners details</label>
            <i className="fa fa-plus" onClick={() => ownersAppend({})}></i>
          </div>
          {ownersFields.map((field, index) => {
            const errorFormname = errors?.owners_details?.[index]?.name;
            const errorFormcontact = errors?.owners_details?.[index]?.contact;
            const errorFormemail = errors?.owners_details?.[index]?.email;
            const errorFormrelation = errors?.owners_details?.[index]?.relation;
            return (
              <>
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(`owners_details.${index}.name` as const)}
                      />
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormname?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Contact</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(
                          `owners_details.${index}.contact` as const
                        )}
                      />
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormcontact?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(`owners_details.${index}.email` as const)}
                      />
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormemail?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Relation</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(
                          `owners_details.${index}.relation` as const
                        )}
                      />
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormrelation?.message ?? <>&nbsp;</>}
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
                            onClick={() => ownersRemove(index)}
                          ></i>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
                  {...register("tenant_name")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.tenant_name && errors.tenant_name.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("tenant_contact")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.tenant_contact && errors.tenant_contact.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Email</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("tenant_email")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.tenant_email && errors.tenant_email.message}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form-group">
                <label className="required-field">Family members</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("family_members")}
                />
                <ul className="parsley-errors-list filled">
                  <li className="parsley-required">
                    {errors.family_members && errors.family_members.message}
                  </li>
                </ul>
              </div>
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
          <div className="header header-wings">
            <label className="required-field">Parking details</label>
            <i className="fa fa-plus" onClick={() => parkingAppend({})}></i>
          </div>
          {parkingFields.map((field, index) => {
            const errorFormvehicle = errors?.parking_details?.[index]?.vehicle;
            const errorFormparking_slot =
              errors?.parking_details?.[index]?.parking_slot;
            const errorFormvehicle_number =
              errors?.parking_details?.[index]?.vehicle_number;
            const errorFormrc_book = errors?.parking_details?.[index]?.rc_book;
            return (
              <>
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Vehicle</label>
                      <select
                        className="form-control show-tick m-b-10"
                        {...register(
                          `parking_details.${index}.vehicle` as const
                        )}
                      >
                        <option value=""></option>
                        <option value="1">Free</option>
                        <option value="2">Paid</option>
                      </select>
                      <ul className="parsley-errors-list filled mt-0">
                        <li className="parsley-required">
                          {errorFormvehicle?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Parking slot</label>
                      <select
                        className="form-control show-tick m-b-10"
                        {...register(
                          `parking_details.${index}.parking_slot` as const
                        )}
                      >
                        <option value=""></option>
                        <option value="1">Free</option>
                        <option value="2">Paid</option>
                      </select>
                      <ul className="parsley-errors-list filled mt-0">
                        <li className="parsley-required">
                          {errorFormparking_slot?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">
                        Vehicle registration number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(
                          `parking_details.${index}.vehicle_number` as const
                        )}
                      />
                      <ul className="parsley-errors-list filled mt-0">
                        <li className="parsley-required">
                          {errorFormvehicle_number?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12" key={field.id}>
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
                            <input
                              type="file"
                              id="fileRCBook"
                              className="sr-only"
                              {...register(
                                `parking_details.${index}.rc_book` as const
                              )}
                            />
                            <ul className="parsley-errors-list filled mt-0">
                              <li className="parsley-required">
                                {errorFormrc_book?.message ?? <>&nbsp;</>}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      {index > 0 && (
                        <div className="input-group-append amenities_trash">
                          <i
                            className="fa fa-trash-o  mr-3"
                            onClick={() => parkingRemove(index)}
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
