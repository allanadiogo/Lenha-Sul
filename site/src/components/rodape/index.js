import { useNavigate } from 'react-router-dom';

import './index.scss'

export default function Index(){
 
    const navigate = useNavigate();

    function BotaoClick(){
        navigate('/loginadm');   
     }

    return(
        <section className='rodape'>
            <div className='acima'>
                
                <div className='estamos'>
       
       <h1 className='tex-estamos'>Estamos no:</h1>
       <img className='logoUber' src="/assets/images/logoUber.png"/>
       <img className='logoRappi' src="/assets/images/logoRappi.png"/>
       <img className='logoIfood' src="/assets/images/logoIfood.png"/>
       </div>

       <div className='formas'>
       <h1 className='text-formas'>Formas de Pagamento:</h1>
       <img className='logoVisa' src="/assets/images/logoVisa.png"/>
       <img className='logoMaster' src="/assets/images/logoMaster.png"/>
       <img className='logoVale' src="/assets/images/logoVale.png"/>
       <img className='logoPix'src="/assets/images/logoPix.png"/>
       <img className='logoalelo'src="/assets/images/logoalelo.png"/>

</div>
</div>

<div className='abaixo'>

<div className='logo-roda'>
<img src="/assets/images/logoroda.png"/>
</div>

<div className='areaAdm'>
   
   <button onClick={BotaoClick} className="botao-adm">Área Administrativa</button>

   <div className='logo-sociais'>
   <img className='logoface'src="/assets/images/logoFace.png"/>
   <img className='logoinsta'src="/assets/images/logoInsta.png"/>
   <img className='logoTik'src="/assets/images/logoTik.png"/>
   </div>

</div>

</div>
        </section>

        
    )
}