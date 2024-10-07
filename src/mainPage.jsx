import { IoMenu } from "react-icons/io5";
import './App.css'
import NavBar from './components/navBar'

function Principal() {
  

  return (
    <>
      <section className='mainPage'>
        <NavBar></NavBar>

      </section>

      <section className="mainData">
        <div>
          <img src="src/img/fotoAgenda.png"></img>
        </div>
        <div>
          <h2>Localização</h2>
          <p>Rua Conselheiro Junqueira Ayres, 165 - Dois de Julho, Salvador - BA, 40070-080</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.828969523719!2d-38.51380504548932!3d-12.982788571315227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604930ba7d801%3A0xc202520745bddbd7!2sShopping%20Piedade!5e0!3m2!1spt-BR!2sbr!4v1728227731228!5m2!1spt-BR!2sbr" width="500" height="250" ></iframe>
        </div>
      </section>
    </>
  )
}

export default Principal
