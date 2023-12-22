import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import * as yup from "yup";

const validation = yup.object().shape({
  name: yup.string().required("Valid Name is required"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Valid Email is required"),
});

const AddUpdate = ({ isopen, isClose, onUpdate, contact }) => {
  const addContact = async (values) => {
    try {
      const contactRef = collection(db, "ourcontacts");
      await addDoc(contactRef, values);
      isClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updatedContact = async (values, id) => {
    try {
      const contactRef = doc(db, "ourcontacts", id);
      await updateDoc(contactRef, values);
      isClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isopen={isopen} isClose={isClose}>
        <Formik
          validationSchema={validation}
          initialValues={
            onUpdate
              ? { name: contact.name, email: contact.email }
              : { name: "", email: "" }
          }
          onSubmit={(values) => {
            console.log(values);
            onUpdate ? updatedContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="name">Name</label>
              <Field className="h-9 border rounded-lg px-2" name="name" />
              <div className="text-red-700">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Email</label>
              <Field className="h-9 border rounded-lg px-2" name="email" />
              <div className="text-red-700">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="self-end font-semibold  bg-white rounded-lg py-1 px-2 border-[1px] border-black hover:bg-orange-400"
            >
              {onUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdate;
