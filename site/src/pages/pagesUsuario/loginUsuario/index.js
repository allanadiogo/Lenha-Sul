
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';

import { loginUsuario } from '../../../api/usuarioAPI'
import LoadingBar from 'react-top-loading-bar'

import { useState, useRef, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



export default function Index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const ref = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/perfilUsuario')
        }
    }, [])

    async function onClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await loginUsuario(email, senha)
            storage('usuario-logado', r)

            setTimeout(() => {
                navigate('/perfilUsuario')
            }, 3000)



        }
        catch (err) {
            ref.current.complete()
            setCarregando(false)
            if (err.message.status === 401) {
                toast(err.message.data.Erro)
            }
        }
    }


    function CriarConta() {
        navigate('/cadastro');
    }




    return (
        <main className="main-login-usuario">
            <ToastContainer />
            <LoadingBar color='#000' ref={ref} />



            <div className='logo-home-usuario'>
                <img className="login-usuario-logo" src="/assets/images/logoroda.png" />
                <a href='/' className="botao-home-usuario" >Home</a>
            </div>

            <section className='page-login-usuario'>
                <div className="Div-Meio-Login-usuario">

                    <div className="logo-usuario">
                        <img className="logo-usuario" src="/assets/images/logousuario.png" />
                    </div>

                    <h2 className="text-login-usuario">LOGIN</h2>


                    <div className="Div-Mae-Input-usuario">
                        <img className='icons-login-usuario' src='/assets/images/usuario3.png' />
                        <input className="Input-Email-usuario" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>


                    <div className="Div-Mae-Input-Senha-usuario">
                        <img className='icons-login-usuario' src='/assets/images/cadeado.png' />
                        <input data-ls-module="charCounter" maxlength="25" type="password" className="Input-Senha-usuario" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>


                    <div className="Div-Button-usuario" disabled={carregando} onClick={onClick}>
                        <div className='botao1-usuario'>
                            <button className="botao-entrar-usuario"> Entrar </button>
                        </div>

                        <div className='botao2-usuario' onClick={CriarConta}>
                            <button className="botao-criar-usuario" >Criar nova conta</button>
                        </div>
                    </div>

                    <div className='esqueceu-usuario'>
                        <span className='esq-sen'>Esqueceu a senha?</span>
                        <a href='/recuperacaoSenha' className='clique-aqui'> Clique aqui </a>

                    </div>

                </div>

                <div>
                {erro}
                </div>



            </section>
        </main>
    )
};