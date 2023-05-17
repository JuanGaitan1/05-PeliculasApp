import  axios  from "axios";

 const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie' ,
    params: {
        api_key:'5eb3b9639084b7cbf657d5faf243eb5d' ,
        language: 'es-ES'
    }
 })

 export default movieDB