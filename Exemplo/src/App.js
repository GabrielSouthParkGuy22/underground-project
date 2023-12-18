
import './App.css';



function App() {
  return (
    
    <>
      <Topo />
      <Promocoes />
      <Newsletter />
      <Rodape />
    </>
  );
}

function Topo() {
  
  return (
  
     <div className="container">
        <div className="imagem">
            <img src="vinil.png" alt="discovinil" />
        </div>
    
        <div className="pesquisa">
          <input type="search" placeholder="Pesquisar" />
          <a className="lupa"><img src="lupa.jpg" alt="lupa" /></a>
        </div>
    
        <div className="login">
          <ul>
            <li><a href="">Login</a></li>
            <li><a href="">Registro</a></li>
          </ul>
        </div>
      </div>
  
  );
  
  
}


function Promocoes() {
  
  
  return (
  
    <div className="containerpromocoes">
      <div className="promocoesmes">
        <h1>PROMOÇÕES DE DEZEMBRO</h1>
        <h1>ÁLBUNS EM ATÉ 60% DE DESCONTO</h1>   
      </div>
      <div className="promocoeslps">
        <div className="lp1">
          <img src="imagem6.jpg" alt="like everflowing" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Like a Everflowing Stream(1991)</p>
          <p>Dismember</p>
          <p>R$300</p>
          <button className="botaocompra1" type="submit">Comprar</button>
        </div>
        <div className="lp2">
          <img src="imagem7.jpg" alt="harmony corruption" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Harmony Corruption(1990)</p>
          <p>Napalm Death</p>
          <p>R$300</p>
          <button className="botaocompra2" type="submit">Comprar</button>
        </div>
        <div className="lp3">
          <img src="imagem8.jpg" alt="hate machine" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Pretty Hate Machine(1989)</p>
          <p>Nine Inch Nails</p>
          <p>R$250</p>
          <button className="botaocompra3" type="submit">Comprar</button>
        </div>
        <div className="lp4">
          <img src="imagem9.jpg" alt="violator" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Violator (1990)</p>
          <p>Depeche Mode</p>
          <p>R$250</p>
          <button className="botaocompra4" type="submit">Comprar</button>
        </div>
        <div className="lp5">
          <img src="imagem10.jpg" alt="schizophrenia" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Schizophrenia (1987)</p>
          <p>Sepultura</p>
          <p>R$250</p>
          <button className="botaocompra5" type="submit">Comprar</button>
        </div>
        <div className="lp6">
          <img src="imagem11.jpg" alt="transilvanian" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Transilvanian Hunger (1994)</p>
          <p>Darkthrone</p>
          <p>R$350</p>
          <button className="botaocompra6" type="submit">Comprar</button>
        </div>
        <div className="lp7">
          <img src="imagem12.jpg" alt="heartwork" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Heartwork (1993)</p>
          <p>Carcass</p>
          <p>R$250</p>
          <button className="botaocompra7" type="submit">Comprar</button>
        </div>
        <div className="lp8">
          <img src="imagem13.jpg" alt="repentless" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>Repentless (2015)</p>
          <p>Slayer</p>
          <p>R$350</p>
          <button className="botaocompra8" type="submit">Comprar</button>
        </div>
        <div className="lp9">
          <img src="imagem14.jpg" alt="25live" width="200px" />
          <p><b>LP Disponível</b></p>
          <p>25Live@25 (2019)</p>
          <p>Skunk Anansie</p>
          <p>R$320</p>
          <button className="botaocompra9" type="submit">Comprar</button>
        </div>
      </div>
    </div>
    
  );
  
  
}


function Newsletter() {
  
  
  return (
  
    <div className="containernews">
      <div className="notificacoes">
        <p id="notificacoes">Receba notificações pelo Newsletter:</p>
      </div>
    
      <div className="emailnews">
        <input className="inputemail"  type="email" placeholder="Email" />
        <button className="botaoemail" type="submit"><b>Inscreva-se</b></button>
      </div>
    </div>
    
  );


}

function Rodape() {
  
  return (
  
    <div class="containercontato">
      <div className="contatos">
        <p id="contatos">Contatos:</p>
        <p id="tel">Tel: (11)99999-9999</p>
        <p id="email">Email: suporte@undergems.com.br</p>
      </div>
    </div>
    
  );
  
}

export default App;
