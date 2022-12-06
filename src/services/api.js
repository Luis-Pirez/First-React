import axios from "axios";

// Base da URL https://api.themoviedb.org/3
// /movie/now_playing?api_key=f33b2cbf5a458ea1a802670cb3201fc6&language=pt-BR
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;