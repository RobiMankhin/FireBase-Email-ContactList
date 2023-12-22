import { collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { BiUserCircle, BiSolidTrash, BiEdit } from "react-icons/bi";
import { db } from "../config/firebase";
import AddUpdate from "./AddUpdate";
import CustomHook from "../Hooks/CustomHook";

const ContactCard = ({ contact }) => {
  const { isopen, isClose, onOpen } = CustomHook();
  const deleteContact = async (id) => {
    try {
      const contactRef = collection(db, "ourcontacts");
      await deleteDoc(doc(contactRef, id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="p-2 mt-2 rounded-md bg-yellow-100 flex justify-between items-center">
        <div className=" flex gap-1">
          <BiUserCircle className="text-4xl text-orange-500" />
          <div>
            <h2 className="text-lg font-medium">{contact.name}</h2>
            <p className="text-sm font-medium">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl gap-2">
          <BiEdit onClick={onOpen} className="cursor-pointer" />
          <BiSolidTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange-500"
          />
        </div>
      </div>
      <AddUpdate onUpdate isopen={isopen} contact={contact} isClose={isClose} />
    </>
  );
};

export default ContactCard;
