import './index.scss';
import { Barraazulmenu } from '../../../components/barraazulmenu';

export default function Index() {
    return (
        <main className='Div-menuAdm'>
           
           <div>
             <Barraazulmenu/>
           </div>
   

            <section className='section-menuadm'>

                <div className='Bem-Vindo'>
                    <h1 className='Bem-Vindo-Texto'>Bem-vindo</h1>
                </div>




                <div className="Div-Primeira-Fileira-Balão">

                    <a href='/consultarPedidos' className="Primeiro-Balão">
                        <div>
                            <img className="Imagem-Primeiro-Balão" src="/assets/images/image103.png" alt="" />
                        </div>

                        <div  className="Div-P">
                            <p>Consultar pedidos</p>
                            <p className="p-margin-primeiro-balão">pendentes</p>
                            
                        </div>
                    </a>



                    <a href='/historicoPedidos'className="Segundo-Balão">
                        <div>
                            <img className="Imagem-Segundo-Balão" src="/assets/images/image104.png" alt="" />
                        </div>

                        <div className="Div-P">
                            <p>Consultar histórico</p>
                            <p className="p-margin-segundo-balão">de pedidos</p>
                        </div>
                    </a>



                </div>




                <div className="Div-Segunda-Fileira-Balão">

                    <a href='/cadastrarProduto' className="Terceiro-Balão">
                        <div>
                            <img className="Imagem-Terceiro-Balão" src="/assets/images/image105.png" alt="" />
                        </div>

                        <div className="Div-P">
                            <p>Adicionar Produto</p>
                        </div>
                    </a>



                    <a href='/consultarProdutos' className="Quarto-Balão">
                        <div>
                            <img className="Imagem-Quarto-Balão" src="/assets/images/image106.png" alt="" />
                        </div>

                        <div className="Div-P">
                            <p>Consultar produtos</p>
                        </div>
                    </a>



                </div>


            </section>
        </main>

    )
}