import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function Index() {
    const navigate = useNavigate();

    function LoginUsuario() {
        navigate('/loginUsuario');
    }

    function Carrinho() {
        navigate('/carrinho');
    }

    return (
        <main className='Bebidas-Main'>
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

            <div className='div-bebidas'>
                <h1 className='texto-bebidas'> Bebidas </h1>
            </div>

            <section className='Bebidas'>

                <div className='container'>
                    <div className='item'>
                        <img className='Imagens' src={require('../../../assets/images/bebida 9.png')} />
                        <h1 className='nome'> Água Crystal</h1>


                        <div className='div-p-descricao-bebidas'>
                            <p className='p-descricao-bebidas'>600ml</p>
                        </div>

                        <div className='botao-valor'>
                            <button className='botao-adicionar'> Adicionar</button>
                            <h1 className='valor'>por R$ 3,00</h1>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='item'>
                        <img className='Imagens' src={require('../../../assets/images/bebida 9.png')} />
                        <h1 className='nome'> Água Crystal</h1>


                        <div className='div-p-descricao-bebidas'>
                            <p className='p-descricao-bebidas'>600ml</p>
                        </div>

                        <div className='botao-valor'>
                            <button className='botao-adicionar'> Adicionar</button>
                            <h1 className='valor'>por R$ 3,00</h1>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='item'>
                        <img className='Imagens' src={require('../../../assets/images/bebida 9.png')} />
                        <h1 className='nome'> Água Crystal</h1>


                        <div className='div-p-descricao-bebidas'>
                            <p className='p-descricao-bebidas'>600ml</p>
                        </div>

                        <div className='botao-valor'>
                            <button className='botao-adicionar'> Adicionar</button>
                            <h1 className='valor'>por R$ 3,00</h1>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='item'>
                        <img className='Imagens' src={require('../../../assets/images/bebida 9.png')} />
                        <h1 className='nome'> Água Crystal</h1>


                        <div className='div-p-descricao-bebidas'>
                            <p className='p-descricao-bebidas'>600ml</p>
                        </div>

                        <div className='botao-valor'>
                            <button className='botao-adicionar'> Adicionar</button>
                            <h1 className='valor'>por R$ 3,00</h1>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='item'>
                        <img className='Imagens' src={require('../../../assets/images/bebida 9.png')} />
                        <h1 className='nome'> Água Crystal</h1>


                        <div className='div-p-descricao-bebidas'>
                            <p className='p-descricao-bebidas'>600ml</p>
                        </div>

                        <div className='botao-valor'>
                            <button className='botao-adicionar'> Adicionar</button>
                            <h1 className='valor'>por R$ 3,00</h1>
                        </div>
                    </div>
                </div>

            
    
            </section>
        </main>
    )
}