import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarProduto (nome, preco, ingredientes, categoria){
        const r = await api.post('/post/criar', {
                    nome: nome,
                    preco:preco,
                    tipo:tipo,
                    ingredientes:ingredientes,
                    categoria:categoria
        })

        return r.data;

}
