import React from "react";
import style from "./about.module.css";
import imgbasem from "../../assets/basem.jpg";

export default function About() {
  return (
    <>
      <section className="bg-black">
        <div className="mt-7 py-36">
          <h1 className="text-white text-center text-5xl">About Me</h1>
          <div className="flex flex-wrap justify-center items-center w-[80%] mx-auto mt-6">
            <div className="w-full md:w-1/4 mb-3">
              <img
                src={imgbasem}
                alt="photo"
                className="rounded-full  w-64 h-64 mx-auto"
              ></img>
            </div>
            <div className="w-full md:w-3/4">
              <p className="text-white ">
                I'm Basem Said. I am a dedicated and aspiring Frontend Developer
                with a strong passion for web development, specializing in
                React.js. Eager to expand my skills and knowledge, I
                continuously seek out learning opportunities and hands-on
                projects. My goal is to contribute to innovative web
                applications that provide exceptional user experiences. I am on
                a journey to becoming a Front end Developer, driven by curiosity
                and a commitment to excellence.
              </p>
              <div className="flex items-center justify-center text-white flex-wrap">
                <p className="border rounded py-2 px-3 me-2 mt-5">HTML</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">CSS</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">JAVASCRIPT</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">REACT.JS</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">TAILWIND</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">REDUX</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">
                  REACT ROUTER DOM
                </p>
                <p className="border rounded py-2 px-3 me-2 mt-5">CLEAN CODE</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">GIT</p>
                <p className="border rounded py-2 px-3 me-2 mt-5">GITHUB</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
