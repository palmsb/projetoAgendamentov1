import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fotoLogin from './img/fotoLogin.jpg'

function Cadastro() {
  

  return (
    <>
      <section className='mainPage'>
        <div className='divIMG'> 
          <img className="imgClock" src={fotoLogin}></img> 
          <h2>Bem-vindo!</h2>
          <p>Apenas algumas instruções antes de começarmos.</p>
        </div>

        <div className='divTXT'>
          
          <form> 
            {/* action="/" ->endereço p onde vai   method="POST" */}
          <h1>Cadastre-se</h1> 
          <label htmlFor="nome">Nome Completo</label>
          <input className='inp' name="nome" type="text"></input>

          <label htmlFor="email">E-mail</label>
          <input className='inp' name="email" type="text"></input>

          <label htmlFor="senha">Senha</label>
          <input className='inp' name="senha" type="password"></input>

          <label htmlFor="senhaConfirma">Confirme sua Senha</label>
          <input className='inp' name="senha" type="password"></input>

          <button className='btnEntrar' type="submit" formMethod='POST'>Cadastrar</button>
          </form>
          <p>Já possui uma conta? <a href="/"><span>Entre</span></a></p>
        </div>
      </section>
    </>
  )
}

export default Cadastro
