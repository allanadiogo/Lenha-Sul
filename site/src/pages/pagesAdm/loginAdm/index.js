import './index.scss';

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'

import { EfetuarLogin } from '../../../api/usuarioAPI'
import logo from '../../../assets/images/logo.png';

import { useState, useRef, useEffect } from 'react';

export default function Index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();






    async function onClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await EfetuarLogin(email, senha)
            storage('usuario-logado', r)

            setTimeout(() => {
                navigate('/consultarPedidos')
            }, 3000)



        }
        catch (err) {
            ref.current.complete()
            setCarregando(false)
            if (err.message.status === 401) {
                setErro(err.message.data.Erro)
            }
        }
    }




    return (

        <main className="main">
            <LoadingBar color='#000' ref={ref} />

            <header className="Header-Home">
                <a className="botao-home">Home</a>
            </header>



            <section>
                <div className="Div-Meio-Login">

                    <div className="LOGO-TESTE">
                        <img className="Img-Logo" src={logo} />
                    </div>


                    <h2 className="login-administrativo">Login Administrativo</h2>


                    <div className="Div-Mae-Input">
                        <div>
                            <img className="Width-Img" src="../assets/image/usuario2.png" alt="" />
                        </div>

                        <input className="Input-Email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>


                    <div>
                        <img className="Width-Img-Cadeado" src="../assets/image" alt="" />
                    </div>

                    <input class="Input-Senha" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />



                    <div className="Div-Button">
                        <button className="botao-entrar" onClick={onClick} disabled={carregando}>Entrar</button>
                    </div>


                </div>
                <div>
                    {erro}
                </div>

            </section>


        </main>

    )
}