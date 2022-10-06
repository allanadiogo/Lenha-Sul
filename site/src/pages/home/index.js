import './index.scss'

import { useNavigate } from 'react-router-dom';

import logohome1 from '../../assets/images/logohome1.png';
import usuario from '../../assets/images/usuario.png';
import carrinho from '../../assets/images/carrinho.png';
import pizza from '../../assets/images/PizzaGigante.png';
import iolo from '../../assets/images/homiver.png'

import Carrossel from '../../components/homeComponent2'
import Rodape from '../../components/roda-pe'


export default function Index() {

    const navigate = useNavigate();

    function LoginUsuario() {
        navigate('/loginUsuario');
    }

    function Carrinho() {
        navigate('/carrinho');
    }



    return (
        <main className="main-home">
            <section className="parte-1">

                <header className="menu-home">

                    <div className="logo1-home" >
                        <img src="/assets/images/logohome1.png" />
                    </div>

                    <div className='menu-text'>

                        <li className='li1'>
                            <a href='#home' className='lin-1' >Home</a>
                        </li>
                        <li className='li1'>
                            <a href='/menuusuario' className='lin-1'>Menu</a>
                        </li>
                        <li className='li1'>
                            <a href='#mapa' className='lin-1'>Localização</a>
                        </li>


                    </div>

                    <div className="numero">
                        <p className="conosco">Entre em contato conosco </p>
                        <p className="nume">(99) 999 999 999</p>
                    </div>

                    <div className="icons-menu">

                        <div className='loginUsuario' onClick={LoginUsuario}>
                            <img src="/assets/images/usuario.png" />
                        </div>

                        <div className='carrinho' onClick={Carrinho}>
                            <img src="/assets/images/carrinho.png" />
                        </div>

                    </div>
                </header>

                <div className='parte-pizza' id='home'>
                    <div className="pizza" >
                        <img src="/assets/images/PizzaGigante.png" />
                    </div>

                    <div className='texto-1' >

                        <h1 className='text-home' >
                            <font color="#ff6900">FIM DE </font>
                            SEMANA
                            COMBINA
                            <font color="#ff6900"> COM PIZZA </font>
                        </h1>

                        <div className="texto-2">
                            <p>Terça a Quinta das 17:30h até 23:40h Sexta a Domingo das 17:30h até 1:10h </p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="parte-2">

                <div className="textos">

                    <h1 className="text-3">  DÊ FOLGA AO <font color="#ff6900">FOGÃO.</font> </h1>
                    <h1 className="text-3">  PEÇA UMA <font color="#ff6900">PIZZA!</font> </h1>


                    <p className="text-4"> Entrega rápida para toda  região</p>

                    <p className="text-5"> peça uma pizza!!</p>

                </div>

                <div className="iolo">

                    <img src="/assets/images/homiver.png" />
                </div>

            </section>

            <section className="parte-3">
                <Carrossel />
            </section>

            <section className='parte-4'>
                <div className='textos-4'>
                    <h1 className='titulo-4'>Vantagens de comer pizzas do Lenha Sul</h1>

                    <div className='checks-textos'> <img src="/assets/images/checkver.png" />Nossas pizzas contém ingredientes selecionados. </div>
                    <div className='checks-textos' ><img src="/assets/images/checkver.png" />Temos cuidado no preparo. </div>
                    <div className='checks-textos-massa' ><img src="/assets/images/checkver.png" />A massa é com receita secreta crocante e saborosa.</div>
                    <div className='checks-textos'> <img src="/assets/images/checkver.png" />Utilizamos o verdadeiro catupiry. </div>
                    <div className='checks-textos-delivery' ><img src="/assets/images/checkver.png" />Nosso delivery entrega em todas as regiões do extremo da zona sul.</div>
                </div>

                <div className='foto'>
                    <img src="/assets/images/foto-loja.png" />

                </div>
            </section>

            <section className='parte-5'>

                <div className='parte-5-texts'>
                    <img src='/assets/images/celular.png' />
                    <div className='texts-5'>
                        <h1 className='parte-5-text1'>Do celular para</h1>
                        <h1 className='parte-5-text2'>sua casa</h1>
                    </div>
                </div>
            </section>

            <section className='parte-6' id='mapa'>
                <h1 className='text-local'>Estamos Localizados : 1200 Park Avenue, Emeryville, Califórnia, São Paulo</h1>
                <a className='mapa' href='https://g.page/disney-pixars-hd-4dx?share'> <img src='/assets/images/mapa.png' /> </a>

            </section>

            <section className='parte-7'>
                <Rodape />
            </section>

        </main>
    )
}

