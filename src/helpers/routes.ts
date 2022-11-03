const routes = {
    home: '/',
    topTen: '/top-ten-movies',
    subscriptions: '/subscriptions',
    movieDetails: (movieId:string) => `/movie/${movieId}`,
}

export default routes