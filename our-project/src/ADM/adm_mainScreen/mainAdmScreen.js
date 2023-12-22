import { Link } from "react-router-dom";
import "./mainAdmScreen.css";
import AdmHeader from "../adm_header/adm_header";
import AdmToggler from "../adm_toggler/adm_toggler";
import AdmRodape from "../adm_rodape/index";
import userIcon from "./mainIcons/userIcon.svg";
import discIcon from "./mainIcons/discIcon.svg";

export default function AdmMainScreen() {
  const users = 1243;
  const albums = 678;

  return (
    <>
      <AdmHeader />
      <AdmToggler />
      <div id="global-container">
        <div id="main-adm-title">
          <h1>Tela Principal</h1>
        </div>
        <div id="main-adm-container">
          <Link className="link-block" to="/users">
            <div className="adm-block block-user">
              <img src={userIcon} alt="número de usuários" />
              <p>
                número de usuários registrados: <span>{users}</span>
              </p>
            </div>
          </Link>

          <Link className="link-block" to="/albums">
            <div className="adm-block block-album">
              <img src={discIcon} alt="número de álbums" />
              <p>
                número de álbums registrados: <span>{albums}</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      <AdmRodape />
    </>
  );
}
