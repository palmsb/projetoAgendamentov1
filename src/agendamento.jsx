import { IoMenu } from "react-icons/io5";
import './App.css'
import NavBar from './components/navBar'

function Agendamento() {
  

  return (

    <>
      <section className='mainPage'>
        <NavBar></NavBar>
      </section>

      <section className="agenda">
        <h1>Agendamento</h1>
        
        {/* colocar o action */}
        <form>
            <label htmlFor="servico">Selecione o serviço:</label>
            <select id="servico" name="servico" >
                <option value="Pedicure">Pedicure</option>
                <option value="Manicure">Manicure</option>
                <option value="Pé e Mão">Pé e Mão</option>
                <option value="Spa dos Pés">Spa dos Pés</option>
            </select>

            <label htmlFor="data">Selecione uma data</label>
            <input name="data" type="date"></input>

            <label htmlFor="horario">Selecione um Horário</label>
            <select name="horario" >
                <option value="09:00">09:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
            </select>

            <p>Horario de Funcionamento: Todos os dias das 09h às 16h</p>
            
            <button className='btnEntrar' type="submit">Enviar</button>
        </form>
      </section>
    </>
  )
}

export default Agendamento
