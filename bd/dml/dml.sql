create table TB_USUARIO (
	ID_USUARIO			INT PRIMARY KEY AUTO_INCREMENT,
	EMAIL				VARCHAR(50),
    NOME				VARCHAR(100),
    CPF					VARCHAR(14),
    TELEFONE			VARCHAR(20),
    CELULAR				VARCHAR(20),
    SENHA				VARCHAR(15),
    DT_NASCIMENTO		date
);

create table TB_ADM (
	ID_ADM			    INT PRIMARY KEY AUTO_INCREMENT,
	EMAIL				VARCHAR(50),
    NOME				VARCHAR(100),
    SENHA				VARCHAR(15)
);

create table TB_BANDA (
	ID_BANDA			    INT PRIMARY KEY AUTO_INCREMENT,
    NOME					VARCHAR(100),
    PAIS_ORIGEM             VARCHAR(40),
    CRIACAO_DATA            DATE,
    GENERO                  VARCHAR(30)
);

create table TB_MUSICA (
	ID_MUSICA			    	INT PRIMARY KEY AUTO_INCREMENT,
    NOME					    VARCHAR(100),
    DURACAO						VARCHAR(5),
    FK_ALBUM					INT,
    FK_BANDA					INT,
    FOREIGN KEY (FK_ALBUM) REFERENCES TB_ALBUM(ID_ALBUM),
    FOREIGN KEY (FK_BANDA) REFERENCES TB_BANDA(ID_BANDA)
);

create table TB_ALBUM (
	ID_ALBUM			     	INT PRIMARY KEY AUTO_INCREMENT,
    NOME					    VARCHAR(100),
    DESCRICAO					VARCHAR(100),
    LANCAMENTO					date,
    PRECO						decimal(10,2),
    QUANTIDADE					INT,
    FK_BANDA					INT,
    FOREIGN KEY (FK_BANDA) REFERENCES TB_BANDA(ID_BANDA)
);

create table TB_CONTRATO (
	ID_CONTRATO				INT PRIMARY KEY AUTO_INCREMENT,
    LOCAL_ORIGEM			VARCHAR(130),
    CRIACAO_DATA			DATE,
    FINAL_DATA				DATE,
    FK_BANDA				INT,
    FK_LABEL				INT,
    FOREIGN KEY (FK_BANDA) REFERENCES TB_BANDA(ID_BANDA),
    FOREIGN KEY (FK_LABEL) REFERENCES TB_LABEL(ID_LABEL)
);

create table TB_LABEL (
    ID_LABEL					INT PRIMARY KEY AUTO_INCREMENT,
	STATUS_ATUAL				VARCHAR(20),
    NOME				        VARCHAR(20),
    PAIS				        VARCHAR(20)
);

create table TB_PEDIDO (
    ID_PEDIDO					INT PRIMARY KEY AUTO_INCREMENT,
    VALOR						DECIMAL(10,2),
    DATA_COMPRA					DATE,
    METODO_PAGAMENTO			VARCHAR(40),
    STATUS_PEDIDO				VARCHAR(15),
    FK_ALBUM					INT,
    FK_USUARIO					INT,
    FOREIGN KEY (FK_ALBUM) REFERENCES TB_ALBUM(ID_ALBUM),
    FOREIGN KEY (FK_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)
);

CREATE TABLE TB_ITEM_PEDIDO (
	ID_ITEM_PEDIDO				INT PRIMARY KEY AUTO_INCREMENT,
	FK_ALBUM					INT,
    FK_USUARIO					INT,
    FOREIGN KEY (FK_ALBUM) REFERENCES TB_ALBUM(ID_ALBUM),
    FOREIGN KEY (FK_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)
);