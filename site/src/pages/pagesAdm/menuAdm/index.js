import './index.scss';
import { MenuAzul2 } from '../../../components/Componente-Barra(2)';

export default function Index() {
    return (
        <main className='Div-menuAdm'>
            <div>
                <MenuAzul2 />
            </div>

            <section className='section-menuadm'>

                <div className='Bem-Vindo'>
                    <h1 className='Bem-Vindo-Texto'>Bem-vindo</h1>
                </div>




                <div className="Div-Primeira-Fileira-Balão">

                    <div className="Primeiro-Balão">
                        <div>
                            <img className="Imagem-Primeiro-Balão" src="../assets/images/image 103.png" alt="" />
                        </div>

                        <div className="Div-P">
                            <p>Consultar pedidos</p>
                            <p className="p-margin-primeiro-balão">pendentes</p>
                        </div>
                    </div>



                    <div className="Segundo-Balão">
                        <div>
                            <img className="Imagem-Segundo-Balão" src="../assets/images/Order History.png" alt="" />
                        </div>

                        <div className="Div-P">
                            <p>Consultar histórico</p>
                            <p className="p-margin-segundo-balão">de pedidos</p>
                        </div>
                    </div>



                </div>




                <div className="Div-Segunda-Fileira-Balão">

                    <div className="Terceiro-Balão">
                        <div>
                            <img className="Imagem-Terceiro-Balão" src="../assets/images/Plus.png" alt="" />
                        </div>

                        <div className="Div-P">
                            <p>Adicionar Produto</p>
                        </div>
                    </div>



                    <div className="Quarto-Balão">
                        <div>
                            <img className="Imagem-Quarto-Balão" src="../assets/images/Search.png" alt="" />
                        </div>

                        <div className="Div-P">
                            <p>Consultar produtos</p>
                        </div>
                    </div>



                </div>


            </section>
        </main>

    )
}