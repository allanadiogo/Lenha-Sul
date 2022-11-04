import './index.scss';

import { MenuAzul2 } from '../../../components/menuazul';
import { HistoricoPedido, HistoricoEndereco, HistoricoProduto } from '../../../api/HistoricoPedido';


import { useState, useEffect } from 'react';

export default function Index() {
    const[pedido,setPedido] = useState([])
    const[endereco, setEndereco] = useState([])
    const[produto,setProduto] = useState([])
    console.log(produto)

    async function HistoricoPedidoo (){
        const resposta = await HistoricoPedido();
        setPedido(resposta)
    }

    async function HistoricoEnderecoo () {
        const resposta = await HistoricoEndereco();
        setEndereco(resposta)
    }

    async function HistoricoProdutoo () {
        const resposta = await HistoricoProduto();
        setProduto(resposta)
    }

    

    useEffect(()=>{
        HistoricoPedidoo()
        HistoricoEnderecoo()
        HistoricoProdutoo()
    },[])

    
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
                                    
                            {pedido.map(item => 
                              <td className='tag-historico-td'>{item.PedidoNum}</td>
                              
                            )}


                            {pedido.map(item => 
                              <td className='tag-historico-td'>{item.DataDoPedido}</td>
                              
                            )} 


                           {pedido.map(item => 
                              <td className='tag-historico-td'>{item.QualCliente}</td>
                              
                            )} 

                            {endereco.map(item => 
                              <td className='tag-historico-td'>{item.Endereço}</td>
                              
                            )}

                            {produto.map(item => 
                              <td className='tag-historico-td-produto'>{item.Produto}</td>
                              
                            )}

                            {pedido.map(item => 
                              <td className='tag-historico-td'>{item.tipoPagamento}</td>
                              
                            )}

                            {produto.map(item => 
                              <td className='tag-historico-td'>{item.Valor}</td>
                              
                            )}

                                    
                                   
                                </tr>

                            


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </main>
    )
}