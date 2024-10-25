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
        name: z
          .string({
            required_error: "Amenity is required.",
            invalid_type_error: "Amenity is required.",
          })
          .min(1, "Amenity name is required.")
          .max(50, "Amenity name must be less than 50 characters."),
        amenit_type: z
          .string({
            required_error: "Amenity type is required.",
            invalid_type_error: "Amenity type is required.",
          })
          .min(1, "Amenity type name is required.")
          .max(50, "Amenity type must be less than 50 characters."),
        payment_type: z
          .string({
            required_error: "Amenity type is required.",
            invalid_type_error: "Amenity type is required.",
          })
          .min(1, "Amenity type name is required.")
          .max(50, "Amenity type must be less than 50 characters."),
        payment_charge: z
          .number({
            required_error: "This is required.",
            invalid_type_error: "This is required.",
          })
          .min(1)
          .max(20000000),
      })
    ),
    commitee_member: z.array(
      z.object({
        name: z
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
            required_error: "Contact number is required.",
            invalid_type_error: "Contact number is required.",
          })
          .min(1, "Contact number is required.")
          .max(50, "Contact number must be less than 50 characters."),
        contact_email: z
          .string({
            required_error: "Contact email is required.",
            invalid_type_error: "Contact email is required.",
          })
          .min(1, "Contact email is required.")
          .max(50, "Contact email must be less than 50 characters."),
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

  const { fields, append, remove } = useFieldArray({
    name: "amenities",
    control,
  });

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
            <i className="fa fa-plus" onClick={() => append({})}></i>
          </div>

          {fields.map((field, index) => {
            const errorForamenity_name =
              errors?.amenities?.[index]?.amenity_name;
            const errorForamenit_type = errors?.amenities?.[index]?.amenit_type;
            const errorForpayment_charge =
              errors?.amenities?.[index]?.payment_charge;
            return (
              <>
                <div className="row clearfix">
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Amenity name</label>
                      <div className="input-group">
                        <div className="custom-file">
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
                            {errorForamenity_name?.message ?? <>&nbsp;</>}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Free/Paid</label>
                      <select
                        className="form-control show-tick m-b-10"
                        {...register("amenit_type")}
                      >
                        <option value=""></option>
                        <option value="1">Free</option>
                        <option value="2">Paid</option>
                      </select>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorForamenit_type?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing"
                    key={field.id}
                  >
                    <div className="form-group">
                      <label className="required-field">Per day/Per Hour</label>
                      <select
                        className="form-control show-tick m-b-10"
                        {...register("payment_charge")}
                      >
                        <option value=""></option>
                        <option value="1">Per day</option>
                        <option value="2">Per Hour</option>
                      </select>
                      <ul className="parsley-errors-list filled">
                        <li className="parsley-required">
                          {errorForpayment_charge?.message ?? <>&nbsp;</>}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 wing "
                    key={field.id}
                  >
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
