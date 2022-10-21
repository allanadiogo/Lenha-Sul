import './index.scss'
import RodapeMenu from '../../../components/rodape-menu'
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

    const carrossel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;

    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carrossel.current.scrollLeft += carrossel.current.offsetWidth;


    };


    return (
        <main className='main-menu-usuario'>
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


            <section className='section-menu-usuario'>

                <div className='div-propaganda-menu-usuario'> </div>




                <div className='div-mae-opcoes'>

                    <a href='/pizzasSalgadas' className='div-opcao-salgada'>
                        <img src={require('../../../assets/images/salgada.png')} />
                        <div className='div-p-opcao'>
                            <p className='p-opcao1'>Pizzas Salgadas</p>
                        </div>
                    </a>

                    <a href='/pizzasDoces' className='div-opcao-doce'>
                        <img src={require('../../../assets/images/doce.png')} />
                        <div className='div-p-opcao'>
                            <p className='p-opcao2'>Pizzas Doces</p>
                        </div>
                    </a>

                    <a href='/Bebidas' className='div-opcao-bebidas'>
                        <img src={require('../../../assets/images/bebidas.png')} />
                        <div className='div-p-opcao'>
                            <p className='p-opcao3'>Bebidas</p>
                        </div>
                    </a>

                </div>
            </section>

            <section className='rodape-menu'>

                <RodapeMenu />


            </section>

        </main>
    )
}
