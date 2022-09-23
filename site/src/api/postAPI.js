import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export function CadastrarPizza(nome, preco, ingredientes, categoria){
        const r = await api.post('/post/criar', {
                    nome: nome,
                    preco:preco,
                    tipo:tipo,
                    ingredientes:ingredientes,
                    categoria:categoria
        })

        return r.data;

}

export async function enviarimagem (id, imagem){
    const formData = new FormData();
    formData.append('imgpet', imagem);
    
    const resposta = await api.put(`/post/${id}/imagem` , formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function listarCategorias() {
    const r = await api.get('/api/categoria');
    return r.data;
}

export function buscarimagem(imagem){
    return `${api.getUri()}/${imagem}`
}

export function CaregoriaPizza()