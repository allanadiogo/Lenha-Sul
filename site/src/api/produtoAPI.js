import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function CadastrarProduto(nome, preco, categoria) {
    const r = await api.post('/admin/produto', { nome, preco, categoria });
    return r.data;
}