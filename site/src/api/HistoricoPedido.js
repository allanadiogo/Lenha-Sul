import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function HistoricoPedido (){
    const resposta = await api.get('/api/historicoPedido')
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