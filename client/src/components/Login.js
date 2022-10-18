import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { useEffect } from 'react';


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
      if(useri[0].password==password){
        nav('login')
        window.sessionStorage.setItem(
          'loggedAppUser', JSON.stringify(useri.shift())
        )

      }else{
        Swal.fire('ERORR', 'Password dont match')
      }
    } catch (e) {
        Swal.fire('ERORR', 'Email not register')
        console.log(e)
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

                  <button onClick={login} className="btn btn-danger">LOGIN</button>

              </div>
          </div>   
       
          
        </div>
    )
}
export default Login