import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adm_header.css";
import logo from "../../imgs/Vector.svg";
import search_icon from "../../imgs/search_icon.svg";
import toggler_icon from "../../imgs/toggler_menu_icon.svg";
import adm_gear from "../../imgs/gear-fill.svg";

export default function AdmHeader() {
  const [display, openAndClose] = useState("none");

  function navbarToggler() {
    if (
      document.querySelector("#adm-toggler-container").style.display === "block"
    ) {
      openAndClose(() => {
        document.querySelector("#adm-toggler-container").style.display = "none";
      });
    } else {
      openAndClose(() => {
        document.querySelector("#adm-toggler-container").style.display =
          "block";
      });
    }
  }

  return (
    <header id="adm-header-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" id="logo" />
        </Link>
      </div>
      <div className="search-container">
        <input type="search" id="search-input" name="search-input" />
        <button id="search-icon-btn">
          <img src={search_icon} alt="search icon" />
        </button>
      </div>
      <div id="adm-profile">
        <p>adm423432</p>
        <div id="adm-gear-icon">
          <img onClick={navbarToggler} src={adm_gear} alt="adm gear" />
        </div>
      </div>
    </header>
  );
}

/*
  <nav id="adm-nav-container">
        <ul id="adm-nav-list">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SALES</a>
          </li>
          <li>
            <a href="#">RECORDS</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
*/
