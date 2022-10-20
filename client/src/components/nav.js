
import Logout from './logout'

function Nav(){
        
    
    const render = ()=>{
        if (window.sessionStorage.getItem('loggedAppUser')!="{}"){
            return(
                Logout()
             )
        }else{
            return(
                <div></div>
            )
        }    
    }

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
                <a className="nav-link" href="adduser">Add User</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="login">Login</a>
              </li>    
              <li className="nav-item">
                <a className="nav-link" href="add">New Add</a>
              </li>                       
            </ul>           
          </div>
           {
            render()
           }
        </div>
      </nav>
    )
}
export default Nav