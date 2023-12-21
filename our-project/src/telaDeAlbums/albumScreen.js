import "./albumScreen.css";
import Header from "../componentsCopy/header/header";
import Toggler from "../componentsCopy/toggler/toggler";
import Rodape from "../componentsCopy/rodape";
import AlbumComponent from "./albumComponent/albumComponent";
import violator from "./imgs-albums/violator.png";
import schizophrenia from "./imgs-albums/schizophrenia.png";
import phm from "./imgs-albums/pretty_hate_machine.png";
import hc from "./imgs-albums/harmony_corruption.png";

const imgV = violator;
const imgS = schizophrenia;
const imgP = phm;
const imgH = hc;

const clientNamesList = [
  "Gabriel de Oliveira",
  "Ruan da Silva",
  "Tiago de Oliveira",
];

const purchasedAlbumsList = [
  {
    id: 1,
    albumName: "Violator",
    format: "Vinyl",
    img: imgV,
    price: 200,
  },
  {
    id: 2,
    albumName: "Schizophrenia",
    format: "Vinyl",
    img: imgS,
    price: 200,
  },
  {
    id: 3,
    albumName: "Pretty Hate Machine",
    format: "Vinyl",
    img: imgP,
    price: 200,
  },
  {
    id: 4,
    albumName: "Harmony Corruption",
    format: "Vinyl",
    img: imgH,
    price: 200,
  },
  {
    id: 5,
    albumName: "Harmony Corruption",
    format: "Vinyl",
    img: imgH,
    price: 200,
  },
  {
    id: 6,
    albumName: "Harmony Corruption",
    format: "Vinyl",
    img: imgH,
    price: 200,
  },
];

export default function TelaDeAlbums() {
  let total = 0;

  const albumsPrice = function () {
    for (let i = 0; i < purchasedAlbumsList.length; i++) {
      total += purchasedAlbumsList[i]["price"];
    }
  };

  const albumsParcela = function (totalPrice, Parcelas) {
    return totalPrice / Parcelas;
  };

  albumsPrice(total);

  const parcelas = albumsParcela(total, 5);

  return (
    <>
      <Header />
      <Toggler />
      <div id="albums-purchased-container">
        <div id="purchase-album">
          <div id="client-name-container">
            <p className="client-name">{clientNamesList[0]}</p>
          </div>

          <div id="client-purchases-container">
            <ul id="client-purchases-list">
              {purchasedAlbumsList.map((element) => (
                <AlbumComponent
                  key={element["id"]}
                  id={element["id"]}
                  albumName={element["albumName"]}
                  format={element["format"]}
                  img={element["img"]}
                  price={element["price"]}
                />
              ))}
            </ul>
            <div id="total-price-container">
              <h3 className="total-price">TOTAL:</h3>
              <ul>
                <li>{total}R$</li>
                <li>5x de {parcelas} sem juros</li>
              </ul>
              <div id="confirm-btn-container">
                <button id="confirm-btn">CONFIRMAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}
