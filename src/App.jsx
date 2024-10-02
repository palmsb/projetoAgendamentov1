import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fotoLogin from './img/fotoLogin.jpg'

function App() {
  

  return (
    <>
      <section className='mainPage'>
        <div className='divIMG'> 
          <img className="imgClock" src={fotoLogin}></img> 
          <h2>Bem-vindo de volta!</h2>
          <p>Apenas alguns cliques e começamos</p>
        </div>

        <div className='divTXT'>
          
          <form> 
            {/* action="/" ->endereço p onde vai   method="POST" */}
          <h1>Entrar</h1> 
          <label htmlFor="nome">E-mail</label>
          <input className='inp' name="nome" type="text"></input>

          <label htmlFor="senha">Senha</label>
          <input className='inp' name="senha" type="password"></input>

          <button className='btnEntrar' type="submit" formMethod='POST'>Entrar</button>
          </form>
          <p>Não possui uma conta? <span>Cadastre-se!</span></p>
        </div>
      </section>
    </>
  )
}

export default App
