import Cadastro from './cadastro';
import Principal from './mainPage'
import Entrar from './entrar';
import Agendamento from './agendamento';
import Servicos from './servicos';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Entrar/>}></Route>
                <Route path='/cadastro' element={<Cadastro/>}></Route>
                <Route path='/mainPage' element={<Principal/>}></Route>
                <Route path='/agendamento' element={<Agendamento/>}></Route>
                <Route path='/servicos' element={<Servicos/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes