import "./compras.css";
import Header from "../componentsCopy/header/header";
import Toggler from "../componentsCopy/toggler/toggler";
import Rodape from "../componentsCopy/rodape";
import salesImg from "./imgs/metalAlbums.jpg";
import INRI from "./imgs-albums/inri.png";
import STREAM from "./imgs-albums/flowing_tream.png";
import PHM from "./imgs-albums/pretty_hate_machine.png";
import HC from "./imgs-albums/harmony_corruption.png";
import AlbumCard from "./albumCard/albumCard";

const inri = INRI;
const stream = STREAM;
const phm = PHM;
const hc = HC;

const albumList = [
  {
    id: 1,
    albumName: "I.N.R.I",
    albumBand: "Sarcófago",
    albumReleaseDate: 1987,
    type: "Black Metal",
    format: "Vinyl",
    price: 200,
    img: inri,
    amount: 100,
  },
  {
    id: 2,
    albumName: "Like An Everflowing Stream",
    albumBand: "Dismember",
    albumReleaseDate: 1991,
    type: "Death Metal",
    format: "Vinyl",
    price: 200,
    img: stream,
    amount: 100,
  },
  {
    id: 3,
    albumName: "Pretty Hate Machine",
    albumBand: "Nine Inch Nails",
    albumReleaseDate: 1989,
    type: "Industrial",
    format: "Vinyl",
    price: 300,
    img: phm,
    amount: 35,
  },
  {
    id: 4,
    albumName: "Harmony Corruption",
    albumBand: "Napalm Death",
    albumReleaseDate: 1990,
    type: "Grindcore",
    format: "Vinyl",
    price: 250,
    img: hc,
    amount: 0,
  },
];

export default function Compras() {
  return (
    <>
      <Header />
      <Toggler />
      <div id="purchases-container">
        <div id="sales-tab">
          <div id="sales-title">
            <h1>Promoções de Setembro</h1>
            <h1>Albums em até 60% de Desconto!</h1>
          </div>

          <div id="sale-itens">
            <p>Principais Promoções</p>
            <ul id="sale-itens-list">
              <li>
                Like an Everflowing Stream - <span>70%</span>
              </li>
              <li>
                Scream Bloody Gore - <span>60%</span>
              </li>
              <li>
                Pretty Hate Machine- <span>60%</span>
              </li>
              <li>
                Filosofem - <span>65%</span>
              </li>
              <li>
                Redemption - <span>80%</span>
              </li>
              <li>
                Arise - <span>60%</span>
              </li>
              <li>
                Rust In Peace - <span>65%</span>
              </li>
              <li>
                The Ending Quest - <span>60%</span>
              </li>
            </ul>
          </div>

          <div id="sales-img-container">
            <img src={salesImg} alt="img of albums" />
          </div>
        </div>

        <div id="albuns-selection-container">
          <ul id="albuns-selection-list">
            {albumList.map((element) => (
              <AlbumCard
                key={element["id"]}
                id={element["id"]}
                albumName={element["albumName"]}
                albumBand={element["albumBand"]}
                albumReleaseDate={element["albumReleaseDate"]}
                type={element["type"]}
                format={element["format"]}
                img={element["img"]}
                price={element["price"]}
                amount={element["amount"]}
              />
            ))}
          </ul>
        </div>
      </div>
      <Rodape />
    </>
  );
}

/*
<button className="prev-btn"></button>
          <button className="next-btn"></button>
*/
