import './index.scss';

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'


import usuario2 from '../../../assets/images/image 80.png';
import logo from '../../../assets/images/logo.png';

import { useState, useRef } from 'react';

export default function Index() {

    
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();



    function cadastro(){
        navigate('/cadastro')
    }


    




    return (

        <main className='Divzona-senha'>

            <LoadingBar color='#000' ref={ref} />

            <header className="Header-Home">

                <div className="Div-logo-home">
                    <img className="Img-Logo" src={logo} />
                    <a href='/' className="botao-home">Home</a>

                </div>
                    
                 

                
            </header>



            <section>
                <div className="Div-Meio-Login">

                    <div className="LOGO-TESTE">
                        <img className="Img-Logo" src={usuario2} />
                    </div>


                    <h2 className="recuperar-senha">Recuperação de Senha</h2>

                    <div className='div-p2'>
                    <p className='p'>E-mail:</p>
                    </div>

                    <div className="Div-Mae-Input">
                        <div>
                            <img className="Width-Img" src="../assets/image/usuario2.png" alt="" />
                        </div>

                        <input className="Input-Email" type="email" placeholder="Insira seu e-mail"   />
                    </div>


                    



                    <div className="Div-Button">
                        <button className="botao-entrar"  disabled={carregando}>Enviar código</button>

                        
                    </div>

                    


                </div>
                <div>
                    {erro}
                </div>

            </section>

          
        </main>

    )
}