import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function HistoricoPedido (){
    const resposta = await api.get('/api/HistoricoPedido')
    return resposta.data
}

export async function HistoricoEndereco (){
    const resposta = await api.get('/api/HistoricoEndereco')
    return resposta.data
}

export async function HistoricoProduto (){
    const resposta = await api.get('/api/HistoricoProduto')
    return resposta.data
}