import { useRef } from 'react';

import './index.scss'

export default function Index(){
    
 const carrossel = useRef(null);

    const handleLeftClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;

    };

    const handleRightClick = (e) => {
        e.preventDefault();
        
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;


    };
    return(  
           
<section className='body'>


<h1 className='prove'>Prove as pizzas mais pedidas do Lenha Sul</h1>


<div className='todo'>



        <div className='botoes-carrossel' onClick={handleLeftClick}>   <img src='/assets/images/esquerda.png'/> </div>
       
       <div className='container'>


            <div className='carrossel' ref={carrossel}>
           
            <div className='item'>
            <img src='/assets/images/carrossel1.png'/>
            <h1 className='nome'>Chocolate ao Leite com Morango</h1>
            <div className='botao-valor'>
            <button className='botao-adicionar'> + Adicionar</button>
            <h1 className='valor'>por R$ 26,00</h1>
            </div>
        </div>

        <div className='item'>
            <img src='/assets/images/carrossel2.png'/>
            <h1 className='nome'>Marguerita</h1>
            <div className='botao-valor'>
            <button className='botao-adicionar'> + Adicionar</button>
            <h1 className='valor'>por R$ 26,00</h1>
            </div>
        </div>
        <div className='item'>
            <img src='/assets/images/carrossel3.png'/>
            <h1 className='nome'>4 Queijos</h1>
            <div className='botao-valor'>
            <button className='botao-adicionar'> + Adicionar</button>
            <h1 className='valor'>por R$ 26,00</h1>
            </div>
        </div>
        <div className='item'>
            <img src='/assets/images/carrossel4.png'/>
            <h1 className='nome'>Diablo</h1>
            <div className='botao-valor'>
            <button className='botao-adicionar'> + Adicionar</button>
            <h1 className='valor'>por R$ 26,00</h1>
            </div>
        </div>
        <div className='item'>
            <img className="romeu" src='/assets/images/carrossel5.png'/>
            <h1 className='nome'>Romeu e Julieta</h1>
            <div className='botao-valor'>
            <button className='botao-adicionar'> + Adicionar</button>
            <h1 className='valor'>por R$ 26,00</h1>
            </div>
        </div>
        <div className='item'>
            <img src='/assets/images/carrossel6.png'/>
            <h1 className='nome'>Carbonara</h1>
            <div className='botao-valor'>
            <button className='botao-adicionar'> + Adicionar</button>
            <h1 className='valor'>por R$ 26,00</h1>
            </div>
        </div>
       
        
        </div>

</div>

<div className='botoes-carrossel' onClick={handleRightClick}>   <img src='/assets/images/direita.png'/> </div>
</div>
</section>

            )
            }