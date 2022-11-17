import {con} from './connection.js'

export async function Login (email,senha){
    const comando = `
    SELECT id_admin       id,
       ds_email       Email
FROM tb_admin
WHERE ds_email          =?
AND   ds_senha          =?`

const [linhas] = await con.query(comando, [email,senha]);
return linhas[0]
}

export async function Cadastro (nome, email, senha,  telefone, cpf){
    const comando = `
    Insert INTO tb_usuario (nm_usuario, ds_email, ds_senha , ds_telefone, ds_cpf)
VALUES(?,?,?,?,? )`

    const [linhas] = await con.query(comando, [nome, email, senha, telefone,   cpf])
    return linhas[0];
}

export async function LoginUsuario (email,senha){
    const comando = `
    SELECT id_usuario       id,
       nm_usuario       Email
FROM tb_usuario
WHERE ds_email          =?
AND   ds_senha          =?`

const [linhas] = await con.query(comando, [email,senha]);
return linhas[0]
}


export async function fotoPerfil(imagem, id){
    const comando = `UPDATE tb_usuario
                    SET img_usuario = ?
                    WHERE id_usuario = ?`;

    const [resposta] = await con.query(comando,[imagem, id]);
    return resposta.affectedRows;
}

export async function buscarUsuarioPorId(id) {
    const comando =

    `select 
    id_usuario id,
    nm_usuario nome,
    ds_telefone telefone,
    ds_email email,
    ds_senha senha,
    img_usuario imagem
    from tb_usuario
    where id_usuario = ?`

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}
