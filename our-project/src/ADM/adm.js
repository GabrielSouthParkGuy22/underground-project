import "./adm.css";
import AdmHeader from "./adm_header/adm_header.js";
import AdmToggler from "./adm_toggler/adm_toggler.js";
import AdmRodape from "./adm_rodape/index.js";

export default function Adm() {
  function startElements() {
    console.log("clicked!");
    const userElements = document.querySelectorAll(".nameContainer");
    const infoElements = document.querySelectorAll(".userInfoContainer");
    const spanIcon = document.querySelectorAll(".userSpanIcon");

    for (let i = 0; i < userElements.length; i++) {
      userElements[i].addEventListener("click", () => {
        if (infoElements[i].style.display === "block") {
          infoElements[i].style.display = "none";
          spanIcon[i].innerText = "+";
        } else {
          infoElements[i].style.display = "block";
          spanIcon[i].innerText = "-";
        }
      });
    }
  }

  return (
    <>
      <AdmHeader />
      <AdmToggler />
      <div id="user-data-container">
        <div id="user-data-title">
          <h1>Dados de Usuários</h1>
        </div>

        <div id="user-data-list-container">
          <ul id="user-data-list" aria-label="users-list">
            <button id="start-btn" onClick={startElements}>
              START
            </button>
            <li className="userContainer">
              <p className="nameContainer">
                user094324324 <span className="userSpanIcon">+</span>
              </p>

              <ul className="userInfoContainer">
                <li>
                  <span>Nome: </span>Rodrigo da Silva
                </li>
                <li>
                  <span>Idade: </span> 23 anos
                </li>
                <li>
                  <span>Email: </span> rodrigosilva2233@gmail.com
                </li>
                <li>
                  <span>Senha: </span> 9999009999AA
                </li>
                <li>
                  <span>Cidade: </span>São Paulo
                </li>
                <li>
                  <span>Endereço: </span>Rua Seyda Neen
                </li>
              </ul>
            </li>

            <li className="userContainer">
              <p className="nameContainer">
                user86875342 <span className="userSpanIcon">+</span>
              </p>

              <ul className="userInfoContainer">
                <li>
                  <span>Nome: </span>Rodrigo da Silva
                </li>
                <li>
                  <span>Idade: </span> 23 anos
                </li>
                <li>
                  <span>Email: </span> rodrigosilva2233@gmail.com
                </li>
                <li>
                  <span>Senha: </span> 9999009999AA
                </li>
                <li>
                  <span>Cidade: </span>São Paulo
                </li>
                <li>
                  <span>Endereço: </span>Rua Seyda Neen
                </li>
              </ul>
            </li>

            <li className="userContainer">
              <p className="nameContainer">
                user12453532 <span className="userSpanIcon">+</span>
              </p>

              <ul className="userInfoContainer">
                <li>
                  <span>Nome: </span>Rodrigo da Silva
                </li>
                <li>
                  <span>Idade: </span> 23 anos
                </li>
                <li>
                  <span>Email: </span> rodrigosilva2233@gmail.com
                </li>
                <li>
                  <span>Senha: </span> 9999009999AA
                </li>
                <li>
                  <span>Cidade: </span>São Paulo
                </li>
                <li>
                  <span>Endereço: </span>Rua Seyda Neen
                </li>
              </ul>
            </li>

            <li className="userContainer">
              <p className="nameContainer">
                user47453890 <span className="userSpanIcon">+</span>
              </p>

              <ul className="userInfoContainer">
                <li>
                  <span>Nome: </span>Rodrigo da Silva
                </li>
                <li>
                  <span>Idade: </span> 23 anos
                </li>
                <li>
                  <span>Email: </span> rodrigosilva2233@gmail.com
                </li>
                <li>
                  <span>Senha: </span> 9999009999AA
                </li>
                <li>
                  <span>Cidade: </span>São Paulo
                </li>
                <li>
                  <span>Endereço: </span>Rua Seyda Neen
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <AdmRodape />
    </>
  );
}
