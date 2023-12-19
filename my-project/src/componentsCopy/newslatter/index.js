import './index.css'
export default function Rodape() {

    return (
        <div className = "newslatter">
            <label>Receba notificações pelo Newsletter:</label>
            <div className="containerInputButton">
                <input id='inputEmail' type="text" placeholder="email"></input>
                <button id='buttonInscreva'>Se Inscrever</button>
            </div>
        </div>
    )

}