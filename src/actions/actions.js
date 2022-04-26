import axios from "axios";

const URL = 'https://api.giphy.com/v1/gifs/search?api_key=OAQE11VhEnuLYRJDohKcQWosV6NG2cNh&q=girl'

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getGifs = (searchTerm) => {
    return ((dispatch => {
        dispatch({type: FETCH_START});
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OAQE11VhEnuLYRJDohKcQWosV6NG2cNh&q=${searchTerm}`)
      .then(res => {
        dispatch({type: FETCH_SUCCESS, payload: res.data.data});
      })
      .catch(err => {
        dispatch({type: FETCH_ERROR, payload: err});
      })
    }))
}

export const fetchStart = () => {
    return ({type: FETCH_START});
}

export const fetchSuccess = (gifs) => {
    return ({type: FETCH_SUCCESS, payload: gifs});
}

export const fetchError = (error) => {
    return ({type: FETCH_ERROR, payload: error})
}