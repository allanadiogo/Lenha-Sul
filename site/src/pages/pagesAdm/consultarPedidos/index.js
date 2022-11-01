import { MenuAzul2 } from '../../../components/menuazul';

import './index.scss';

export default function Index() {
    return (
        <main className='main-pedidos'>

            <div className='div-row-pagina'>

                <div>
                    <MenuAzul2 />
                </div>


                <div className='div-teste'>

                    <div className='div-row-cima'>
                        <div className='div-img-logo'>
                            <img className='img-logo' src='/assets/images/logodomenu.png' />
                        </div>

                        <div className='div-p-logo'>
                            <p className='p-logo'>Pedidos Pendentes</p>
                        </div>
                    </div>

                    <table className='table-pedidos'>

                        <thead className='thead-pedidos'>
                            <tr className='tr-pedidos'>
                                <th className='th-pedidos'>Pedido</th>
                                <th className='th-pedidos'>Realizado em</th>
                                <th className='th-pedidos'>Cliente</th>
                                <th className='th-pedidos'>Endereço</th>
                                <th className='th-pedidos'>Produto</th>
                                <th className='th-pedidos'>Pagamento</th>
                                <th className='th-pedidos'>Valor</th>
                                <th className='th-pedidos'>Ações</th>
                            </tr>
                        </thead>

                        <tbody className='tbody-pedidos'>
                            <tr className='tr-campos'>
                                <td className='td-pedidos'>1</td>
                                <td className='td-pedidos'>Exemplo</td>
                                <td className='td-pedidos'>Exemplo</td>
                                <td className='td-pedidos'>Exemplo</td>
                                <td className='td-pedidos'>Exemplo</td>
                                <td className='td-pedidos'>Exemplo</td>
                                <td className='td-pedidos'>Exemplo</td>
                                <td className='td-pedidos-acoes'>
                                    <div className='img-tabela'>
                                        <div className='div-img-tabela'>
 
                                        </div>
                                        <div className='div-img-tabela'>
                    
                                        </div>
                                        <div className='div-img-tabela'>
                                       <img src='./images/a.png'> </img>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>


                    </table>


                </div>


            </div>












        </main>
    )
}