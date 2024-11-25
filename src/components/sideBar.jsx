import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { IoMdClose } from "react-icons/io";
import { LiaFacebookSquare } from "react-icons/lia";  
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const SideBar = ({ active }) => {
  const [nome_usuario, setUsername] = useState('Usuário'); // Estado para o nome do usuário

  // Função para fechar a sidebar
  const closeSideBar = () => {
    active(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      axios.get('https://projeto-agendamento.onrender.com/rota-protegida', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(response => {
        setUsername(response.data.resposta); // Atualiza com o nome do usuário
      })
      .catch(error => {
        console.error('Erro ao buscar informações do usuário:', error);
        setUsername('Usuário'); // Se houver erro, mantém o valor padrão
      });
    }
  }, []); // Executa o efeito apenas uma vez ao carregar o componente

  return (
    <>
      <div className='sideB' sideBar={active}>
        <div className='topSide'>
          <div className='perfil'>
            <img src="../src/img/fotoLogin.jpg" width={30} alt="Foto do Usuário" />
            <h3>Olá {nome_usuario}</h3> {/* Exibe o nome do usuário */}
          </div> 
          <IoMdClose className='iconeX' onClick={closeSideBar} size={30} />
        </div>

        <div className='side'>
          <div className='servicosSide'>
            <a href='/mainPage'><h1>Início</h1></a>
            <a href='/agendamento'><h1>Agendamentos</h1></a>
            <a href='/servicos'><h1>Serviços</h1></a>
            <h1>Meus Agendamentos</h1>
            <a href="/"><p>Sair</p></a>
          </div>

          <div className='redes'>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><LiaFacebookSquare size={40} /></a>
            <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><BsInstagram size={30} /></a>
            <a href='https://web.whatsapp.com' target='_blank' rel="noreferrer"><ImWhatsapp size={30} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;