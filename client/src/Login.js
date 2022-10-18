import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { useEffect } from 'react';


function Login(){

    useEffect(()=>{
        
        const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
        if (loggedUserJSON){
         
        window.location.href ="http://localhost:3000/login";
       
         /*   const user  = JSON.parse(loggedUserJSON)
          console.log(user)*/
        }
      }, [])


     //Hooks
     const[useremail, setUseremail]=useState('')
     const[password, setPassword]=useState('')
     const[user, setUser]=useState(null)

     

     const nav = useNavigate()
     let token = null
    const setToken = newToken =>{
        token = newToken
    }

     const config = {
        headers:{
            Authorization: token
        }
     }


     const logi = async credentials =>{
        const {data} = await axios.post('/api/usuario/logi', credentials, config)
        return data
    }

    const login = async (event)=>{
        event.preventDefault()

    try {
      const useri = await logi({
        useremail
      })
      setToken(useri[0].id)
      setUser(useri[0])
     
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      )
      /*
      if(useri[0].password==password){
        nav('login')
      }else{
        Swal.fire('ERORR', 'Password dont match')
      }
      */

    } catch (e) {
        Swal.fire('ERORR', 'Email not register')
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