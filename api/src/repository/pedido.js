import {con} from '../connection.js'


export async function pedidoUsuario(idAlbum, idUsuario) {
    const comando = 
    `
    INSERT INTO TB_PEDIDO_SIMPLIFICADA (FK_ALBUM, FK_USUARIO)
    VALUES(?,?);
    `
    const [call] = await con.query(comando, [idAlbum,idUsuario])
    return call
}