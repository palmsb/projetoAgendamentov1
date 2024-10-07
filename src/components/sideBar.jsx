import { useState } from 'react';
import '../App.css'
import { IoMdClose } from "react-icons/io";
import { LiaFacebookSquare } from "react-icons/lia";  
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";


const SideBar = ({ active }) => {
   
    const closeSideBar = () => {
        active(false)
  } 


  return (
    <>
      <div className='sideB'sideBar = {active}>
        <div className='topSide'>
          <div className='perfil'>
            <img src="../src/img/fotoLogin.jpg" width={30}></img>
            <h3>Olá Fulana</h3>
          </div> 
        <IoMdClose className='iconeX' onClick ={closeSideBar} size={30}/>
        </div>

        <div className='side'>
          <div className='servicosSide'>
          <a href='/mainPage'><h1>Inicio</h1></a>
          <a href='/agendamento'><h1>Agendamentos</h1></a>
          <a href='/servicos'><h1>Serviços</h1></a>
          <h1>Meus Agendamentos</h1>
          <a href="/"><p>Sair</p></a>
          </div>

          <div className='redes'>
            <a href='https://www.facebook.com' target='_blank'><LiaFacebookSquare size={40}/></a>
            <a href='https://www.instagram.com' target='_blank'><BsInstagram size={30}/></a>
            <a href='https://web.whatsapp.com' target='_blank'><ImWhatsapp size={30}/></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default SideBar
