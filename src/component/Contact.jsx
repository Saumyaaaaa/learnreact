import React from "react";
import { useSearchParams } from "react-router-dom";

const Contact = ({ phone }) => {
  let [query] = useSearchParams();
  console.log(query.get("age"));
  console.log(query.get("isMarried"));
  //everything in query are in string
  return <div>this is contact page and my phone number is {phone}</div>;
};

export default Contact;
