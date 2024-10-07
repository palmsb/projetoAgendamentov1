import { IoMenu } from "react-icons/io5";
import './App.css'
import NavBar from './components/navBar'

function Servicos() {
  

  return (
    <>
    <section className='mainPageServico'>
      <NavBar></NavBar>

    </section>

    <section className="servicos">
    
        <h1>Serviços:</h1>

        <div className="itemServico"> 
            <h2>Pé e Mão</h2>
            <h2>R$ 30,00</h2>
        </div>

        <div className="itemServico">  
            <h2>Pedicure</h2>
            <h2>R$ 30,00</h2>
        </div>

        <div className="itemServico">
            <h2>Manicure</h2>
            <h2>R$ 55,00</h2>
        </div>

        <div className="itemServico">
            <h2>Spa dos Pés</h2>
            <h2>R$ 70,00</h2>
       
        
     </div> 
    </section>
    
  </>
  )
}

export default Servicos
