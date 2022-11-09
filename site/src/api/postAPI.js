import { API_URL } from './config';

import axios from 'axios'
import { resolvePath } from 'react-router-dom';
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarProduto (categoria,nome, preco, ingredientes){
        const r = await api.post('/post/criar', {
                    categoria: categoria,
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

export async function ListarCategorias(){
    const resposta = await api.get('/api/ListarCategoria')
    return resposta.data
}

export async function CadastrarEndereco (rua, residencia, cep, bairro, complemento){
        const r = await api.post('/api/CadastrarEndereco', {
            rua: rua,
            residencia: residencia,
            cep: cep,
            bairro: bairro,
            complemento: complemento
        })

        return r.data;
}

export async function CadastrarCartao (numero, nome, vencimento, cvv, apelido, cpf){
    const r = await api.post('/api/CadastrarCartao', {
        numero: numero,
        nome: nome,
        vencimento: vencimento,
        cvv: cvv,
        apelido: apelido,
        cpf: cpf
        
    })

    return r.data;
}

export async function Pizzas(){
    const resposta = await api.get('/api/pizzas');
    return resposta.data;
}

export function buscarimagem(imagem){
    return `${api.getUri()}/${imagem}`
}

export async function ListarCategoriasNome (id){
    const resposta = await api.get('/api/nomeCategoria/' +id)
    return resposta
}