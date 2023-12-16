import "./index.css";
import "../../index.css";
import { useState } from "react";
import Header from "../../componentsCopy/header/header";
import Rodape from "../../componentsCopy/newslatter";
import axios from "axios";
export default function PageCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function cadastrar() {
    try {
      const logado = await axios.post('http://localhost:5001/usuario/login', {
        email : email,
        senha: senha
      })
      setErro(logado.data)
    } catch (error) {
      setErro(error.message)
    }
  }

  // verifica se o input está nulo ou undefined
  function Validacao(string) {
    try {
      if (!string || string === undefined) {
        throw new Error("Campo inválido, preencha novamente!");
      }
    } catch (error) {
      setErro(error.message);
    }
  }

  return (
    <main classname="pageUserRegister">
      <Header />
      <div className="lineLogin">
        <h1>Login</h1>
      </div>

      <div className="page">
        <div className="containerLogin">
          <div className="lineText">
            <h1>Preencha as informações</h1>
          </div>
          <div className="containerInputs">
            <label id="nameInput">Email</label>
            <input
              id="senha"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o e-mail"
            />

            <label id="nameInput">Senha</label>
            <input
              id="email"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a senha"
            />
          </div>
          <div className="containerButton">
            <button onClick={cadastrar} id="cadastroUser">
              Cadastre-se
            </button>{" "}
            {erro}
          </div>
        </div>
      </div>
      <Rodape />
    </main>
  );
}
