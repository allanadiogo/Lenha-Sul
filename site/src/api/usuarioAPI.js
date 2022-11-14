import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function EfetuarLogin (email,senha){
    const r = await api.post('/admin/login', {
                email: email,
                senha: senha
            
        });
        
        return r.data;
}

export async function EfetuarCadastro (nome,email,senha,telefone,cpf){
    const r = await api.post('/usuario/cadastro', {
        nome: nome,
        email: email,
        senha: senha,  
        telefone: telefone,
        cpf: cpf,
        
    });

    return r.data;
}

export async function loginUsuario (email, senha){
        const r = await api.post('/usuario/login', {
                email: email,
                senha: senha

        }  )

        return r.data;

}

export async function fotoPerfil(id, imagem){
    const formData = new FormData ();
    formData.append('foto', imagem);

    const resposta = await api.put(`/usuario/${id}/imagem`, formData,{
        headers:{
            "Content-type": "multipart/form-data"
        },
    });

    return resposta.status;
}