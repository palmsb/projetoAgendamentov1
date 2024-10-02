import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fotoLogin from './img/fotoLogin.jpg'

function Entrar() {
  

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
          <label htmlFor="email">E-mail</label>
          <input className='inp' name="email" type="text"></input>

          <label htmlFor="senha">Senha</label>
          <input className='inp' name="senha" type="password"></input>

          <button className='btnEntrar' type="submit" formMethod='POST'>Entrar</button>
          </form>
          <p>Não possui uma conta? <a href="/cadastro"><span>Cadastre-se!</span></a></p>
        </div>
      </section>
    </>
  )
}

export default Entrar
