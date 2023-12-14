import "./payment_complete.css";
import Header from "../componentsCopy/header/header.js";
import Toggler from "../componentsCopy/toggler/toggler.js";
import Rodape from "../componentsCopy/rodape/index.js";

export default function PaymentComplete() {
  return (
    <>
      <Header />
      <Toggler />
      <div id="payment-complete-container">
        <ol aria-label="payment process" id="check-box-payment-complete">
          <li>1. Selecione a Forma de Pagamento</li>
          <li>2. Inserir Dados</li>
          <li>3. Confirmação do Pedido</li>
        </ol>

        <div aria-label="payment confirmed" id="payment-confirmed-box">
          <div id="payment-title-complete">
            <h1>Pedido e Pagamento Confirmados</h1>
          </div>

          <div id="payment-confirmed-msg">
            <p>Seu pedido foi realizado com sucesso.</p>
            <p>
              Em breve, você receberá um email com todos os detalhes do pedido.
            </p>
            <p>Pagamento Aprovado!</p>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}
