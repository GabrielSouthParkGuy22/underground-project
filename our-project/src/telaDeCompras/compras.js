import "./compras.css";
import Header from "../componentsCopy/header/header";
import Toggler from "../componentsCopy/toggler/toggler";
import Rodape from "../componentsCopy/rodape";
import salesImg from "./imgs/metalAlbums.jpg";
import heartIcon from "./albumCard/heart_icon.svg"
// import INRI from "./imgs-albums/inri.png";
// import STREAM from "./imgs-albums/flowing_tream.png";
// import PHM from "./imgs-albums/pretty_hate_machine.png";
// import HC from "./imgs-albums/harmony_corruption.png";
import AlbumCard from "./albumCard/albumCard";
import axios from "axios";
import { useEffect, useState } from "react";


// const inri = INRI;
// const stream = STREAM;
// const phm = PHM;
// const hc = HC;

// const albumList = [
//   {
//     id: 1,
//     albumName: "I.N.R.I",
//     albumBand: "Sarcófago",
//     albumReleaseDate: 1987,
//     type: "Black Metal",
//     format: "Vinyl",
//     price: 200,
//     img: inri,
//     amount: 100,
//   },
//   {
//     id: 2,
//     albumName: "Like An Everflowing Stream",
//     albumBand: "Dismember",
//     albumReleaseDate: 1991,
//     type: "Death Metal",
//     format: "Vinyl",
//     price: 200,
//     img: stream,
//     amount: 100,
//   },
//   {
//     id: 3,
//     albumName: "Pretty Hate Machine",
//     albumBand: "Nine Inch Nails",
//     albumReleaseDate: 1989,
//     type: "Industrial",
//     format: "Vinyl",
//     price: 300,
//     img: phm,
//     amount: 35,
//   },
//   {
//     id: 4,
//     albumName: "Harmony Corruption",
//     albumBand: "Napalm Death",
//     albumReleaseDate: 1990,
//     type: "Grindcore",
//     format: "Vinyl",
//     price: 250,
//     img: hc,
//     amount: 0,
//   },
// ];

export default function Compras() {

  const [albuns, setAlbuns] = useState([])
  const [erro, setErro] = useState("")

  async function ChamarAxios() {
    try {
      const albunsData = await axios.get('http://localhost:5001/albuns', {})
      setAlbuns(albunsData.data)
      console.log(albuns)
    } catch (error) {
      setErro(error.message)
    }
    console.log(erro)
  }

  const [idUser, setIdUser] = useState('')


  // setIdUser(userLogado)

  function carregarStorage() {
    const userLogado = localStorage.getItem('user-logado')
    setIdUser(userLogado)
    console.log(idUser)
  }

  
  async function comprarAlbum (idBanda) {
    try {
      await axios.post('http://localhost:5001/cadastro/pedido', {
          idAlbum : idBanda,
          idUsuario: idUser    
        })
      console.log("CADASTROU")
    } catch (error) {
      console.log(error)
    }

  }


  useEffect(() => {
    ChamarAxios()
    carregarStorage()
  }, [])
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
            {albuns.map((album => 
                  <li key={album.id} className="album-card">
                    <div className="img-card-container">
                      <img src={album.img} alt="card img" />
                    </div>
      
                    <div className="span-card-container">
                      <span className="span-card" aria-label="formato do album">
                        {album.formato}
                      </span>
                      <span className="span-card" aria-label="formato do album">
                        Disponível
                      </span>
                    </div>
      
                    <p className="text-card">
                      {album.nome_album}
                      <span className="span-date">({album.lancamento_data ? album.lancamento_data.slice(0, 4) : "No Data Avaliable "})</span>
                    </p>
                    <p className="text-card">{album.nome_banda}</p>
      
                    <div className="bottom-container">
                      <span className="span-price">R${album.preco}</span>
                      <button onClick={() => comprarAlbum(album.album)} className="card-btn">COMPRAR</button>
                      <img
                        className="img-heart-icon"
                        src={heartIcon}
                        alt="adicionar aos favoritos "
                      />
                    </div>
                </li>
            ))}
  
            {/* {albuns.map((element) => (
              <AlbumCard
                albumName={element["nome_album"]}
                albumBand={element["nome_banda"]}
                albumReleaseDate={element["lancamento_data"] ? element["lancamento_data"].slice(0, 4) : "No Data Avaliable"}
                type={element["tipo"]}
                format={element["formato"]}
                img={element["img"] ? element["img"] : "NO IMAGE AVALIABLE"}
                price={element["preco"]}
                amount={element["quantidade"]}
              />
            ))} */}
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
