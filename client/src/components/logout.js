import { useNavigate } from 'react-router'

function Logout (){
   
 function destroy (){
    return(
        window.sessionStorage.removeItem('loggedAppUser'),
        window.location.href = 'http://localhost:3000/'
    )
 }
    
    return (
            <div>
            <button onClick={()=>destroy()} className="btn btn-danger ">Logout</button>
          </div>
    )
}

export default Logout