import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[44%] h-[100vh] bg-red-400 flex flex-col justify-evenly items-start">
      <div className="bg-blue-400 h-[150px]">
        <span>CONTACT US</span>
        <div>
          <span>HAVE QUESTIONS?</span>
          <span>GET IN TOUCH</span>
        </div>
      </div>
      <div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <textarea name="" id=""></textarea>
        </div>
      </div>
      <button>GET IN TOUCH</button>
    </div>
  );
};

export default ContactForm;
