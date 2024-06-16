import axios from 'axios'

const doLogin = async (loginDto) => {
    try{
        let {data}= await axios.post(`http://localhost:8081/user/login`,loginDto)
        return data;
    }catch(error){
        console.log(error);
    }
}

const doRegister = async (user) => {
    try {
        let {user} = await axios.post(`http://localhost:8081/user/register`,user);
        return user;
    } catch (error) {
        
    }
}

export { doLogin, doRegister }