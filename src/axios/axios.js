import axios from 'axios';

const instance = axios.create({
    baseURL: "https://localhost:44303",
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
  });
  export default instance;