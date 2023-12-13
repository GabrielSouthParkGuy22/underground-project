import "./adm.css";
import AdmHeader from "./adm_header/adm_header.js";
import AdmToggler from "./adm_toggler/adm_toggler.js";
import AdmRodape from "./adm_rodape/index.js";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Adm() {
  const [usuario, setUsuarios] = useState([]);
  // function startElements() {
  //   console.log("clicked!");
  //   const userElements = document.querySelectorAll(".nameContainer");
  //   const infoElements = document.querySelectorAll(".userInfoContainer");
  //   const spanIcon = document.querySelectorAll(".userSpanIcon");

  //   for (let i = 0; i < userElements.length; i++) {
  //     userElements[i].addEventListener("click", () => {
  //       if (infoElements[i].style.display === "block") {
  //         infoElements[i].style.display = "none";
  //         spanIcon[i].innerText = "+";
  //       } else {
  //         infoElements[i].style.display = "block";
  //         spanIcon[i].innerText = "-";
  //       }
  //     });
  //   }
  // }

  async function carregarTodos() {
    try {
      const dados = await axios.get(`http://localhost:5001/cadastros/usuarios`);
      setUsuarios(dados.data);
      console.log(usuario);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    carregarTodos();
  }, []);

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
            {/* <button id="start-btn" onClick={startElements}>
              START
            </button> */}
            <li className="userContainer">
              <p className="nameContainer">
                Usuarios Cadastrados: <span className="userSpanIcon">+</span>
              </p>

              {usuario.map((usuario) => (
                <ul className="userInfoContainer">
                  <li>
                    <span>Nome: {usuario.NOME} </span>
                  </li>
                  <li>
                    <span>Cpf: {usuario.CPF} </span>
                  </li>
                  <li>
                    <span>Email: {usuario.EMAIL} </span>
                  </li>
                  <li>
                    <span>Senha: {usuario.senha} </span>
                  </li>
                  <li>
                    <span>Cidade: </span>
                  </li>
                  <li>
                    <span>Telefone: {usuario.TELEFONE} </span>
                  </li>

                  <hr />
                </ul>
              ))}
            </li>

            <li className="userContainer">
              <p className="nameContainer">
                user86875342 <span className="userSpanIcon">+</span>
              </p>

              {/* <ul className="userInfoContainer">
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
              </ul> */}
            </li>

            <li className="userContainer">
              <p className="nameContainer">
                user12453532 <span className="userSpanIcon">+</span>
              </p>

              {/* <ul className="userInfoContainer">
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
              </ul> */}
            </li>

            <li className="userContainer">
              <p className="nameContainer">
                user47453890 <span className="userSpanIcon">+</span>
              </p>

              {/* <ul className="userInfoContainer">
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
              </ul> */}
            </li>
          </ul>
        </div>
      </div>
      <AdmRodape />
    </>
  );
}
