import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação em React Router
import "./App.css";
import fotoLogin from './img/fotoLogin.jpg';
import axios from 'axios';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');
  const navigate = useNavigate();  // Hook para navegação

  // Config para enviar dados para API
  const handleSubmit = async (event) => {
    event.preventDefault();


    if (senha !== senhaConfirma) {
      alert('As senhas não coincidem, por favor tente novamente!'); // verificar se as senhas coincidem
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/cadastro', {
        nome_usuario: nome,
        email_usuario: email,
        senha: senha
      });

      if (response.status === 200) {
        alert('Usuário registrado com sucesso!');
        navigate('/');  // redirecionar pro login
      }
    } catch (error) {
      alert(`Erro: ${error.response?.data?.message || 'Erro desconhecido'}`); // caso apresentar erro exibir em alert - ajustar caso precise
    }
  };

  return (
    <main>
      <section className='mainPage'>
        <div className='divIMG'>
          <img className="imgClock" src={fotoLogin} alt="Imagem de Login" />
          <h2>Bem-vindo!</h2>
          <p>Apenas algumas instruções antes de começarmos.</p>
        </div>

        <div className='divTXT'>
          <form onSubmit={handleSubmit}>
            <h2>Crie seu cadastro:</h2>

            <label htmlFor="nome_usuario">Nome Completo</label>
            <input 
              className='inp' 
              name="nome_usuario" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              type="text" 
              placeholder="Nome" 
              required
            />

            <label htmlFor="email_usuario">E-mail</label>
            <input 
              className='inp' 
              name="email_usuario" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="Email"
              required
            />

            <label htmlFor="senha">Senha</label>
            <input 
              className='inp' 
              name="senha" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              type="password" 
              placeholder="Senha"
              required
            />

            <label htmlFor="senhaConfirma">Confirme sua Senha</label>
            <input 
              className='inp' 
              name="senhaConfirma" 
              value={senhaConfirma} 
              onChange={(e) => setSenhaConfirma(e.target.value)} 
              type="password" 
              placeholder="Confirme a Senha"
              required
            />

            <button className='btnEntrar' type="submit">Cadastrar</button>
          </form>
          <p>Já possui uma conta? <a href="/"><span>Entre</span></a></p> {/* Substitui Link por <a> */}
        </div>
      </section>
    </main>
  );
}