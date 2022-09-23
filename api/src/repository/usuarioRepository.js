import {con} from './connection.js'

export async function Login (email,senha){
    const comando = `
    SELECT id_admin       id,
       ds_email       Email
FROM tb_admins
WHERE ds_email          =?
AND   ds_senha          =?`

const [linhas] = await con.query(comando, [email,senha]);
return linhas[0]
}