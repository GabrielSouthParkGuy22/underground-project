import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";



import logo from "./logo.svg";
// import user para 
import UserRegister from "./userRegister/userRegister.js";
import PageCadastro from "./pages/usuarioLogin/index.js";
import Payment from "./payment/payment.js";
import CreditCardForm from "./credit_card_form/credit_card_form.js";
import PaymentComplete from "./payment_complete/payment_complete.js";

// import albuns
import PageCompras from "./telaDeCompras/compras.js";
import AlbumTela from "./telaDeAlbums/albumScreen.js";
import TelaPrincipal from "./telaPrincipal/telaPrincipal.js";

//import Adm from "./ADM/adm.js";
import AdmMainScreen from "./ADM/adm_mainScreen/mainAdmScreen.js";
import AdmUsers from "./ADM/amd_users/admUsers.js";
import AdmAlbum from "./ADM/adm_registerAlbuns/admAlbum.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index                       element={<AdmMainScreen/>} />
          <Route path="/"                    element={<AdmMainScreen />} />
          <Route path="/users"           element={<AdmUsers />} />
          <Route path="/albums"          element={<AdmAlbum />} />
          <Route path="/user/login"          element={<PageCadastro />} />
          <Route path="/user/registro"       element={<UserRegister />} />
          <Route path="/user/produtos"       element={<PageCompras />} />
          <Route path="/user/album"          element={<AlbumTela />} />
          <Route path="/user/home"           element={<TelaPrincipal />} />
          <Route path="/user/payment/1"      element={<Payment />} />
          <Route path="/user/payment/2"      element={<CreditCardForm />} />
          <Route path="/user/payment/3"      element={<PaymentComplete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
