import "./toggler.css";
import search_icon from "../../imgs/search_icon.svg";

export default function Toggler() {
  return (
    <div id="toggler-container">
      <div className="search-container-toggler">
        <input
          type="search"
          id="search-input-toggler"
          name="search-input-toggler"
        />
        <button id="search-icon-btn-toggler">
          <img src={search_icon} alt="search icon" />
        </button>
      </div>
      <nav id="nav-container-toggler">
        <ul id="nav-list-toggler">
          <li id="teste2">
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
    </div>
  );
}
