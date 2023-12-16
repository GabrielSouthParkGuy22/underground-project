
import './App.css';
import './depoimento.css';


function App() {
  return (
    
    <>
      <Topo />
      <Painel />
      <Depoimento />
      <Promocao />
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

function Painel() {
  
  return (
  
    <div className="banda1">
        <img src="rock1.png" alt="iron" />
        <h3 id="banda1">Banda com 15% de Desconto</h3>
    
        <img src="rock2.png" alt="vinil1" />
        <h3 id="banda2">Bandas em Destaque</h3>
          
        <img src="rock3.png" alt="vinil2" />
        <h3 id="banda3">Mais Vendidas</h3>
    </div>
  
  
  );
  
}

function Depoimento() {
  
  return (
  
   
        <div className="containertest">
          
          <div className="depoimentos">
            <h1>Depoimentos</h1>
          </div>
    
          <div className="setaesq">
            <a href=""><img src="setaesquerda.png" alt="setaesquerda" width="100px" /></ a>
          </div>
          <div className="slide">
            <img src="imagem1.jpg" alt="Client1" width="300px" />
            <p>
              Fiquei satisfeito com a variedade de discos e a navegabilidade do site. Super recomendo!
            </p>
            <span className="name">Marcos</span>
            <span className="local">São Paulo/SP</span>
          </div>
            
          
          <div className="slide">
            <img src="imagem2.jpg" alt="Client2" width="300px"/>
            <p>
              Estava com dificuldades em encontrar o disco de uma banda e tive uma surpresa agradável em encontrá-lo neste site. Aproveitei e comprei outros discos com excelente custo-benefício. Estão de parabéns!
            </p>
          
            <span className="name">Jennifer</span>
            <span className="local">Curitiba/PR</span>
          </div>
          
          <div className="slide">
            <img src="imagem3.jpg" alt="Client3" width="300px" />
            <p>
              Muito satisfeito com o site! Foi fácil pesquisar pelos discos, boas informações fornecidas, vários meios de pagamento e rapidez na entrega. Eu recomendo!
            </p>
            <span className="name">Pedro</span>
            <span className="local">Rio de Janeiro/RJ</span>
          </div>
          <div className="setadir">
            <a href=""><img src="setadireita.png" alt="setaesquerda" width="50px" /></ a>
          </div>
          
      
          
        </div>
          
    
  
  );
  
}


function Promocao() {
  
  return (
  
    <div className="containerpromo">
      <div className="promocao">
        <h2>PROMOÇÕES IMPERDÍVEIS</h2>
        <button className="confira" type="submit"><b>CONFIRA</b></button>
      </div>
      <div className="albuns">
        <img src="imagem4.jpg" alt="albuns" width="650px"/>
        <img src="imagem5.png" alt="albuns" width="650px"/>
      </div>
    
    
    
    </div>
  
  )
  
  
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
