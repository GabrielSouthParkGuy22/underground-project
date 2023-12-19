import "./payment.css";
import Header from "../componentsCopy/header/header.js";
import Toggler from "../componentsCopy/toggler/toggler.js";
import down_arrow from "../imgs/down-arrow.svg";
import visa from "./imgs_creditCards/visa.png";
import american from "./imgs_creditCards/american.svg";
import elo from "./imgs_creditCards/elo.png";
import mastercard from "./imgs_creditCards/mastercard.png";
import Rodape from "../componentsCopy/rodape/index.js";
//262835 bg color

export default function Payment() {
  return (
    <>
      <Header />
      <Toggler />
      <div id="payment-container">
        <ol aria-label="payment process" id="check-box-payment">
          <li>1. Selecione a Forma de Pagamento</li>
          <li>2. Inserir Dados</li>
          <li>3. Confirmação do Pedido</li>
        </ol>
        <form aria-label="payment method form" id="payment-methods">
          <div id="payment-title">
            <h1>Opções de Entrega e Pagamento</h1>
          </div>

          <div id="payment-options">
            <div id="address">
              <span className="info-span" aria-label="adress information">
                Endereço de Entrega
              </span>

              <div id="select-container">
                <select name="address-select" id="address-select">
                  <option value="Null" disabled>
                    Escolha...
                  </option>
                  <option value="Address-1">Endereço 1</option>
                  <option value="Address-2">Endereço 2</option>
                  <option value="Address-3">Endereço 3</option>
                  <option value="Address-4">Endereço 4</option>
                </select>
                <div className="arrow-icon">
                  <img src={down_arrow} alt="down arrow" />
                </div>
              </div>

              <div id="prices">
                <h3>
                  SubTotal: <span aria-label="total price">R$85,90</span>
                </h3>
                <ul aria-label="purchased itens">
                  <li>
                    As Gomorrah Burns:<span>R$48,00</span>
                  </li>
                  <li>
                    Repentless:<span>R$37,90</span>
                  </li>
                </ul>

                <hr className="split-bar-1" />

                <div
                  className="total-price-plus-shipping"
                  aria-label="shipping"
                >
                  Frete:
                  <span>R$12,00</span>
                </div>

                <hr className="split-bar-2" />

                <div
                  className="total-price-plus-shipping"
                  aria-label="total price plus shipping"
                >
                  Total:
                  <span>R$97,90</span>
                </div>
              </div>
            </div>

            <div id="credit-cards">
              <span className="info-span" aria-label="credit card information">
                Bandeira do Cartão
              </span>

              <div id="select-credit-card">
                <label className="radio-credit-card">
                  <input
                    type="radio"
                    id="visa"
                    name="credit-cards-option"
                    value="Visa"
                  />
                  <img src={visa} alt="option 1 Visa" />
                </label>

                <label className="radio-credit-card">
                  <input
                    type="radio"
                    id="mastercard"
                    name="credit-cards-option"
                    value="MasterCard"
                  />
                  <img src={mastercard} alt="option 2 MasterCard" />
                </label>

                <label className="radio-credit-card">
                  <input
                    type="radio"
                    id="elo"
                    name="credit-cards-option"
                    value="Elo"
                  />
                  <img src={elo} alt="option 3 Elo" />
                </label>

                <label className="radio-credit-card">
                  <input
                    type="radio"
                    id="americanexpress"
                    name="credit-cards-option"
                    value="AmericanExpress"
                  />
                  <img
                    id="american-png"
                    src={american}
                    alt="option 4 AmericanExpress"
                  />
                </label>
              </div>

              <div id="discount-coupon">
                <label for="discount-input">Cupom de Desconto</label>
                <input type="text" id="discount-input" name="discount-input" />
              </div>
            </div>
          </div>
          <button id="form-btn">CONFIRMAR</button>
        </form>
      </div>
      <Rodape />
    </>
  );
}
