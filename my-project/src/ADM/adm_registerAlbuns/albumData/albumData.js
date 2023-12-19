import React, { useState, useEffect } from "react";
import "./albumData.css";
import PropTypes from "prop-types";

export const randomNum = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function AlbumData(props) {
  return (
    <>
      <li key={props.id} className="album-container">
        <p className="album-name-container">{props.albumName}</p>

        <div className="album-info-container">
          <div className="img-container">
            <img src={props.img} alt="album img" />
          </div>

          <ul className="album-info-list">
            <li>
              <span>Banda: </span>
              <span className="span-text">{props.albumBand}</span>
            </li>
            <li>
              <span>Data: </span>
              <span className="span-text">{props.albumReleaseDate}</span>
            </li>
            <li>
              <span>Label: </span>
              <span className="span-text">{props.label}</span>
            </li>
            <li>
              <span>Tipo: </span>
              <span className="span-text">{props.type}</span>
            </li>
            <li>
              <span>Formato: </span>
              <span className="span-text">{props.format}</span>
            </li>
            <li>
              <span>Preço: </span>
              <span className="span-text">{props.price}R$</span>
            </li>
          </ul>
          <button className="edit-button">EDITAR</button>
        </div>
      </li>
    </>
  );
}

AlbumData.prototype = {
  id: PropTypes.number,
  albumName: PropTypes.string,
  albumBand: PropTypes.string,
  albumReleaseDate: PropTypes.number,
  label: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
  price: PropTypes.number,
};
