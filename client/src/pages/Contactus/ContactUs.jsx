import React from "react";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="w-[100%] py-32 ">
      <div>
        <ContactMap />
      </div>
      <div className="flex py-4 justify-between items-center">
        <img className="w-[55%] h-[600px]" src={require('../../assets/contact/1631782156296.jpeg')} alt="" />
        <ContactForm/>
      </div>
    </div>
  );
};

export default ContactUs;
