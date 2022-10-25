import './index.scss';

import { MenuAzul2 } from '../../../components/menuazul';

export default function Index() {
    return (
        <main className='main-historico-pedidos'>

            <div className='div-row-historico'>
                <div>
                    <MenuAzul2 />
                </div>

                <div className='div-mae-lado-direito'>

                    <div className='div-row-logo'>

                        <img className='img-logo-historico' src='/assets/images/logodomenu.png' />

                        <p className='p-logo-historico'>Histórico de Pedidos</p>

                    </div>
                    <div className='div-tabela'>
                        <table className='tag-table-historico'>
                            <thead className='tag-historico-thead'>
                                <tr className='tag-historico-tr'>
                                    <th className='th-tag-historico'>Pedidos</th>
                                    <th className='th-tag-historico'>Realizado em</th>
                                    <th className='th-tag-historico'>Cliente</th>
                                    <th className='th-tag-historico'>Endereço</th>
                                    <th className='th-tag-historico'>Produto</th>
                                    <th className='th-tag-historico'>Pagamento</th>
                                    <th className='th-tag-historico'>Valor</th>
                                </tr>
                            </thead>

                            <tbody className='tag-historico-tbody'>
                                <tr className='tag-historico-tr'>
                                    <td className='tag-historico-td'>1</td>
                                    <td className='tag-historico-td'>Exemplo</td>
                                    <td className='tag-historico-td'>Exemplo</td>
                                    <td className='tag-historico-td'>Exemplo</td>
                                    <td className='tag-historico-td'>Exemplo</td>
                                    <td className='tag-historico-td'>Exemplo</td>
                                    <td className='tag-historico-td'>Exemplo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </main>
    )
}