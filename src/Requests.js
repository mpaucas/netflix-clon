const key ='0dfb007d9839672eccf1de8487c0f342'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=es-ESS&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-ES&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=es-ES&page=1`,
};

export default requests
