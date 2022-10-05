import { MenuAzul2 } from '../../../components/menuazul';

import './index.scss';

export default function Index() {
    return (



        <main className='main-consultarprodutos'>

            <div>
                <MenuAzul2 />
            </div>


            <div className='div-itens-header'>

                <div className='div-agrupadora-header'>

                    <div className='div-row-header'>
                        <div className='div-img-header'>
                            <img className='img-logo-header' src='/assets/images/logodomenu.png' />
                        </div>

                        <div div-p-header>
                            <p className='p-header'>Consulta Rápida de Produtos</p>
                        </div>
                    </div>



                    <div className='div-input'>
                        <div className='div-input-header'>
                            <input className='input-header' placeholder='Digite o que procura' />
                        </div>
                    </div>


                </div>




                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Categoria</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Salgado</td>
                            <td>Mussarela</td>
                            <td>Queijo</td>
                            <td>26,00</td>
                        </tr>
                    </tbody>


                </table>


            </div>


        </main>
    )
}