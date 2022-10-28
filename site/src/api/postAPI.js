import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarProduto (nomeCat,nome, preco, ingredientes){
        const r = await api.post('/post/criar', {
                    nomeCat, nomeCat,
                    nome: nome,
                    preco:preco,
                    ingredientes:ingredientes
                    
        })

        return r.data;
}

export async function CarregarProdutos (){
    const resposta = await api.get('/api/listarProduto')
    return resposta.data
}
