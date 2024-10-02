import Cadastro from './cadastro';

import Entrar from './entrar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Entrar/>}></Route>
                <Route path='/cadastro' element={<Cadastro/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes