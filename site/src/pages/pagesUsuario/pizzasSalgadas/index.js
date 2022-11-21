import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ListarPizzasSalgadas,  } from '../../../api/postAPI'
import { buscarimagem  } from '../../../api/usuarioAPI'



export default function Index() {

    const navigate = useNavigate();

    const [produto, setProduto] = useState([]);

    


    async function CarregarTodosPosts() {
        const resp = await ListarPizzasSalgadas();
        setProduto(resp);

    }

    useEffect(() => {
        CarregarTodosPosts();
      
    }, []);

    function LoginUsuario() {
        navigate('/loginUsuario');
    }

    function Carrinho() {
        navigate('/carrinho');
    }

    console.log(produto);




    return (
        <main className='PizzaS-Main'>

            <header className='header-menu-usuario'>

                <div className='div-cabecalho'>

                    <div className='div-cabecalho-opcoes'>
                        <a href='/' className='a-header-menu-usuario'>Home</a>
                    </div>

                    <div className='div-img-cabecalho-logo'>
                        <img className='imagem-logo-menu-usuario' src="/assets/images/logohome1.png" />
                    </div>
                </div>


                <div className='div-cabecalho-direita'>

                    <div className='numero-cabecalho'>
                        <p className='p-cima-numero'>Entre em contato conosco</p>
                        <p className='p-baixo-numero'>(99)-999 999 999</p>
                    </div>


                    <div className='div-row-icons'>
                        <div className='div-icons-header' onClick={LoginUsuario}>
                            <img className='imagem-header-icon1' src='/assets/images/usuario.png' />
                        </div>
                        <div className='div-icons-header' onClick={Carrinho}>
                            <img className='imagem-header-icon2' src='/assets/images/carrinho.png' />
                        </div>
                    </div>
                </div>
            </header>

            <div className='div-pizzas-salgadas'>
                <h1 className='Pizzas-Salgadas'> Pizzas Salgadas </h1>
            </div>

            <section className='Pizza'>


          {produto.map(item =>
                <div className='container'>
                     
                        <div className='item'>
                            <img src= {buscarimagem(item.imagem)}  className='Imagens' />
                            <h1 className='nome'>{item.nome}</h1>
                           

                            <div className='div-p-descricao-pizzas'>
                                <p className='p-descricao-pizzas'>{item.ingredientes}</p>
                            </div>

                            <div className='botao-valor'>
                                <button className='botao-adicionar'> Adicionar</button>
                                <h1 className='valor'>por R${item.preço}</h1>
                            </div>
                        </div>
                       
                </div>
                 )}

                
                </section>

           
        </main>
    )
}