import {con} from '../connection.js'

export async function cadastroAlbum(info) {
    const comando = `
    INSERT INTO tb_album (NOME, DESCRICAO, LANCAMENTO, PRECO, QUANTIDADE, FK_BANDA)
    VALUES (?, ?, ?, ?, ?, ?);
    `
    const [call] = await con.query(comando, [info.nome, info.descricao, info.lancamento, info.preco, info.quantidade, info.fkId])
    return call
}


export async function visualizarTodosAlbuns () {
    const comando = 
    `
    select 
    ID_BANDA 	AS banda,
    NOME 		AS nome,
    DESCRICAO	as descricao,
    LANCAMENTO	as lancamento_data,
    PRECO		as preco,
    QUANTIDADE	as quantidade,
    FK_BANDA	as fkId
    from tb_album;
    `
    const [call] = await con.query(comando, [])
    return call
}


export async function deletarAlbumPorId (idBanda) {
    const comando = 
    `
    delete from tb_album where id_banda = ?

    `
    const [call] = await con.query(comando, [idBanda])
    return call.affectedRows
}




