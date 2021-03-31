import {Movie} from "../components/MovieCard";
import axios, {AxiosResponse, Method} from "axios";

export const getMoviesFromRemote = (): Promise<Movie[]> => {
    return sendRequest<Movie[]>('get', ' http://192.168.1.226:3000/movies')
};

function sendRequest<T>(method: Method, url: string): Promise<T> {

    return axios.request<T>({url, method}).then((response) => {
        return response.data
    })
}
