import "./admUsers.css";
import AdmHeader from "../adm_header/adm_header.js";
import AdmToggler from "../adm_toggler/adm_toggler.js";
import AdmRodape from "../adm_rodape/index.js";
import UserDatas from "../adm_userData/userData.js";
import { randomNum } from "../adm_userData/userData.js";

const userList = [
  {
    id: 1,
    name: "Gabriel",
    age: 19,
    email: "gabrielunofficialemail@gmail.com",
    password: "1234aavbvb",
    city: "Whitehold",
    address: "SP",
    phone: 11999999999,
    cpf: 123456789.0,
  },
  {
    id: 2,
    name: "Ruan",
    age: 18,
    email: "ruanunofficialemail@gmail.com",
    password: "1234aavbvb",
    city: "Whitehold",
    address: "SP",
    phone: 11999999999,
    cpf: 123456789.0,
  },
  {
    id: 3,
    name: "Tiago",
    age: 19,
    email: "tiagounofficialemail@gmail.com",
    password: "1234aavbvb",
    city: "Whiterun",
    address: "SP",
    phone: 11999999999,
    cpf: 987654321.0,
  },
  {
    id: 4,
    name: "Matheus",
    age: 18,
    email: "matheusunofficialemail@gmail.com",
    password: "1234aavbvb",
    city: "Whiterun",
    address: "SP",
    phone: 11999999999,
    cpf: 123456789.0,
  },
];

export default function AdmUsers(props) {
  function startElements() {
    console.log("clicked!");
    const userElements = document.querySelectorAll(".nameContainer");
    const infoElements = document.querySelectorAll(".userInfoContainer");
    const spanIcon = document.querySelectorAll(".userSpanIcon");

    for (let i = 0; i < userElements.length; i++) {
      userElements[i].addEventListener("click", () => {
        if (infoElements[i].style.display === "block") {
          infoElements[i].style.display = "none";
          spanIcon[i].innerText = "+";
        } else {
          infoElements[i].style.display = "block";
          spanIcon[i].innerText = "-";
        }
      });
    }
  }

  return (
    <>
      <AdmHeader />
      <AdmToggler />
      <div id="user-data-container">
        <div id="user-data-title">
          <h1>Dados de Usuários</h1>
        </div>

        <div id="user-data-list-container">
          <ul id="user-data-list" aria-label="users-list">
            <button id="start-btn" onClick={startElements}>
              START
            </button>

            {userList.map((element) => (
              <UserDatas
                userName={`user${randomNum(100000, 0)}`}
                key={element["id"]}
                id={element["id"]}
                name={element["name"]}
                age={element["age"]}
                email={element["email"]}
                password={element["password"]}
                city={element["city"]}
                address={element["address"]}
                phone={element["phone"]}
                cpf={element["cpf"]}
              />
            ))}
          </ul>
        </div>
      </div>
      <AdmRodape />
    </>
  );
}
