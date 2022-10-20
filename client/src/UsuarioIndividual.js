import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

function UsuarioIndividual({usuario}){

    const navegar = useNavigate()

    //Para animación de scroll al bajar
    useEffect(() => {
       AOS.init()
    }, [])


    //Función para borrar usuario
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data) 
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User delete',
                showConfirmButton: false,
                timer: 300
              })
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }


    return(
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="flip-right">
                    <ul className="list-group">
                        <li className='list-group-item'>Id:</li>
                        <li className="list-group-item text-white">{usuario.id}</li>
                        <li className='list-group-item'>User Name:</li>
                        <li className="list-group-item text-white">{usuario.name}</li>
                        <li className='list-group-item'>Email:</li>
                        <li className="list-group-item text-white">{usuario.email}</li>
                        
                    </ul>

                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>                
            </div>
            
        </div>
    )
}

export default UsuarioIndividual