import axios from 'axios'

const api = axios.create({
    baseURL: 'https://felipeseguranca.herokuapp.com'
});

export default api;