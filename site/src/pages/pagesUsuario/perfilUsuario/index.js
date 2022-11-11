import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ListarPerfil } from '../../../api/postAPI'


import Menuamarelousu from '../../../components/menuamarelo'
import './index.scss'

export default function Index() {
    const [usuario, setUsuario] = useState([])

    const id = 1;

    const navigate = useNavigate();


    async function ListarPerfiil() {
        const resposta = await ListarPerfil();
        setUsuario(resposta)
    }




    console.log(usuario)



    return (
        <main className='main-perfil'>

            <Menuamarelousu />

            <section className='section-perfil'>

                <div className='div-perfil'>

                    <div className='div-foto-perfil'>
                        <img src='/assets/images/editarimg.png' />
                        <img src='/assets/images/homemper.png' />


                        <button className='botao-salvar-perfil'>Salvar</button>

                    </div>


                    <div className='spans'>
                        <div className='perfil'>
                            <h1 className='titulo-input-perfil'>Nome:{usuario}</h1>

                        </div>

                        <div className='perfil'>

                            <h1 className='titulo-input-perfil'>Email:</h1>

                        </div>


                        <div className='perfil'>
                            <h1 className='titulo-input-perfil'>Telefone:</h1>
                            
                            <span>aa</span>    
                            
                        </div>
                    </div>

                </div>
            </section>





        </main>



    )
}