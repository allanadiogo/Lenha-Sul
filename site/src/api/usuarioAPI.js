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

export async function EfetuarCadastro (nome,email,senha,nascimento,telefone,cpf){
    const r = await api.post('/usuario/cadastro', {
        nome: nome,
        email: email,
        senha: senha,
        nascimento: nascimento,
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

        
}