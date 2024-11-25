import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMenu } from "react-icons/io5";
import SideBar from './sideBar';

function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const [nome_usuario, setUsername] = useState('Usuário'); // Estado para o nome do usuário

  const showSideBar = () => setSideBar(!sideBar);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      // Faz a requisição à rota protegida usando o token no cabeçalho
      axios.get('https://projeto-agendamento.onrender.com/rota-protegida', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(response => {
        // Atualiza o nome do usuário com a resposta do backend
        setUsername(response.data.resposta);
      })
      .catch(error => {
        console.error('Erro ao buscar informações do usuário:', error);
        setUsername('Usuário'); // Se houver erro, mantém o valor padrão
      });
    }
  }, []); // Executa o efeito apenas uma vez, ao carregar o componente

  return (
    <>
      <nav>
        <div className='iconeMenu'>
          <IoMenu onClick={showSideBar} className='iconeBar' size={45} />
          {sideBar && <SideBar active={setSideBar} />}
          
          <p>Olá {nome_usuario}, Bem-vindo!</p> {/* Exibe o nome do usuário */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;