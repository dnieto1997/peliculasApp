import axios from "axios";

const movieDb=axios.create({
baseURL:'https://api.themoviedb.org/3/movie',
params:{
    api_key:'fd9c0834374ceb6c5afd62e41a2ecaff',
    language:'es-ES'
}
})


export default movieDb