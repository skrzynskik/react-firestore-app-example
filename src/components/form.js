import { Formik } from "formik";
import { useEffect, useState } from "react";
import { firebaseSet } from "../services/firebaseSet";

export default function Form() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Formik
          initialValues={{ hotelName: "", reportMessage: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setShouldRefresh(true);
            setTimeout(() => {
              firebaseSet({
                hotel: values.hotelName,
                message: values.reportMessage,
              });
              setSubmitting(false);
              setShouldRefresh(false);
            }, 400);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Add a report: </h3>
              <input
                type="string"
                name="hotelName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hotelName}
                placeholder="Hotel Name"
                className="input-group-text my-2"
              />
              <input
                type="string"
                name="reportMessage"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reportMessage}
                placeholder="Report Message"
                className="input-group-text mb-2"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-success"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
