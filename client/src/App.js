import './App.css';
import ListaUsuarios from './ListaUsuarios';
import Adduser from './components/Adduser';
import EditarUsuario from './EditarUsuario';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav'
import Add from './components/Add'




function App() {
  if(!window.sessionStorage.getItem('loggedAppUser')){
    window.sessionStorage.setItem(
      'loggedAppUser', JSON.stringify({})
    )
 }
  
  console.log(window.sessionStorage.getItem('loggedAppUser'))
  
  return (
    
    

    <div className="App">   
      
    
     {Nav()}


      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<ListaUsuarios/>} exact></Route>
          <Route path='/' element={<Login/>} exact></Route>
          <Route path='/adduser' element={<Adduser/>} exact></Route>
          <Route path='/add' element={<Add/>} exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>} exact></Route>
        </Routes>
    </BrowserRouter>     

    </div>
  );
}

export default App;
