import { useState } from 'react';
import axios from 'axios';
import './App.css';
import fotoLogin from './img/fotoLogin.jpg';
import { useNavigate } from 'react-router-dom'; 

function Entrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();  

  
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('https://projeto-agendamento.onrender.com/login', new URLSearchParams({  //formato esperado pelo FastAPI (ED)
        username: email, // 'username' do email no back-end
        password: senha, // 'password' senha
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // formato esperado pelo FastAPI
        }
      });

      // Se o login for bem-sucedido, armazena o token e redireciona o usuário
      if (response.status === 202) {
        localStorage.setItem('access_token', response.data.access_token); // armazena o token no localStorage
        navigate('/mainPage'); 
      }
    } catch (error) {
      alert('Erro ao fazer login: Usuário ou senha inválidos.'); 
    }
  };

  return (
    <>
      <section className='mainPage'>
        <div className='divIMG'> 
          <img className="imgClock" src={fotoLogin} alt="Imagem de login" /> 
          <h2>Bem-vindo de volta!</h2>
          <p>Apenas alguns cliques e começamos</p>
        </div>

        <div className='divTXT'>
          <form onSubmit={handleSubmit}> 
            <h1>Entrar</h1> 
            <label htmlFor="email">E-mail</label>
            <input 
              className='inp' 
              name="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />

            <label htmlFor="senha">Senha</label>
            <input 
              className='inp' 
              name="senha" 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required
            />

            <button className='btnEntrar' type="submit">Entrar</button>
          </form>
          <p>Não possui uma conta? <a href="/cadastro"><span>Cadastre-se!</span></a></p>
        </div>
      </section>
    </>
  );
}

export default Entrar;