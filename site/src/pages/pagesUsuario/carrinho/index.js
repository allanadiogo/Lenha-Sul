import './index.scss';

export default function Index(){
    return(<main className='main-carrinho'>
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

        <div className='div-input-header'>
            <input className='input-pesquisar' type="text" placeholder='Digite o que procura' />
        </div>
    </header>

    <section className='section-carrinho'>
        <div className='div-primeira-fileira'>
            <div className='div-p-produto'>
                <p className='p-produto'>Produto</p>
            </div>

            <div className='div-espacamento-info'>
                <div className='div-p-preco-unitario'>
                    <p className='p-preco-unitario'>Preço Unitário</p>
                </div>

                <div className='div-quantidade'>
                    <p className='p-quantidade'>Quantidade</p>
                </div>

                <div className='div-excluir'>
                    <p className='p-excluir'>Excluir</p>
                </div>
            </div>
        </div>


        <div className='div-produtos'>
            <p>AQUI VAI FICAR OS PRODUTOS</p>
        </div>

        <div className="div-segunda-fileira">
            <div className='div-total-itens'>
                <p className='p-total-itens'>Total de itens:</p>
            </div>
            <div className='div-p-calcular'>
                <p className='p-calcular'>Calcular</p>
            </div>
            <div className='div-p-total'>
                <p className='div-p-total'>Total:</p>
            </div>
        </div>

        <div className='div-terceira-fileira'>
            <div className='div-button-continuar'>
                <button className='button-comprar'>Continuar comprando</button>
            </div>
            <div className='div-button-finalizar'>
                <button className='button-finalizar'>Finalizar compra</button>
            </div>
        </div>

    </section>
</main>
 )
}