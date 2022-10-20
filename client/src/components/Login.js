import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import md5 from 'md5'


function Login(){
     //Hooks
     const[useremail, setUseremail]=useState('')
     const[password, setPassword]=useState('')
     const nav = useNavigate()
     const logi = async credentials =>{
        const {data} = await axios.post('/api/usuario/logi', credentials)
        return data
    }
    const login = async (event)=>{ 
    try {  
      const useri = await logi({
        useremail
      })
      if(useri[0].password==md5(password)){
        nav('login')
        window.sessionStorage.setItem(
          'loggedAppUser', JSON.stringify(useri.shift().password)
        )
      }else{
        Swal.fire({
          title: 'Password dont match!',
          text: 'ERROR',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    } catch (e) {
        Swal.fire('ERORR', 'Email not register')
        Swal.fire({
          title: 'Email not register',
          text: 'ERORR',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
    }
    }

    return(
        <div className='container'>
              <h2 className='mt-4 text-danger'>Login</h2>
            <div className='row'>
              <div className='col-sm-6 offset-3'>
                  <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>Email</label>
                      <input type="text" className='form-control' value={useremail} onChange={(e) => {setUseremail(e.target.value)}}></input>
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='password' className='form-label'>Password</label>
                      <input type="password" className='form-control' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                  </div>
                  <button onClick={login} className="btn btn-lg btn-danger">LOGIN</button>
                  <center>
                  <p className="text-white mt-4">Have an account?</p>
                  <h6><a className="text-info" href="http://localhost:3000/adduser">Register here</a></h6>
                </center>
              </div>
          </div>           
        </div>
    )
}
export default Login