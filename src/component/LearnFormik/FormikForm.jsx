import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckBox from "./FormikCheckBox";

const FormikForm = () => {
  //each field has 3 things
  //value , error , touch
  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
    country: "",
    gender: "",
    isMarried: false,
  };
  let onSubmit = (value, other) => {
    console.log(value);
  };
  //validation will run only if
  //onChange event is fire
  //onBlur(touched) event is fire
  //onSubmit event is fire

  //

  let validationSchema = yup.object({
    firstName: yup.string().required("First Name Field is Required"),
    lastName: yup.string().required("Last Name Field is Required"),
    description: yup.string().required("Description Field is Required"),
  });

  let genderOption = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  let countryOption = [
    { label: "Nepal", value: "nepal" },
    { label: "India", value: "india" },
    { label: "America", value: "america" },
    { label: "German", value: "german" },
    { label: "Uk", value: "ukd" },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <br />
              <FormikInput
                name="firstName"
                label="First Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("firstName", e.target.value);
                }}
                placeholder="firstName"
                required={true}
              ></FormikInput>
              <FormikInput
                name="lastName"
                label="Last Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("lastName", e.target.value);
                }}
                placeholder="lastName"
                required={true}
              ></FormikInput>
              <FormikTextArea
                name="description"
                label="Description"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                }}
                placeholder="description"
                required={true}
              ></FormikTextArea>
              <FormikSelect
                name="country"
                label="Country"
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                required={true}
                options={countryOption}
              ></FormikSelect>
              <FormikRadio
                name="gender"
                label="Gender"
                onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }}
                required={true}
                options={genderOption}
              ></FormikRadio>
              <br />
              <FormikCheckBox
                name="isMarried"
                label="Is Married"
                onChange={(e) => {
                  formik.setFieldValue("isMarried", e.target.checked);
                }}
              ></FormikCheckBox>
              <br />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikForm;

/*
meta={
  value:"",
  error:"First Name is Required",
  touched:false
}
 */
