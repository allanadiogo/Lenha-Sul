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