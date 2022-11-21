import './index.scss'
import { useEffect, useState } from 'react';
import Storage from 'local-storage';
 import { buscarProdutoPorId } from '../../../api/produtoAPI.js';
import CarrinhoItem from '../../../components/carrinhoItem1';
import { useNavigate } from 'react-router-dom';



export default function Carrinho() {

    const [itens, setItens] = useState([]);
    const navigate = useNavigate();

    function irPedido() {
        navigate('/pedido');
    }




    function qtdItens() {
        return itens.length;
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
    }


    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }


    async function carregarCarrinho() {
        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                 let p = await buscarProdutoPorId(produto.id);

                temp.push({
                     produto: p,
                    qtd: produto.qtd
                })
            }

            setItens(temp);
        }

    }

    useEffect(() => {
        carregarCarrinho();
    }, [])


    return (
        <main className='main-carrinho'>

            <header className='header-carrinho'>
                <div className='div-row-header-logo'>
                    <div className='div-header-logo'>
                        <img className='imagem-logo-header' src="/assets/images/logohome1.png" />
                    </div>


                    <div className='div-header-botoes'>
                        <a className='a-header-botoes'>Home</a>
                        <a className='a-header-botoes'>Menu</a>
                    </div>
                </div>

                <h1>Carrinho</h1>

            </header>

   

            <section className='section-carrinho'>

                <div className='card'>

                    {itens.map(item =>
                        <CarrinhoItem
                            item={item}
                            removerItem={removerItem}
                            carregarCarrinho={carregarCarrinho} />
                    )}
                </div>


                <div className='informacoes'>
                    <p className='p-1'> Subtotal </p>
                    <p className='p-2'> ({qtdItens()} itens) </p>
                    <p className='p-3'> R$ {calcularValorTotal()} </p>
                    <button onClick={irPedido}> Fechar Pedido </button>
                </div>

            </section>

           
        </main>
    );}