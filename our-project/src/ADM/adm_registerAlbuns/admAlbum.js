import "./admAlbum.css";
import AdmHeader from "../adm_header/adm_header";
import AdmToggler from "../adm_toggler/adm_toggler";
import AdmRodape from "../adm_rodape";
import AlbumData from "./albumData/albumData";
import violator from "./albumData/imgs-albums/violator.png";
import schizophrenia from "./albumData/imgs-albums/schizophrenia.png";
import phm from "./albumData/imgs-albums/pretty_hate_machine.png";
import hc from "./albumData/imgs-albums/harmony_corruption.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdmAlbum() {
  const [albumList, setAlbumList] = useState([])
  const [erro, setErro] = useState('')
  
  async function ChamarAxios () {
    try {
      const albuns = await axios.get('http://localhost:5001/albuns', {})
      setAlbumList(albuns.data)
    } catch (error) {
      setErro(error.message)
    }
    console.log(erro)
  }

  useEffect(() =>{
    ChamarAxios()
  }, [])

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
            {albumList.map((album) => (
              <AlbumData
                key={album["id"]}
                albumName={album['nome_album'] ? album['nome_album'] : "no_data"}
                albumBand={album['nome_banda'] ? album['nome_banda'] : "no_Data" }
                albumReleaseDate={album["lancamento_data"]? album["lancamento_data"].slice(0,4) : "NO"}
                // label={album["label"]}
                type={album.tipo ? album.tipo : 'No_Data'}
                format={album.formato ? album.formato : "No_Data"}
                img={album["img"]}
              />
            ))}
          </ul>
        </div>
      </div>
      <AdmRodape />
    </>
  );
}
