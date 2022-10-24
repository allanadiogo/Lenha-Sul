import './index.scss';

export default function Index(){
    return(
        <main className='main-endereco'>
            <header className='header-carrinho'>
               
                <div className='logo-home-endereco'>
                <img className="endereco-usuario-logo" src="/assets/images/logoroda.png" />
                <a href='/' className="botao-home-endereco" >Home</a>
                <img src='/assets/images/carrinho.png'/>
            </div>

        
            </header>

            <div className='div-h1-carrinho'>
                <h1 className='h1-adicionar'>
                    Adicionar endereço de envio
                </h1>
            </div>

            <section className='section-inputs'>
                <div className='div-inputs'>
                    <label className='labels-inputs'>Rua:</label>
                    <input className='input-maior-endereco'></input>
                </div>
                
                
                
                <div className='div-pequenos-inputs'>
                   <div className='pequeno-input-1'>
                    <label className='labels-inputs'>Número de Residencia:</label>
                    <input className='input-menor-endereco'></input>
                    </div>
                   
                    <div className='pequeno-input-1'>
                    <label className='labels-inputs'>CEP:</label>
                    <input className='input-menor-endereco'></input>
</div>
            
                </div>
               
               
               
                <div className='div-inputs'>
                    <label className='labels-inputs'>Bairro:</label>
                    <input className='input-maior-endereco'></input>
                </div>
                <div className='div-inputs'>
                    <label className='labels-inputs'>Complemento (opcional):</label>
                    <input className='input-maior-endereco'></input>
                </div>

                <button className='botao-enviar-endereco'>Enviar</button>
            </section>
        </main>
    )
}