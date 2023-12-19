import React, { useState, useEffect } from "react";
import "./albumCard.css";
import PropTypes from "prop-types";
import heartIcon from "./heart_icon.svg";

export default function AlbumCard(props) {
  function checkAmount() {
    if (props.amount <= 0) {
      return "Indisponível";
    } else {
      return "Disponível";
    }
  }

  return (
    <>
      <li key={props.id} className="album-card">
        <div className="img-card-container">
          <img src={props.img} alt="card img" />
        </div>

        <div className="span-card-container">
          <span className="span-card" aria-label="formato do album">
            {props.format}
          </span>
          <span className="span-card" aria-label="formato do album">
            {checkAmount()}
          </span>
        </div>

        <p className="text-card">
          {props.albumName}
          <span className="span-date">({props.albumReleaseDate})</span>
        </p>
        <p className="text-card">{props.albumBand}</p>

        <div className="bottom-container">
          <span className="span-price">{props.price}R$</span>
          <button className="card-btn">COMPRAR</button>
          <img
            className="img-heart-icon"
            src={heartIcon}
            alt="adicionar aos favoritos "
          />
        </div>
      </li>
    </>
  );
}

AlbumCard.prototype = {
  id: PropTypes.number,
  albumName: PropTypes.string,
  albumBand: PropTypes.string,
  albumReleaseDate: PropTypes.number,
  type: PropTypes.string,
  format: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
};
