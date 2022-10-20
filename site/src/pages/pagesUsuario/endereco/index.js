import './index.scss';

export default function Index(){
    return(
        <main className='main-endereco'>
            <header className='header-carrinho'>
                <div className='div-img-cabecalho-logo'>
                    <img className='imagem-logo-endereco' src='/assets/images/logodomenu.png' />
                </div>

                <div>
                    <div className='div-cabecalho-opcoes'>
                        <a className='a-header-endereco-botao'>Home</a>
                    </div>
                    <div className='div-icon-header'>
                        <img className='imagem-header-icon' src='/assets/images/' />
                    </div>
                </div>
            </header>

            <div className='div-h1-carrinho'>
                <h1 className='h1-adicionar'>
                    Adicionar endereço de envio
                </h1>
            </div>

            <section className='section-inputs'>
                <div className='div-primeiro-input'>
                    <label>Rua:</label>
                    <input></input>
                </div>
                <div className='div-2/3-input'>
                    <label>Número de Residencia:</label>
                    <input></input>
                    <label>CEP:</label>
                    <input></input>
                </div>
                <div className='div-quarto-input'>
                    <label>Bairro:</label>
                    <input></input>
                </div>
                <div className='div-quinto-input'>
                    <label>Complemento"Opcional":</label>
                    <input></input>
                </div>

                <button>Enviar</button>
            </section>
        </main>
    )
}