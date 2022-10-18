import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {

  const renderLoginForm = ()=>{
    return(Login)
  }

  const  nose = () =>{
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Asistance Control</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Add User</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="login">Login</a>
              </li>                         
            </ul>           
          </div>
          
        </div>
      </nav>
     
    

   
    )
  }
  return (
    
    

    <div className="App">   
      
      {renderLoginForm()}
      {nose()}


      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<ListaUsuarios/>} exact></Route>
          <Route path='/' element={<Login/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario/>} exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>} exact></Route>
        </Routes>
    </BrowserRouter>     

    </div>
  );
}

export default App;
