// const root_container = document.querySelector("#root");
import "./cadastrarAlbum.css";
// import Header from "../componentsCopy/header/header.js";
import Toggler from "../componentsCopy/toggler/toggler.js";
import Rodape from "../componentsCopy/rodape/index.js";

export default function CadastrarAlbums() {
  return (
    <>
      <Toggler />
      <div id="user-register-container-aa">
        <div id="registerHeader-aa">
          <h1 id="registerTitle-aa">Cadastro</h1>
        </div>

        <form action="" id="user-form-aa">
          <div id="userDataContainer-aa">
            <h1 id="userData-aa">Dados Cadastrais de Bandas</h1>
          </div>
          <div id="form-container-aa">
            <div className="item1-aa">
              <label className="label-tag-aa" for="name">
                Nome da banda:
              </label>
              <input
                className="input-field-aa"
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="item2-aa">
              <label className="label-tag-aa" for="e-mail">
                País de origem:
              </label>
              <input
                className="input-field-aa"
                type="text"
                id="country"
                name="country"
              />
            </div>

            <div className="item3-aa">
              <label className="label-tag-aa" for="phone">
                Data de criação:
              </label>
              <input
                className="input-field-aa"
                type="date"
                id="starterDate"
                name="starterDate"
              />
            </div>

            <div className="item4-aa">
              <label className="label-tag-aa" for="userDate">
                Gênero musical:
              </label>
              <input
                className="input-field-aa"
                type="text"
                name="style"
                id="style"
              />
            </div>
          </div>
          <button id="form-btn-aa">CONFIRMAR</button>
        </form>
      </div>
      <Rodape />
    </>
  );
}

// ReactDOM.render(
//   <div>
//     <Header />
//     <RegisterHeader />
//     <UserForm />
//     <Footer />
//   </div>,
//   root_container
// );
