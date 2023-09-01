import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium ">Taiwo</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="MenuLink">Home</li>
          <li className="MenuLink">Projects</li>
          <li className="MenuLink">Skills</li>
          <li className="MenuLink">Testimonials</li>
          <li className="MenuLink">Contacts</li>
        </ul> 
        <AiOutlineMenu className="md:hidden" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
