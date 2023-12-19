import "./credit_card_form.css";
import Header from "../componentsCopy/header/header.js";
import Toggler from "../componentsCopy/toggler/toggler.js";
import Rodape from "../componentsCopy/rodape/index.js";
//262835 bg color

export default function CreditCardForm() {
  return (
    <>
      <Header />
      <Toggler />
      <div id="payment-data-container">
        <ol aria-label="payment process" id="check-box-payment-data">
          <li>1. Selecione a Forma de Pagamento</li>
          <li>2. Inserir Dados</li>
          <li>3. Confirmação do Pedido</li>
        </ol>
        <form aria-label="credit card input fields" id="credit-card-form">
          <div id="payment-title-data">
            <h1>Dados do Cartão</h1>
          </div>

          <div id="credit-card-fields">
            <div className="card-input-container field-1">
              <label for="card-number">Número do Cartão</label>
              <input
                className="card-inputs"
                type="text"
                id="card-number"
                name="card-number"
              />
            </div>

            <div className="card-input-container field-2">
              <label for="card-name">Nome do Cartão</label>
              <input
                className="card-inputs"
                type="text"
                id="card-name"
                name="card-name"
              />
            </div>

            <div className="card-input-container field-3">
              <label for="cpf">CPF / CNPJ do Proprietário</label>
              <input className="card-inputs" type="text" id="cpf" name="cpf" />
            </div>

            <div className="card-input-container field-4">
              <label for="card-mm-yyyy">Vencimento (mm/yyyy)</label>
              <input
                className="card-inputs"
                type="text"
                id="card-mm-yyyy"
                name="card-mm-yyyy"
              />
            </div>

            <div className="card-input-container field-5">
              <label for="security-code">Código de Segurança</label>
              <input
                className="card-inputs"
                type="text"
                id="security-code"
                name="security-code"
              />
            </div>
          </div>
          <button id="form-btn">CONFIRMAR</button>
        </form>
      </div>
      <Rodape />
    </>
  );
}
