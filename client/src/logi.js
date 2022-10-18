import axios from "axios";

const login = async credentials =>{
    const {data} = await axios.post('/api/usuario/logi', credentials)
    return data
}

export default { login }