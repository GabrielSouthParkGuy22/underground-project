import React, { useState, useEffect } from "react";
import "./albumComponent.css";
import PropTypes from "prop-types";

export default function AlbumComponent(props) {
  return (
    <>
      <li className="album-data" key={props.id}>
        <ul
          className="album-info"
          aria-label="info about the album before buying"
        >
          <li>
            <img
              className="purchase-albums"
              src={props.img}
              alt={`album cover from ${props.albumName}`}
            />
          </li>
          <li>
            <span>{props.albumName}</span>
          </li>
          <li>
            <span>{props.format}</span>
          </li>
          <li>
            <span>{props.price}R$</span>
          </li>
        </ul>
      </li>
    </>
  );
}

AlbumComponent.prototype = {
  id: PropTypes.number,
  albumName: PropTypes.string,
  format: PropTypes.string,
  price: PropTypes.number,
};
