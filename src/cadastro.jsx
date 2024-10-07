import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import fotoLogin from './img/fotoLogin.jpg';
import axios from 'axios';



function Cadastro() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');




  const onSubmit = async (ev) => {

    ev.preventDefault();
    
    await axios.post('http://127.0.0.1:8000/cadastro', {
      nome_usuario: nome,
      email_usuario: email,
      senha: senha
    });
    
   
  }




  return (
    <>
      <section className='mainPage'>
        <div className='divIMG'> 
          <img className="imgClock" src={fotoLogin}></img> 
          <h2>Bem-vindo!</h2>
          <p>Apenas algumas instruções antes de começarmos.</p>
        </div>

        <div className='divTXT'>

        <form onSubmit={onSubmit}>
          
          <h1>Oi</h1>            
          <h1>Cadastre-se</h1> 
          <label htmlFor="nome_usuario">Nome Completo</label>
          <input className='inp' name="nome_usuario" value={nome} onChange={(e)=>setNome(e.target.value)} type="text"></input>

          <label htmlFor="email_us">E-mail</label>
          <input className='inp' name="email_usuario" value={email} onChange={(e)=> setEmail(e.target.value)} type="text"></input>

          <label htmlFor="senha">Senha</label>
          <input className='inp' name="senha" value={senha} onChange={(e)=>setSenha(e.target.value)} type="text"></input>

          {/* <label htmlFor="senhaConfirma">Confirme sua Senha</label>
          <input className='inp' name="senha" type="password"></input> */}

          <button className='btnEntrar' type="submit" >Cadastrar</button>
          </form>
          <p>Já possui uma conta? <a href="/"><span>Entre</span></a></p>
        </div>
      </section>
    </>
  )
}

export default Cadastro
