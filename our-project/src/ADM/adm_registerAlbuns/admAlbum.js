import "./admAlbum.css";
import AdmHeader from "../adm_header/adm_header";
import AdmToggler from "../adm_toggler/adm_toggler";
import AdmRodape from "../adm_rodape";
import AlbumData from "./albumData/albumData";
import violator from "./albumData/imgs-albums/violator.png";
import schizophrenia from "./albumData/imgs-albums/schizophrenia.png";
import phm from "./albumData/imgs-albums/pretty_hate_machine.png";
import hc from "./albumData/imgs-albums/harmony_corruption.png";

const imgV = violator;
const imgS = schizophrenia;
const imgP = phm;
const imgH = hc;

const albumList = [
  {
    id: 1,
    albumName: "Violator",
    albumBand: "Depeche Mode",
    albumReleaseDate: 1990,
    label: "Sire Records",
    type: "Vinyl",
    format: "full-length",
    img: imgV,
  },
  {
    id: 2,
    albumName: "Schizophrenia",
    albumBand: "Sepultura",
    albumReleaseDate: 1987,
    label: "Cogumelo Records",
    type: "Vinyl",
    format: "full-length",
    img: imgS,
  },
  {
    id: 3,
    albumName: "Pretty Hate Machine",
    albumBand: "Nine Inch Nails",
    albumReleaseDate: 1989,
    label: "TVT Records",
    type: "Vinyl",
    format: "full-length",
    img: imgP,
  },
  {
    id: 4,
    albumName: "Harmony Corruption",
    albumBand: "Napalm Death",
    albumReleaseDate: 1990,
    label: "Earache Records",
    type: "Vinyl",
    format: "full-length",
    img: imgH,
  },
];

export default function AdmAlbum() {
  return (
    <>
      <AdmHeader />
      <AdmToggler />
      <div id="adm-albums-container">
        <div id="albums-data-title">
          <h1>Albums</h1>
        </div>

        <div id="album-data-list-container">
          <ul id="album-data-list" aria-label="album-list">
            {albumList.map((element) => (
              <AlbumData
                key={element["id"]}
                id={element["id"]}
                albumName={element["albumName"]}
                albumBand={element["albumBand"]}
                albumReleaseDate={element["albumReleaseDate"]}
                label={element["label"]}
                type={element["type"]}
                format={element["format"]}
                img={element["img"]}
              />
            ))}
          </ul>
        </div>
      </div>
      <AdmRodape />
    </>
  );
}
