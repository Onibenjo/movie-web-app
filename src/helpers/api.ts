import { IMovie, IMovieCarousel, IMovieDetails } from "@/components/Movies/types"
import axios from "axios"
import { BASE_URL } from "./constants"

export const getMovies = () => {
    return axios.get(BASE_URL + '/movies').then(res => res.data as IMovie[])
}

export const getTop10Movies = () => {
    return axios.get(BASE_URL + '/movies/top10').then(res => res.data)
}

export const getMovie = (movieId: string) => {
    return axios.get(BASE_URL + `/movies/detail/${movieId}`).then(res => res.data as IMovieDetails)
}

export const getMovieReviews = (movieId: string) => {
    return axios.get(BASE_URL + `/movies/review/${movieId}`).then(res => res.data)
}

export const getMovieCarousel = () => {
    return axios.get(BASE_URL + `/movies/carousel`).then(res => res.data as IMovieCarousel[])
}