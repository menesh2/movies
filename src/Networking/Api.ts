import {Movie} from "../components/MovieCard";
import axios, {AxiosResponse, Method} from "axios";

export const getMoviesFromRemote = (): Promise<Movie[]> => {
    return sendRequest<Movie[]>('get', 'http://192.168.1.226:3000/movies')
};

export const getMovieByIDFromRemote = (id: string): Promise<Movie> => {
    return new Promise<Movie>(((resolve, reject) => {
        sendRequest<Movie[]>('get', `http://192.168.1.226:3000/movies/${id}`).then((movieArr) => {
            if(movieArr[0]) {
                resolve(movieArr[0])
            } else {
                reject()
            }
        })
    }))
};

function sendRequest<T>(method: Method, url: string): Promise<T> {

    return axios.request<T>({url, method}).then((response) => {
        return response.data
    })
}
