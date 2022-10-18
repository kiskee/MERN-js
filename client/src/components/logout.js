
function Logout (){

 

    

    return (
            <div>
            <button onClick={()=>{window.sessionStorage.removeItem('loggedAppUser')}} className="btn btn-danger ">Logout</button>
          </div>
    )
}

export default Logout