import axios from 'axios'

const api = axios.create({
    // baseURL: 'https://felipeseguranca.herokuapp.com'
    baseURL: 'http://localhost:3333'
});

export default api;