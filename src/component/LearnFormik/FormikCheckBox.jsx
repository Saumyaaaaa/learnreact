import { Field } from "formik";
import React from "react";

const FormikCheckBox
 = ({ name, label, onChange, required, ...props }) => {
  // props={placeholder:"firstName",style:{backgroundCOlor:"red"}}

  return (
    <>
      <div>
        <Field name={name}>
          {({ field, form, meta }) => {
            return (
              <>
                <div>
                  <label htmlFor={name}>
                    {label}
                    {required ? <span style={{ color: "red" }}>*</span> : null}
                  </label>
                  <input
                    {...field}
                    {...props}
                    type="checkbox"
                    id={name}
                    // checked={isMarried === true}
                    // onChange={(e) => {
                    //   setIsMarried(e.target.checked);
                    // }}
                    
                    onChange={onChange ? onChange : field.onChange}
                    checked={meta.value}
                  />
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              </>
            );
          }}
        </Field>
      </div>
    </>
  );
};

export default FormikCheckBox
;
