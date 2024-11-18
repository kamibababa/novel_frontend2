import axios from "axios";


const instance = axios.create({
  // baseURL: 'https://api.realworld.io/api/'
   baseURL: 'http://175.178.73.222:8882/'
  // baseURL: import.meta.env.VITE_APP_API//dev-api
});



export default instance