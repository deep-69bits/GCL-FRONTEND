import React from "react";
import Title from "./Text/Title";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-white">
      <Image
        className="w-full max-w-[2000px] absolute z-0"
        src="/bg2.svg"
        alt=""
        width={100}
        height={100}
      />
      <div className=" pt-20 z-10  pb-20 flex w-full flex-col items-center">
        <Title>GET IN TOUCH</Title>
        <div className="text-[#E6FF00] pt-8 pb-4">
          We’d love to hear from you. Please fill out this form.
        </div>
        <div className="lg:w-1/2 w-full lg:px-0 px-4 flex flex-col gap-6 ">
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input
                className=" bg-gray-200 focus:outline-none bg-opacity-15  rounded-lg py-2 px-2"
                placeholder="First Name"
                type="text"
                name="firstName"
                id=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className=" bg-gray-200 focus:outline-none bg-opacity-15  rounded-lg py-2 px-2"
                placeholder="Last Name"
                name="lastName"
                id=""
              />
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-1 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">Email</label>
              <input
                className=" bg-gray-200 focus:outline-none bg-opacity-15  rounded-lg py-2 px-2"
                placeholder="you@company.com"
                type="text"
                name="firstName"
                id=""
              />
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-1 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">Phone number</label>
              <input
                className=" bg-gray-200 focus:outline-none bg-opacity-15  rounded-lg py-2 px-2"
                placeholder="+1 (555) 000-0000"
                type="text"
                name="firstName"
                id=""
              />
            </div>
          </div>

          <div className="grid grid-flow-row grid-cols-1 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">Message</label>
              <textarea
                className=" bg-gray-200 focus:outline-none bg-opacity-15  rounded-lg py-2 px-2"
                rows={8}
                name="firstName"
                id=""
              />
            </div>
          </div>

          <button className="w-full font-bold bg-gradient-to-r from-[#ED00B8] to-[#00D2D4] text-center py-3 rounded-md">
            Send message
          </button>

          <div className="flex my-2 gap-14 justify-center ">
            <Image
              src={"/socials/Vector(21).svg"}
              alt=""
              width={40}
              height={40}
            />
            <Image
              src={"/socials/Vector(22).svg"}
              alt=""
              width={40}
              height={40}
            />
            <Image
              src={"/socials/Vector(23).svg"}
              alt=""
              width={40}
              height={40}
            />
          </div>

          <div className="text-center">
            Follow us on our social media channels for the latest updates,
            exclusive content, and behind-the-scenes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
