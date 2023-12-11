create database codefico;
use codefico;

create table tb_usuario (
	ID_USUARIO			INT PRIMARY KEY AUTO_INCREMENT,
	EMAIL				VARCHAR(50),
    NOME				VARCHAR(100),
    CPF					VARCHAR(14),
    TELEFONE			VARCHAR(20),
    CELULAR				VARCHAR(20),
    SENHA				VARCHAR(15),
    DT_NASCIMENTO		date
);
