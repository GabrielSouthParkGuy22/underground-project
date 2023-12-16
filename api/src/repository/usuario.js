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

export async function realizarLogin(user) {
    const comando = 
    `
        select 
        NOME, ID_USUARIO
        from tb_usuario
        where EMAIL = ? and SENHA = ?;
    `
    const [resp] = await con.query(comando, [user.email, user.senha])
    return resp
}
