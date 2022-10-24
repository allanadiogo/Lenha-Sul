import './index.scss'

export default function Troco(){
    return(
        <main className='main-troco'>
           
            <div className='div-troco'>
<h1 className='titulo-troco'>Precisa de troco?</h1>

<div className='troco-input'>
    
<input type='text' placeholder='R$ insira o valor' className='input-troco' ></input>
</div>


<div className='linha-troco-2'>
            <hr className='linha-troco'/>

            <p className='ok-troco'>Ok</p>
    </div>
            
      
            </div>
        </main>
    )
}