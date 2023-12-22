import "./telaPrincipal.css";
import Header from "../componentsCopy/header/header";
import Toggler from "../componentsCopy/toggler/toggler";
import Rodape from "../componentsCopy/rodape";
import heartIcon from "./imgs/heart_icon.svg";
import phm from "./imgs-albums/pretty_hate_machine.png";
import hc from "./imgs-albums/harmony_corruption.png";
import sream from "./imgs-albums/flowing_tream.png";
import inri from "./imgs-albums/inri.png";
import schizo from "./imgs-albums/schizophrenia.png";
import violator from "./imgs-albums/violator.png";
import rtc from "./imgs-albums/rtc.jpg";
import redemption from "./imgs-albums/redemption.jpg";
import salesImg from "./imgs/DMalbums.jpg";
import { useEffect } from "react";

export default function TelaPrincipal() {
  return (
    <>
      <Header />
      <Toggler />
      <div id="main-screen-container">
        <div id="ads-section">
          <div id="most-sold-albums">
            <p>Álbuns Mais Vendidos</p>
          </div>
          <div id="stand-out-bands">
            <p>Bandas em Destaque</p>
          </div>
          <div id="stand-out-songs">
            <p>Bandas em Destaque</p>
          </div>
        </div>

        <div id="main-content-container">
          <section aria-label="novos lançamentos">
            <h1 id="newReleases">Novos Lançamentos</h1>
            <ul id="new-releases-list">
              <li className="album-card">
                <div className="img-card-container">
                  <img src={schizo} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  Schizophrenia
                  <span className="span-date">(1987)</span>
                </p>
                <p className="text-card">Sepultura</p>

                <div className="bottom-container">
                  <span className="span-price">200R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>

              <li className="album-card">
                <div className="img-card-container">
                  <img src={inri} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  I.N.R.I
                  <span className="span-date">(1987)</span>
                </p>
                <p className="text-card">Sarcófago</p>

                <div className="bottom-container">
                  <span className="span-price">200R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>

              <li className="album-card">
                <div className="img-card-container">
                  <img src={hc} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  Harmony Corruption
                  <span className="span-date">(1990)</span>
                </p>
                <p className="text-card">Napalm Death</p>

                <div className="bottom-container">
                  <span className="span-price">200R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>

              <li className="album-card">
                <div className="img-card-container">
                  <img src={redemption} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  Redemption
                  <span className="span-date">(1999)</span>
                </p>
                <p className="text-card">Vomitory</p>

                <div className="bottom-container">
                  <span className="span-price">200R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>
            </ul>
          </section>

          <section aria-label="mais vendidos">
            <h1 id="mostSold">Mais Vendidos</h1>
            <ul id="most-sold-list">
              <li className="album-card">
                <div className="img-card-container">
                  <img src={phm} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  Pretty Hate Machine
                  <span className="span-date">(1989)</span>
                </p>
                <p className="text-card">Nine Inch Nails</p>

                <div className="bottom-container">
                  <span className="span-price">300R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>

              <li className="album-card">
                <div className="img-card-container">
                  <img src={sream} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  Like An Everflowing Stream
                  <span className="span-date">(1991)</span>
                </p>
                <p className="text-card">Dismember</p>

                <div className="bottom-container">
                  <span className="span-price">360R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>

              <li className="album-card">
                <div className="img-card-container">
                  <img src={violator} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  Violator
                  <span className="span-date">(1990)</span>
                </p>
                <p className="text-card">Depeche Mode</p>

                <div className="bottom-container">
                  <span className="span-price">330R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>

              <li className="album-card">
                <div className="img-card-container">
                  <img src={rtc} alt="card img" />
                </div>

                <div className="span-card-container">
                  <span className="span-card" aria-label="formato do album">
                    Vinyl
                  </span>
                  <span className="span-card" aria-label="formato do album">
                    Disponível
                  </span>
                </div>

                <p className="text-card">
                  Resurrection Through Carnage
                  <span className="span-date">(2002)</span>
                </p>
                <p className="text-card">Bloodbath</p>

                <div className="bottom-container">
                  <span className="span-price">370R$</span>
                  <button className="card-btn">COMPRAR</button>
                  <img
                    className="img-heart-icon"
                    src={heartIcon}
                    alt="adicionar aos favoritos "
                  />
                </div>
              </li>
            </ul>
          </section>

          <div id="sale-ads-container">
            <div id="btn-sale-container">
              <h2>promoções imperdíveis</h2>
              <button id="sales-btn">CONFIRA</button>
            </div>
            <div id="img-sale-container">
              <img src={salesImg} alt="anúncio de promoções" />
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}

/*
<li className="slide">
                  <img src={phm} alt="Pretty Hate Machine album cover" />
                </li>
*/
