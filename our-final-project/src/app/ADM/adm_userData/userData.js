import "./userData.css";
import PropTypes from "prop-types";

export const randomNum = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function UserDatas(props) {
  return (
    <>
      <li className="userContainer">
        <p className="nameContainer">
          {props.userName} <span className="userSpanIcon">+</span>
        </p>

        <ul className="userInfoContainer">
          <li key={props.id}>
            <span>ID: </span>
            {props.id}
          </li>
          <li>
            <span>Nome: </span>
            {props.name}
          </li>
          <li>
            <span>Idade: </span>
            {props.age}
          </li>
          <li>
            <span>Email: </span>
            {props.email}
          </li>
          <li>
            <span>Senha: </span>
            {props.password}
          </li>
          <li>
            <span>Cidade: </span>
            {props.city}
          </li>
          <li>
            <span>Endereço: </span>
            {props.address}
          </li>
          <li>
            <span>Telefone: </span>
            {props.phone}
          </li>
          <li>
            <span>CPF: </span>
            {props.cpf}
          </li>
        </ul>
      </li>
    </>
  );
}

UserDatas.prototype = {
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  password: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.number,
  cpf: PropTypes.number,
};
