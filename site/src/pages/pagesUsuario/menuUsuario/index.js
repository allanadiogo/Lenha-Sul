import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function Index() {
    return (
        <main className='main-menu-usuario'>
            <header className='header-menu-usuario'>
                <div className='div-cabecalho'>

                    <div className='div-cabecalho-opcoes'>
                        <a className='a-header-menu-usuario'>Home</a>
                        <a className='a-header-menu-usuario'>Pizzaria</a>
                    </div>

                    <div className='div-img-cabecalho-logo'>
                        <img className='imagem-logo-menu-usuario' src='/assets/images/logodomenu.png' />
                    </div>
                </div>


                <div className='div-cabecalho-direita'>
                    <div className='div-collum-header'>
                        <div className='numero-cabecalho'>
                            <p className='p-cima-numero'>Entre em contato conosco</p>
                            <p className='p-baixo-numero'>11-999 999 999</p>
                        </div>
                    </div>

                    <div className='div-row-icons'>
                        <div className='div-icons-header'>
                            <img className='imagem-header-icon' src='/assets/images/' />
                        </div>
                        <div className='div-icons-header'>
                            <img className='imagem-header-icon' src='/assets/images/' />
                        </div>
                    </div>
                </div>
            </header>


            <section className='section-menu-usuario'>

                <div className='div-imagem-grande-menu-usuario'>
                    <img className='img-grande' src='/assets/images/'></img>
                </div>


                <div className='div-mae-opcoes'>

                    <div className='div-opcao-salgada'>
                        <img className='img-opcao' src="/assets/images/" alt="" />
                        <div className='div-p-opcao'>
                            <p className='p-opcao'>Pizzas Salgadas</p>
                        </div>
                    </div>

                    <div className='div-opcao-doce'>
                        <img className='img-opcao' src="/assets/images/" alt="" />
                        <div className='div-p-opcao'>
                            <p className='p-opcao'>Pizzas Doces</p>
                        </div>
                    </div>

                    <div className='div-opcao-bebidas'>
                        <img className='img-opcao' src="/assets/images/" alt="" />
                        <div className='div-p-opcao'>
                            <p className='p-opcao'>Bebidas</p>
                        </div>
                    </div>

                </div>
            </section>

            <section>

                <div className='div-estamos-lugares'>
                    <div className='div-p-lugares'>
                        <p className='p-lugares'>Estamos no:</p>
                    </div>

                    <div className='div-row-onde-estamos'>

                        <div className='div-img-lugares'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-lugares'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-lugares'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-lugares'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-lugares'>
                            <img src="/assets/images" alt="" />
                        </div>

                    </div>
                </div>


                <div className='div-formas-pagamento'>

                    <div className='div-p-pagamento'>
                        <p className='p-pagamento'>Formas de Pagamento:</p>
                    </div>

                    <div className='div-row-formas-pagamento'>

                        <div className='div-img-pagamento'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-pagamento'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-pagamento'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-pagamento'>
                            <img src="/assets/images" alt="" />
                        </div>

                        <div className='div-img-pagamento'>
                            <img src="/assets/images" alt="" />
                        </div>

                    </div>
                </div>

            </section>


            <footer className='footer'>
                <div>
                    <img src='../../../assets/images/logo.png' alt="" />
                </div>

                <div>
                    <div>
                        <img src="/assets/images" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images" alt="" />
                    </div>
                </div>
            </footer>

        </main>
    )
}
