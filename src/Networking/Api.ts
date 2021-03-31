import {Movie} from "../components/MovieCard";
import axios, {AxiosResponse, Method} from "axios";

const baseUrl = "http://localhost:3000";

export const getMoviesFromRemote = (): Promise<Movie[]> => {
    return sendRequest<Movie[]>('get', `${baseUrl}/movies`)
};

export const getMovieByIDFromRemote = (id: string): Promise<Movie> => {
    return new Promise<Movie>(((resolve, reject) => {
        sendRequest<Movie[]>('get', `${baseUrl}/movies/${id}`).then((movieArr) => {
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
