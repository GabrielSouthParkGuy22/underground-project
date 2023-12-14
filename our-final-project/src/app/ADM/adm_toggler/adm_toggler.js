import "./adm_toggler.css";
import search_icon from "../../imgs/search_icon.svg";

export default function AdmToggler() {
  return (
    <div id="adm-toggler-container">
      <p>adm423432</p>
      <hr />
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
            <a href="#">Configurações</a>
          </li>
          <li>
            <a href="#">Usuários</a>
          </li>
          <li>
            <a href="#">Vendas</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
