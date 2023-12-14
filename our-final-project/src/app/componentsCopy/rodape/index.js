import './index.css'

import Newslatter from '../newslatter'
export default function Rodape() {

    return (
        <footer className = "footer">
            <Newslatter/>
            <div className="contatos">
                <label id='titulo-contatos'>Contatos</label>:
                <p>tel: 11 99999-9999</p>
                <p>email: undergroundmusicofficial@gmail.com</p>
            </div>
        </footer>
    )

}