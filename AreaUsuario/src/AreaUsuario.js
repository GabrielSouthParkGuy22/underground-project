import './App.css';
import './AreaUsuario.css';


function AreaUsuario() {
  
  return (
    
    <>
      <Topo />
      <Cadastro />
      <Favoritos />
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
            <li><a href="">Nome do Usuário</a></li>
          </ul>
        </div>
      </div>
  
  );
  

}

  
function Cadastro() {
  
  return (
  
    <div className="containercadastro">
      <div className="nomeusuario">
        <h1 id="nomesobrenome">Nome Sobrenome</h1>
      </div>
      <div className="cadastrousuario">
        <div className="dadosusuario">
    
          <div className="cpf">
            <p>CPF: 000000000-00</p>
          </div>
          <div className="datanascimento">
            <p>Data de Nascimento: 01/01/2000</p>
          </div>
          <div className="email">
            <p>Email: usuario@gmail.com</p>
          </div>
          <div className="telefone">
            <p>Telefone: (000)0000-0000</p>
          </div>
        
        </div>
      
        <div className="endereco">
          <div className="rua">
            <p>Rua/Avenida: Rua São Paulo</p>
          </div>
          <div className="numero">
            <p>Número: 0000</p>
          </div>
          <div className="bairro">
            <p>Bairro: Pinheiros</p>
          </div>
          <div className="cidade">
            <p>Cidade: São Paulo</p>
          </div>
          <div className="estado">
            <p>Estado: São Paulo</p>
          </div>
        </div>
      </div>
    </div>
  
  );
  
  
}


function Favoritos() {
  
  
  return (
  
    <div className="containerfavoritos">
        <div className="titulofavoritos">
          <h1>Meus Favoritos</h1>
        </div>
        <div className="meusfavoritos">
          <div className="setaesqfav">
            <a href=""><img src="setaesquerda.png" alt="setaesquerda" width="100px" /></ a>
          </div>
          <div className="album1">
            <img src="imagem6.jpg" alt="like everflowing" width="200px" />
            <p>LP Disponível</p>
            <p>Like a Everflowing Stream(1991)</p>
            <p>Dismember</p>
            <p>R$300</p>
            <button className="botao1" type="submit">Comprar</button>
          </div>
          <div className="album2">
            <img src="imagem7.jpg" alt="like everflowing" width="200px" />
            <p>LP Disponível</p>
            <p>Harmony Corruption(1990)</p>
            <p>Napalm Death</p>
            <p>R$300</p>
            <button className="botao2" type="submit">Comprar</button>
          </div>
          <div className="album3">
            <img src="imagem8.jpg" alt="like everflowing" width="200px" />
            <p>LP Disponível</p>
            <p>Pretty Hate Machine(1989)</p>
            <p>Nine Inch Nails</p>
            <p>R$250</p>
            <button className="botao3" type="submit">Comprar</button>
          </div>
          <div className="setadirfav">
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
  
  

export default AreaUsuario;