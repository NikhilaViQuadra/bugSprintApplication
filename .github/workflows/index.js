import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { normalTextBox: "" },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="normalTextBox">Text Area</label>
      <input
        id="text"
        name="text"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.normalTextBox}
      />
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
