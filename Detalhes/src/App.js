


import './App.css';



function App() {
  return (
    
    <>
      <Topo />
      
      <Detalhe />
      <Avaliacao />
      <Meusalbuns />
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


function Detalhe() {
  
  
  return (
  
    <div className="containerdetalhe">
      
        <div className="albumdetalhe">
          <h1>System of a Down</h1>
          <img src="imagem15.jpg" alt="SystemOfaDown" width="350px" />
        </div>
        <div class="formapagamento">
      
          <h1 class="titulo">Forma de Pagamento</h1>
          <div class="credito">
            <input type="radio" id="cartao" name="opcao" value="F" />
            <label for="card">Cartão de Crédito</label>
            <select name="genero" id="genero">
              <option value="V">Visa</option>
              <option value="M">Mastercard</option>
            </select>
          </div>
        
          <div class="transferencia">
            <input type="radio" id="transfer" name="opcao" value="C" />
            <label for="transf">Transferência Bancária</label>
          
          </div>
        
          <div class="pgtopix">
            <input type="radio" id="pix" name="opcao" value="S" />
            <label for="pix">Pix</label>
          
          </div>
          <div className="comprar">
            <button className="botaocomprar" type="submit">Comprar</button>
          </div>
      
      </div>
     
          
          
    
    </div>
    
  
  );
  
  
}


function Avaliacao() {
  
  
  return (
  
    <div className="containeravaliacao">
      <div className="avaliacao">
        <div className="clienteavalia1">
          <p>Pedro</p>
          <p>Site com fácil navegabilidade. Parabéns!</p>
        </div>
        <div className="clienteavalia2">
          <p>Rafael</p>
          <p>Boa variedade de lp´s e ótimo custo-benefício. Recomendo!</p>
        </div>
        <div className="clienteavalia3">
          <p>Mariana</p>
          <p>Fiquei muito satisfeita quando encontrei o lp que estava procurando por meses! Com certeza farei novas compras pelo site. </p>
        </div>
        <div className="clienteavalia4">
          <p>Karina</p>
          <p>O custo-benefício e formas de pagamento foram os motivos que mais me agradaram no site. Espero realizar novas compras mais adiante. Parabéns! </p>
        </div>
      </div>
      <div className="mediaavaliacao">
        <h1>Média: 4.89/5</h1>
      </div>
    </div>
    
  );
  
  
}


function Meusalbuns () {
  
  return (
  
    <div className="containeralbuns">
        <div className="titulomeusfavoritos">
          <h1>Meus Favoritos</h1>
        </div>
        <div className="albunsfavoritos">
          <div className="setaesq">
            <a href=""><img src="setaesquerda.png" alt="setaesquerda" width="100px" /></ a>
          </div>
          <div className="favorito1">
            <img src="imagem6.jpg" alt="like everflowing" width="200px" />
            <p><b>LP Disponível</b></p>
            <p>Like a Everflowing Stream(1991)</p>
            <p>Dismember</p>
            <p>R$300</p>
            <button className="botaofavorito1" type="submit">Comprar</button>
          </div>
          <div className="favorito2">
            <img src="imagem7.jpg" alt="like everflowing" width="200px" />
            <p><b>LP Disponível</b></p>
            <p>Harmony Corruption(1990)</p>
            <p>Napalm Death</p>
            <p>R$300</p>
            <button className="botaofavorito2" type="submit">Comprar</button>
          </div>
          <div className="favorito3">
            <img src="imagem8.jpg" alt="like everflowing" width="200px" />
            <p><b>LP Disponível</b></p>
            <p>Pretty Hate Machine(1989)</p>
            <p>Nine Inch Nails</p>
            <p>R$250</p>
            <button className="botaofavorito3" type="submit">Comprar</button>
          </div>
          <div className="setadir">
            <a href=""><img src="setadireita.png" alt="setaesquerda" width="100px" /></ a>
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





