import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import Menuamarelousu from '../../../components/menuamarelo'
import './index.scss'

export default function Index() {
    const [usuario, setUsuario] = useState('');
    const [usuariote, setUsuarioTe] = useState('');
    const [usuarioemail, setUsuarioEmail] = useState('');


    const navigate = useNavigate();

    //useEffect(() => {
    //    if (!storage('usuario-logado')) {
    //        navigate('/loginUsuario')
    //    }
    //}, [])



    return (
        <main className='main-perfil'>

            <Menuamarelousu />
          
            <section className='section-perfil'>
                

                <div className='div-foto-perfil'>
<img src='/assets/images/editarimg.png'/>
<img src='/assets/images/homemper.png'/>


<button className='botao-salvar-perfil'>Salvar</button>

                </div>


               <div className='spans'>
                <div className='perfil'>
                    <h1 className='titulo-input-perfil'>Nome:</h1>

                    <span className='span-perfil'></span>
                </div>

                <div className='perfil'>
                    <h1 className='titulo-input-perfil'>E-mail:</h1>
                    <span className='span-perfil'></span>
                </div>

                <div className='perfil'>
                    <h1 className='titulo-input-perfil'>Telefone:</h1>
                    <span className='span-perfil'></span>
                </div>
</div>
            </section>



      

        </main>



    )
}