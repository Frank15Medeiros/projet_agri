import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Agricu from './pages/agricu'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/agricu' element={<Agricu />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App