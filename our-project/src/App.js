import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import UserRegister from "./userRegister/userRegister.js";
import PageCadastro from "./pages/usuarioLogin/index.js";
import Payment from "./payment/payment.js";
import CreditCardForm from "./credit_card_form/credit_card_form.js";
import PaymentComplete from "./payment_complete/payment_complete.js";
//import Adm from "./ADM/adm.js";
import AdmMainScreen from "./ADM/adm_mainScreen/mainAdmScreen.js";
import AdmUsers from "./ADM/amd_users/admUsers.js";
import AdmAlbum from "./ADM/adm_registerAlbuns/admAlbum.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AdmMainScreen />} />
          <Route path="/" element={<AdmMainScreen />} />
          <Route path="/users" element={<AdmUsers />} />
          <Route path="/albums" element={<AdmAlbum />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
