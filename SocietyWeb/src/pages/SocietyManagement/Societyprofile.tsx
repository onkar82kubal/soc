import React, { useState } from "react";
import { z, ZodType } from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SocietyProfile from "../../types/SocietyProfile";

const Societyprofile = () => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const removeImage = () => {
    setFile(null);
  };

  const MAX_FILE_SIZE = 5000000;
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  const schema: ZodType<SocietyProfile> = z.object({
    society_photo: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
    amenities: z.array(
      z.object({
        amenity_name: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .min(1, "Name is required.")
          .max(50, "Name must be less than 50 characters."),
        amenity_type: z
          .string({
            required_error: "Type is required.",
            invalid_type_error: "Type is required.",
          })
          .min(1, "Type is required.")
          .max(50, "Type must be less than 50 characters."),
        payment_type: z
          .string({
            required_error: "This is required.",
            invalid_type_error: "This is required.",
          })
          .min(1, "This is required.")
          .max(50, "This must be less than 50 characters."),
        payment_charge: z
          .number({
            required_error: "This is required.",
            invalid_type_error: "This is required.",
          })
          .min(1)
          .max(20000000),
      })
    ),
    commitee_members: z.array(
      z.object({
        member_name: z
          .string({
            required_error: "Name is required.",
            invalid_type_error: "Name is required.",
          })
          .min(1, "Name is required.")
          .max(50, "Name must be less than 50 characters."),
        role_type: z
          .string({
            required_error: "Role is required.",
            invalid_type_error: "Role is required.",
          })
          .min(1, "Role name is required.")
          .max(50, "Role must be less than 50 characters."),
        contact_number: z
          .number({
            required_error: "Contact is required.",
            invalid_type_error: "Contact is required.",
          })
          .min(1, "Contact is required.")
          .max(9, "Contact must be less than 9 characters."),
        contact_email: z
          .string({
            required_error: "Email is required.",
            invalid_type_error: "Email is required.",
          })
          .email()
          .max(50, "Email must be less than 50 characters."),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SocietyProfile>({
    resolver: zodResolver(schema),
  });
  const {
    fields: amenityFields,
    append: amenitydAppend,
    remove: amenityRemove,
  } = useFieldArray({ control, name: "amenities" });

  const {
    fields: commiteeFields,
    append: commiteedAppend,
    remove: commiteeRemove,
  } = useFieldArray({ control, name: "commitee_members" });

  const submitData = (data: SocietyProfile) => {
    console.log(data);
  };

  return (
    <div className="card">
      <div className="header header-society">
        <h4>Set Society Profile</h4>
      </div>
      <form id="society-profile" onSubmit={handleSubmit(submitData)}>
        <div className="body demo-card">
          <div className="header-society">
            {/* <label>Society Details</label> */}
          </div>
          <div className="row clearfix">
            <div className="body">
              <div className="media">
                <div className="media-left m-r-15">
                  <div className="img-pos">
                    {file && (
                      <span className="close" onClick={() => removeImage()}>
                        <i className="fa fa-times-circle-o"></i>
                      </span>
                    )}
                    <img src={file} width={140} />
                  </div>
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
                  <input
                    type="file"
                    id="filePhoto"
                    className="sr-only"
                    {...register("society_photo")}
                    onChange={handleChange}
                  />
                  <ul className="parsley-errors-list filled">
                    <li className="parsley-required">
                      {errors.society_photo && errors.society_photo.message}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header header-wings">
            <label className="required-field">Amenities</label>
            <i className="fa fa-plus" onClick={() => amenitydAppend({})}></i>
          </div>
          {amenityFields.map((field, index) => {
            const errorFormamenity_name =
              errors?.amenities?.[index]?.amenity_name;
            const errorFormamenity_type =
              errors?.amenities?.[index]?.amenity_type;
            const errorFormpayment_type =
              errors?.amenities?.[index]?.payment_type;
            const errorFormpayment_charge =
              errors?.amenities?.[index]?.payment_charge;
            return (
              <>
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Amenity Name</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          {...register(
                            `amenities.${index}.amenity_name` as const
                          )}
                        />
                      </div>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormamenity_name?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Free/Paid</label>
                      <select
                        className="form-control show-tick"
                        {...register(
                          `amenities.${index}.amenity_type` as const
                        )}
                      >
                        <option value=""></option>
                        <option value="1">Free</option>
                        <option value="2">Paid</option>
                      </select>
                      <ul className="parsley-errors-list filled mt-0">
                        <li className="parsley-required">
                          {errorFormamenity_type?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Per Day/Hour</label>
                      <select
                        className="form-control show-tick"
                        {...register(
                          `amenities.${index}.payment_type` as const
                        )}
                      >
                        <option value=""></option>
                        <option value="1">Per day</option>
                        <option value="2">Per Hour</option>
                      </select>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormpayment_type?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12" key={field.id}>
                    <div className="form-group">
                      <label className="required-field">Charges</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rs.</span>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          {...register(
                            `amenities.${index}.payment_charge` as const
                          )}
                        />
                      </div>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormpayment_charge?.message ?? <>&nbsp;</>}
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
                            onClick={() => amenityRemove(index)}
                          ></i>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="header header-wings">
            <label className="required-field">Commitee members</label>
            <i className="fa fa-plus" onClick={() => commiteedAppend({})}></i>
          </div>
          {commiteeFields.map((field, index) => {
            const errorFormember_name =
              errors?.commitee_members?.[index]?.member_name;
            const errorFormrole_type =
              errors?.commitee_members?.[index]?.role_type;
            const errorFormcontact_number =
              errors?.commitee_members?.[index]?.contact_number;
            const errorFormcontact_email =
              errors?.commitee_members?.[index]?.contact_email;
            return (
              <>
                <div className="row clearfix">
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Member name</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          {...register(
                            `commitee_members.${index}.member_name` as const
                          )}
                        />
                      </div>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormember_name?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-2 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Role</label>
                      <select className="form-control show-tick">
                        <option value=""></option>
                        <option value="1">Free</option>
                        <option value="2">Paid</option>
                      </select>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormrole_type?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Contact</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(
                          `commitee_members.${index}.contact_number` as const
                        )}
                      />
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormcontact_number?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(
                          `commitee_members.${index}.contact_email` as const
                        )}
                      />
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorFormcontact_email?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  {index > 0 && (
                    <div
                      className="col-lg-1 col-md-6 col-sm-12 wing "
                      key={field.id}
                    >
                      <div className="form-group">
                        <div className="input-group-append amenities_trash">
                          <i
                            className="fa fa-trash-o  mr-3"
                            onClick={() => commiteeRemove(index)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  )}
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
