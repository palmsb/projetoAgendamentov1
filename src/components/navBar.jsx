import { useState } from 'react';
import '../App.css'
import { IoMenu } from "react-icons/io5";
import SideBar from './sideBar';
import { IoIosLogOut } from "react-icons/io";


function NavBar() {
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sideBar)

  return (
    <>
      <nav>
        <div className='iconeMenu'>
          <IoMenu onClick={showSideBar} className='iconeBar' size={45}/>
          {sideBar && <SideBar active={setSideBar} /> }

          <p>Olá Usuário, Bem-vindo!</p>
        </div>
      </nav>
    </>
  )
}

export default NavBar
