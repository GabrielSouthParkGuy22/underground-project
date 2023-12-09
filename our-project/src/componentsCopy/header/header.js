import React, { useState } from "react";
import "./header.css";
import logo from "../../imgs/Vector.svg";
import search_icon from "../../imgs/search_icon.svg";
import toggler_icon from "../../imgs/toggler_menu_icon.svg";

export default function Header() {
  const [display, openAndClose] = useState("none");

  function navbarToggler() {
    if (
      document.querySelector("#toggler-container").style.display === "block"
    ) {
      openAndClose(() => {
        document.querySelector("#toggler-container").style.display = "none";
      });
    } else {
      openAndClose(() => {
        document.querySelector("#toggler-container").style.display = "block";
      });
    }
  }

  return (
    <header id="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" id="logo" />
      </div>
      <div className="search-container">
        <input type="search" id="search-input" name="search-input" />
        <button id="search-icon-btn">
          <img src={search_icon} alt="search icon" />
        </button>
      </div>
      <nav id="nav-container">
        <ul id="nav-list">
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
      <div id="toggler_icon">
        <img
          onClick={navbarToggler}
          id="toggler_btn"
          src={toggler_icon}
          alt="toggler icon"
        />
      </div>
    </header>
  );
}
