import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-black border-t-2 border-blue-500 text-white text-center py-3">
        <div className="text-3xl">
          <Link
            className="pr-2 "
            to="https://www.linkedin.com/in/basem-said-468b7b274"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            className="pr-2"
            to="https://github.com/BasemSaid1"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </Link>

          <Link to="https://wa.me/01095435168" target="_blank">
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
        </div>
        <p className="text-white">
          Copyright©2024 <span className="text-red-600">Basem said</span> All
          Rights Reserved
        </p>
      </footer>
    </>
  );
}
