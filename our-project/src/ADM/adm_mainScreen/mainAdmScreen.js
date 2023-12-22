import "./mainAdmScreen.css";
import AdmHeader from "../adm_header/adm_header";
import AdmToggler from "../adm_toggler/adm_toggler";
import AdmRodape from "../adm_rodape/index";
import userIcon from "./mainIcons/userIcon.svg";
import discIcon from "./mainIcons/discIcon.svg";
import saleIcon from "./mainIcons/saleIcon.svg";

export default function AdmMainScreen() {
  const users = 1243;
  const sales = 345;
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
          <div className="adm-block block-user">
            <img src={userIcon} alt="número de usuários" />
            <p>
              número de usuários registrados: <span>{users}</span>
            </p>
          </div>
          <div className="adm-block block-album">
            <img src={discIcon} alt="número de álbums" />
            <p>
              número de álbums registrados: <span>{albums}</span>
            </p>
          </div>
          <div className="adm-block block-vendas">
            <img src={saleIcon} alt="número de vendas" />
            <p>
              número de vendas registradas: <span>{sales}</span>
            </p>
          </div>
        </div>
      </div>
      <AdmRodape />
    </>
  );
}
