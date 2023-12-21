import {con} from '../connection.js'

export async function inserirDados(info) {
    const comando = `
    INSERT INTO tb_usuario (EMAIL, NOME, CPF, TELEFONE, CELULAR, SENHA, DT_NASCIMENTO)
    VALUES (?, ?, ?, ?, ?, ?, ?);    
    `

    const [call] = await con.query(comando, [info.email, info.nome, info.cpf, info.telefone, info.celular, info.senha, info.dt_nascimento])
    // info.id = call.insertId
    // return call.insertId
    return call
}

export async function visualizarUsuarios() {
    const comando = `
        SELECT * FROM TB_USUARIO
    `
    const [call] = await con.query(comando, [])

    return call
}

export async function realizarLogin(email, senha) {
    const comando = 
    `
        select 
        NOME as nome, ID_USUARIO as id
        from tb_usuario
        where EMAIL = ? and SENHA = ?;
    `
    const [resp] = await con.query(comando, [email, senha])
    return resp[0]
}


export async function visualizarItemPedido() {
    const comando = 
    `
    SELECT 
    PS.ID_PEDIDO,
    PS.FK_ALBUM,
    A.NOME AS NOME_ALBUM,
    A.PRECO AS PRECO_ALBUM,
    A.QUANTIDADE AS QUANTIDADE_ALBUM,
    A.DATA_ORIGEM AS DATA_ORIGEM_ALBUM,
    A.IMAGEM_URL AS IMAGEM_URL_ALBUM,
    A.FK_BANDA,
    A.FORMATO,
    U.ID_USUARIO,
    U.EMAIL,
    U.NOME AS NOME_USUARIO,
    U.CPF,
    U.CELULAR,
    U.DT_NASCIMENTO
    FROM 
    TB_PEDIDO_SIMPLIFICADA PS
    INNER JOIN TB_ALBUM A ON PS.FK_ALBUM = A.ID_ALBUM
    INNER JOIN TB_USUARIO U ON PS.FK_USUARIO = U.ID_USUARIO;   
     `
    const [call] = await con.query(comando, [])
    return call
}

