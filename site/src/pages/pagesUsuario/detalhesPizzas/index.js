import './index.scss';

export default function Index() {
    return (
        <main className='main-pagina-detalhes-pizza'>

            <div className='div-primeira-detalhes'>

                <header className='header-detalhes-pizza'>
                    <div className='div-cabecalho'>
                        <div className='div-img-cabecalho-logo'>
                            <img className='imagem-logo-detalhes' src='/assets/images/logodomenu.png' />
                        </div>

                        <div className='div-cabecalho-opcoes'>
                            <a className='a-header-detalhes-pizza'>Home</a>
                            <a className='a-header-detalhes-pizza'>Pizzaria</a>
                            <a className='a-header-detalhes-pizza'>Menu</a>
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

                <div className='div-row-conteudo-detalhe'>

                    <div className='div-lado-esquerdo'>

                        <div className='div-h1-detalhe'>
                            <h1 className='h1-detalhe'>Detalhes:</h1>
                        </div>

                        <div className='div-imagem-pizza'>
                            <img className='imagem-detalhes-pizza' src='/assets/images/logodomenu.png' />
                        </div>

                    </div>

                    <div className='div-lado-direito'>
                        <div className='div-h3-sabor'>
                            <h3 className='h3-sabor'>
                                Sabor:
                            </h3>
                        </div>

                        <div className='div-p-lado-esquerdo'>
                            <p className='p-detalhes-lado-esquerdo'>Exemplo com exemplo</p>
                        </div>

                        <div className='div-h3-tipo'>
                            <h3 className='h3-tipo'>
                                Tipo:
                            </h3>
                        </div>

                        <div className='div-p-lado-esquerdo'>
                            <p className='p-detalhes-lado-esquerdo'>categoria da braba</p>
                        </div>

                        <div className='div-h3-ingredientes'>
                            <h3 className='h3-ingredientes'>
                                Ingredientes:
                            </h3>
                        </div>

                        <div className='div-p-lado-esquerdo'>
                            <p className='p-detalhes-lado-esquerdo'>Detalhes dos ingredientes</p>
                        </div>

                        <div className='div-h3-valor'>
                            <h3 className='h3-valor'>
                                R$00,00
                            </h3>
                        </div>

                        <button className='button-adicionar-carrinho'>
                            Adicionar ao Carrinho
                        </button>


                        <div className='div-formas-pagamento'>
                            <div>
                                <h3>Formas de Pagamento:</h3>
                            </div>
                            <div className='div-row-formas-pagamento'>
                                <div>~img~</div>
                                <div>~img~</div>
                                <div>~img~</div>
                                <div>~img~</div>
                                <div>~img~</div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>



        </main>
    )
}