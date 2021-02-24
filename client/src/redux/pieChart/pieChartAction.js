import axios from 'axios';
import { 
    FETCH_API_REQUEST, 
    FETCH_API_SUCCESS, 
    FETCH_API_ERROR 
    } from './pieChartType';

export const fetchApi = () => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios.get('http://localhost:9000/api')
            .then(response => {
                const api = response.data;
                dispatch(fetchApiSuccess(api));
            })
            .catch(error => {
                dispatch(fetchApiError(error.message))
            })
    }
}

export const fetchApiRequest = () => {
    return {
        type: FETCH_API_REQUEST
    }
}

export const fetchApiSuccess = api => {
    return {
        type: FETCH_API_SUCCESS,
        payload: api
    }
}

export const fetchApiError = error => {
    return {
        type: FETCH_API_ERROR,
        payload: error
    }
}

