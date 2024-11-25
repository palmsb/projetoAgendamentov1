import { IoMenu } from "react-icons/io5";
import './App.css';
import NavBar from './components/navBar';

function Admin() {

  // Função para abrir o modal
  const openModal = () => {
    const dialog = document.getElementById('chatDialog');
    dialog.showModal(); // Abre o modal como uma caixa de diálogo modal
  };

  return (
    <>
      <section>
        <NavBar />
      </section>

      <section className="mainAdmin">
        <div className="conteudo">
          {/* Botão que abre o modal */}
          <button className="chatTab" onClick={openModal}>Clientes Agendados</button>

          {/* Dialog com ID para ser referenciado */}
          <dialog id="chatDialog" className="chatDialog">
            <p>Modal aberto!</p>
            {/* Botão para fechar o modal */}
            <button onClick={() => document.getElementById('chatDialog').close()}>
              Fechar
            </button>
          </dialog>
        </div>

        <div className="conteudo">
          <button>Horários Disponíveis</button>
        </div>

        <div className="conteudo">
          <button>Histórico</button>
        </div>
      </section>
    </>
  );
}

export default Admin;