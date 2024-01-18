import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="container pt-32">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
          <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting
            form
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <AiOutlineMail size={30} />
            taiwooloyede49@gmail.com
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} />
            +2348079675840
          </div>
        </div>
        <div className="space-y-8">
<div className="flex flex-col gap-1" data-aos="zoom-in-up">
    <label htmlFor="name">Name</label>
    <input type="text" id='name' className="h-[40px] bg-transparent border border-green-500 "/>
</div>
<div className="flex flex-col gap-1" data-aos="zoom-in-up">
    <label htmlFor="email">Email</label>
    <input id='email' className="bg-transparent border h-[40px] border-green-500"/>
</div>
<div className="flex flex-col gap-1" data-aos="zoom-in-up">
    <label htmlFor="msg">Message</label>
<textarea placeholder="Enter message here" id='msg' rows={8} className="h-[120px]  bg-transparent border border-green-500"></textarea>
</div>
<button className="bg-green-500 p-2 px-6" data-aos="zoom-in-up">Send</button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
