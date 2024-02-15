import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './pages/Details';
function App() {


  return (
    <>
    <Header></Header>
  <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/stddetail' element={<Details></Details>}></Route>
  </Routes>
        
    </>
  )
}

export default App
