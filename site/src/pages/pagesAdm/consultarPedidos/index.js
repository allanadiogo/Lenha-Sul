import { MenuAzul2 } from '../../../components/menuazul';


import { HistoricoPedido, HistoricoEndereco, HistoricoProduto } from '../../../api/HistoricoPedido';

import './index.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

export default function Index() {
    const[pedido,setPedido] = useState([])
    const[endereco, setEndereco] = useState([])
    const[produto,setProduto] = useState([])
    
    const navigate = useNavigate();

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
                                {pedido.map(item => 
                              <td className='td-pedidos'>{item.PedidoNum}</td>
                              
                            )}


                            {pedido.map(item => 
                              <td className='td-pedidos'>{item.DataDoPedido}</td>
                              
                            )} 


                           {pedido.map(item => 
                              <td className='td-pedidos'>{item.QualCliente}</td>
                              
                            )} 

                            {endereco.map(item => 
                              <td className='td-pedidos'>{item.Endereço}</td>
                              
                            )}

                            {produto.map(item => 
                              <td className='td-pedidos-produto'>{item.Produto}</td>
                              
                            )}

                            {pedido.map(item => 
                              <td className='td-pedidos'>{item.tipoPagamento}</td>
                              
                            )}

                            {produto.map(item => 
                              <td className='td-pedidos'>{item.Valor}</td>
                              
                            )}
                                <td className='td-pedidos-acoes'>
                                    <div className='img-tabela'>
                                        <div className='div-img-tabela'>
 
                                        </div>
                                        <div className='div-img-tabela'>
                    
                                        </div>
                                        <div className='div-img-tabela'>
                                       
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