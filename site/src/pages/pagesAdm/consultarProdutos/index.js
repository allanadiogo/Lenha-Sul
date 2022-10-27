import { MenuAzul2 } from '../../../components/menuazul';
import { CarregarProdutos } from '../../../api/postAPI'
import './index.scss';
import { useState } from 'react';

export default function Index() {
    const[produto,SetProduto] = useState([])
    function CarregarProdutoos (){
        const resposta = CarregarProdutoos();
        SetProduto(resposta.data)
    }

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




                <table className='tag-table'>

                    <thead className='tag-thead'>
                        {produto.map((item) =>{
                        <tr className='tag-tr'>
                        <th className='th-tag'>{item.id}</th>
                        <th className='th-tag'>Categoria</th>
                        <th className='th-tag'>`{item.NomeProduto}`</th>
                        <th className='th-tag'>Descrição</th>
                        <th className='th-tag'>Valor</th>
                    </tr>
                        })}
                    </thead>

                    <tbody className='tag-tbody'>
                        <tr className='tr-mudarcor'>
                            <td className='tag-td'>1</td>
                            <td className='tag-td'>Exemplo</td>
                            <td className='tag-td'>Exemplo</td>
                            <td className='tag-td'>Exemplo</td>
                            <td className='tag-td'>Exemplo</td>
                        </tr>
                    </tbody>


                </table>


            </div>


        </main>
    )
}