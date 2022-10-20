import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import md5 from 'md5'

function Adduser(){

    //Hooks
    const[name, setName]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    

    const nav = useNavigate()

    const user = {
        name: name,
        email: email,
        password: md5(password),
        id: uniquid()
    }

    function adduser(){

             axios.post('/api/usuario/adduser', user)
                .then(res => {
                    //alert(res.data)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User Created',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      nav('/')
                })
                .then(err => {console.log(err)})
       
    }



    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Create a new user</h2>               
            </div> 

             <div className="row">

            <form className='col-sm-6 offset-3'>
            <div className="mb-3">
                        <label htmlFor="name" className="form-label">User Name</label>
                        <input type="text" className="form-control" required value={name} onChange={(e) => {setName(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" required value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" required value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                     </div>

                     <button onClick={()=>adduser()} className="btn btn-success">Create</button>
                     <center>
                  <p className="text-white mt-4">Have an account?</p>
                  <h6><a className="text-info" href="http://localhost:3000/">Login here</a></h6>
                </center>
                
                 </form>



                
            </div>          
        </div>
    )
}

export default Adduser