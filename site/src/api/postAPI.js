import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarProduto (nome, preco, ingredientes){
        const r = await api.post('/post/criar', {
                    nome: nome,
                    preco:preco,
                    ingredientes:ingredientes
                    
        })

        return r.data;

}
