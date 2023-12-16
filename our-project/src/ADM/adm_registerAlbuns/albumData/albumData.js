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
              {props.albumBand}
            </li>
            <li>
              <span>Data: </span>
              {props.albumReleaseDate}
            </li>
            <li>
              <span>Label: </span>
              {props.label}
            </li>
            <li>
              <span>Tipo: </span>
              {props.type}
            </li>
            <li>
              <span>Formato: </span>
              {props.format}
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
};
