import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
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


export async function fotoPerfil(imagem, id){
    const formData = new FormData();
    formData.append('foto', imagem);

    const resposta = await api.put(`/usuario/${id}/foto`, formData,{
        headers:{
            "Content-Type": "multipart/form-data"
        },
    })
    return resposta.status
}

export function buscarfoto(imagem){
    return `${api.getUri()}/${imagem}`
}


export async function ListarPizzaSalgada(){
    const resposta = await api.get('/api/produtos/pizzasalgada')
    return resposta.data
}


export function buscarimagem(imagem){
    return `${api.getUri()}/${imagem}`
}


export async function buscarUsuarioPorId(id){
    const resposta = await api.get(`/usuario/${id}`)
    return resposta.data;
}  