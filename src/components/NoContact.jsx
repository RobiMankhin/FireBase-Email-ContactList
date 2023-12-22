import React from "react";

const NoContact = () => {
  return (
    <div className="flex gap-3 h-[60vh] items-center justify-center ">
      <div>
        <img src="public/contact.png" />
      </div>
      <h2 className="text-white text-lg font-semibold">Contact not found</h2>
    </div>
  );
};

export default NoContact;
