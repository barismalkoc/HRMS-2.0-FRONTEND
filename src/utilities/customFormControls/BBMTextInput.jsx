import { useField } from "formik";
import React from "react";
import { FormField } from "semantic-ui-react";
export default function BBMTextInput({ ...props }) {
  //console.log(props)
  const [field, meta] = useField(props);
  //console.log(meta)
  return (
    <FormField  error={meta.touched && !!meta.error}>
      <input {...field} {...props} />
    </FormField>
  );
}
