import React, { useState } from "react";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <section className="bg-black">
        <div className="pt-32 pb-20 ">
          <h1 className="text-white text-center md:text-7xl text-5xl font-bold">
            Get In Touch
          </h1>
          <div className="flex flex-wrap text-center text-white mt-11">
            <div className="w-full lg:w-1/3 mb-5">
              <div>
                <i className="fa-solid fa-location-dot fs-2"></i>
                <p className="fw-bold mt-3">Address</p>
                <h6>Egypt-Al-Sharqia-Zagazig</h6>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mb-5">
              <div>
                <i className="fa-solid fa-phone fs-2"></i>
                <p className="fw-bold mt-3">Phone</p>
                <h6>+201095435168</h6>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mb-5">
              <div>
                <i className="fa-regular fa-envelope fs-2"></i>
                <p className="fw-bold mt-3">Email</p>
                <h6>Bbasemsaid@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className="mt-7 pt-10">
            <h1 className="text-white text-center text-5xl font-bold">
              Send Message
            </h1>
            <form className="max-w-md mx-auto mt-6">
              <div className="relative z-0 w-[90%] mx-auto md:w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter Your Name
                </label>
              </div>
              <div className="relative z-0 w-[90%] mx-auto md:w-full mb-5 group">
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="age"
                  className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter Your Age
                </label>
              </div>
              <div className="relative z-0 w-[90%] mx-auto md:w-full mb-5 group">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Leave a comment...
                </label>
              </div>
              <div className="text-center">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0 ">
                    Send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
