import "./albunsCadastro.css";
import AdmHeader from "../../adm_header/adm_header.js";
import AdmToggler from "../../adm_toggler/adm_toggler.js";
import AdmRodape from "../../adm_rodape/index.js";
import { useState } from "react";
import axios from "axios";

export default function AlbunsCadastro() {
  const [nomeAlbum, setNomeAlbum] = useState("")
  const [urlImagem, setUrlImagem] = useState("")
  const [descricao, setDescricao] = useState("")
  const [tipo, setTipo] = useState("")
  const [formato, setFormato] = useState("")
  const [preco, setPreco] = useState(0)
  const [qtd, setQtd] = useState(0)
  const [lancamento, setLancamento] = useState("")

  const [erro, setErro] = useState("")

  async function ChamarAxios () {
    try {
      await axios.post('http://localhost:5001/album', {
        nome : nomeAlbum,
        descricao: descricao,
        tipo: tipo,
        formato: formato,
        lancamento: lancamento,
        preco: preco,
        quantidade: qtd,
        imagem_url: urlImagem
      })
      console.log("CADASTROU")
    } catch (error) {
      setErro(error.message)
    }
    console.log(erro)
  }

  return (
    <>
      <AdmHeader />
      <AdmToggler />
      <div id="albuns-register-container">
        <div id="registerAlbunHeader">
          <h1 id="registerAlbunTitle">Cadastro de Albums</h1>
        </div>

        <form action="" id="album-form">
          <div id="albumDataContainer">
            <h1 id="albumData">Dados Cadastrais de Albuns</h1>
          </div>
          <div id="form-album-container">
            <div className="item1">
              <label className="label-tag" for="album_name">
                Nome do Album:
              </label>
              <input
                value={urlImagem}
                onChange={e => setUrlImagem(e.target.value)} 
                className="input-field"
                type="text"
                id="album_name"
                name="album_name"
              />
            </div>

            <div className="item1">
              <label className="label-tag" for="album_name">
                Imagem Capa:
              </label>
              <input
                value={nomeAlbum}
                onChange={e => setNomeAlbum(e.target.value)} 
                className="input-field"
                type="text"
                id="album_name"
                name="album_name"
              />
            </div>

            <div className="item2">
              <label className="label-tag" for="description">
                Descrição:
              </label>
              <input
                value={descricao}
                onChange={e => setDescricao(e.target.value)} 
                className="input-field"
                type="text"
                id="description"
                name="description"
              />
            </div>

            <div className="item3">
              <label className="label-tag" for="type">
                Tipo:
              </label>
              <input
                value={tipo}
                onChange={e => setTipo(e.target.value)} 
                className="input-field"
                type="text"
                id="type"
                name="type"
              />
            </div>

            <div className="item4">
              <label className="label-tag" for="format">
                Formato:
              </label>
              <input
                value={formato}
                onChange={e => setFormato(e.target.value)} 
                className="input-field"
                type="text"
                id="format"
                name="format"
              />
            </div>

            <div className="item5">
              <label className="label-tag" for="album_date">
                Lançamento:
              </label>
              <input
                value={lancamento}
                onChange={e => setLancamento(e.target.value)} 
                className="input-field"
                type="date"
                id="album_date"
                name="album_date"
              />
            </div>

            <div className="item6">
              <label className="label-tag" for="album_price">
                Preço:
              </label>
              <input
                value={preco}
                onChange={e => Number(setPreco(e.target.value))} 
                className="input-field"
                type="text"
                name="album_price"
                id="album_price"
              />
            </div>

            <div className="item7">
              <label className="label-tag" for="amount">
                Quantidade:
              </label>
              <input
                value={qtd}
                onChange={e => Number(setQtd(e.target.value))} 
                className="input-field"
                type="text"
                name="amount"
                id="amount"
              />
            </div>

            <div className="item8">
              <label className="label-tag" for="band">
                Banda:
              </label>
              <input
                className="input-field"
                type="text"
                name="band"
                id="band"
              />
            </div>
          </div>
          <button onClick={ChamarAxios} id="form-btn">CONFIRMAR</button>
        </form>
      </div>
      <AdmRodape />
    </>
  );
}
