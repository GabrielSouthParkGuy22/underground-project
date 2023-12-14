import "./index.css";

import Newslatter from "../adm_newslatter/index.js";
export default function AdmRodape() {
  return (
    <footer className="adm-footer">
      <Newslatter />
      <div className="adm-contatos">
        <label id="titulo-contatos">Contatos</label>:<p>tel: 11 99999-9999</p>
        <p>email: undergroundmusicofficial@gmail.com</p>
      </div>
    </footer>
  );
}
