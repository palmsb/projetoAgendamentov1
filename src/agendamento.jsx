import { useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/navBar';

function Agendamento() {
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const handleAgendamento = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('access_token'); // Recupera o token armazenado no login

      // Faz a requisição à rota de agendamento
      const response = await axios.post(
        'https://projeto-agendamento.onrender.com/agendamento',
        {
          servico,
          data,
          horario,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Envia o token para autenticação
            'Content-Type': 'application/json', // Envia os dados no formato JSON
          },
        }
      );

      if (response.status === 201) {
        alert('Agendamento realizado com sucesso!');
        // Limpa os campos do formulário após o sucesso
        setServico('');
        setData('');
        setHorario('');
      }
    } catch (error) {
      console.error('Erro ao realizar agendamento:', error);
      alert('Erro ao realizar o agendamento. Verifique os dados e tente novamente.');
    }
  };

  return (
    <>
      <section className='mainPage'>
        <NavBar />
      </section>

      <section className="agenda">
        <h1>Agendamento</h1>
        
        <form onSubmit={handleAgendamento}>
          <label htmlFor="servico">Selecione o serviço:</label>
          <select 
            id="servico" 
            name="servico" 
            value={servico} 
            onChange={(e) => setServico(e.target.value)} 
            required
          >
            <option value="">Escolha uma opção</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Manicure">Manicure</option>
            <option value="Pé e Mão">Pé e Mão</option>
            <option value="Spa dos Pés">Spa dos Pés</option>
          </select>

          <label htmlFor="data">Selecione uma data</label>
          <input 
            name="data" 
            type="date" 
            value={data} 
            onChange={(e) => setData(e.target.value)} 
            required
          />

          <label htmlFor="horario">Selecione um Horário</label>
          <select 
            name="horario" 
            value={horario} 
            onChange={(e) => setHorario(e.target.value)} 
            required
          >
            <option value="">Escolha um horário</option>
            <option value="09:00">09:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
          </select>

          <p>Horário de Funcionamento: Todos os dias das 09h às 16h</p>
          
          <button className='btnEntrar' type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}

export default Agendamento;