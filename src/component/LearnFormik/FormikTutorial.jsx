import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikRadio from "./FormikRadio";
import FormikSelect from "./FormikSelect";
import FormikCheckBox from "./FormikCheckBox";
import FormikTextArea from "./FormikTextArea";

const FormikTutorial = () => {
  let initialValues = {
    fullName: "",
    email: "",
    password: "",
    gender: "female",
    country: "nepal",
    isMarried: false,
    description: "",
    phoneNumber: 0,
    age: 0,
  };
  let onSubmit = (values) => {
    console.log(values);
  };
  let validationSchema = yup.object({
    fullName: yup.string().required("Full Name Field is Required"),
    email: yup.string().required("Email is Required"),
    password: yup.string().required("Password Field is Required"),
    gender: yup.string().required("Gender Field is Required"),
    country: yup.string().required("Country Field is Required"),
    isMarried: yup.boolean(),
    description: yup.string(),
    phoneNumber: yup.number().required("Phone Number is Required"),
    age: yup.number().required("Age is Required"),
  });

  let genderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  let countryOptions = [
    {
      label: "Select Country",
      value: "",
      disabled: true,
    },
    { label: "Nepal", value: "nepal" },
    { label: "India", value: "india" },
    { label: "America", value: "america" },
    { label: "German", value: "german" },
    { label: "Uk", value: "uk" },
    { label: "Korea", value: "korea" },
  ];

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <FormikInput
                  name="fullName"
                  label="fullName"
                  type="text"
                //   onChange={(e) => {
                //     formik.setFieldValue("fullName", e.target.value);
                //   }}
                  required={true}
                />
                <FormikInput
                  name="email"
                  label="Email"
                  type="email"
                //   onChange={(e) => {
                //     formik.setFieldValue("email", e.target.value);
                //   }}
                  required={true}
                />
                <FormikInput
                  name="password"
                  label="Password"
                  type="password"
                //   onChange={(e) => {
                //     formik.setFieldValue("password", e.target.value);
                //   }}
                  required={true}
                />
                <FormikRadio
                  name="gender"
                  label="Gender"
                //   onChange={(e) => {
                //     formik.setFieldValue("gender", e.target.value);
                //   }}
                  required={true}
                  options={genderOptions}
                />
                <FormikSelect
                  name="country"
                  label="Country"
                //   onChange={(e) => {
                //     formik.setFieldValue("country", e.target.value);
                //   }}
                  required={true}
                  options={countryOptions}
                />
                <FormikCheckBox
                  name="isMarried"
                  label="Is Married"
                //   onChange={(e) => {
                //     formik.setFieldValue("isMarried", e.target.checked);
                //   }}
                ></FormikCheckBox>
                <FormikTextArea
                  name="description"
                  label="Description"
                //   onChange={(e) => {
                //     formik.setFieldValue("description", e.target.value);
                //   }}
                ></FormikTextArea>
                <FormikInput
                  name="age"
                  label="Age"
                  type="number"
                //   onChange={(e) => {
                //     formik.setFieldValue("age", e.target.value);
                //   }}
                  required={true}
                />
                <FormikInput
                  name="phoneNumber"
                  label="Phone Number"
                  type="number"
                //   onChange={(e) => {
                //     formik.setFieldValue("phoneNumber", e.target.value);
                //   }}
                  required={true}
                />

                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default FormikTutorial;
