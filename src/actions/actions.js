import axios from "axios";
import { GET_ERRORS, GET_NEWS, SET_ARTICLE, SET_SEARCH, GET_MORE, TOTAL_RESULTS, SEARCH_TERM } from './types'
const API_KEY = 'c23b4ea8820a44e5b8526ed35d95f50d'

export const setArticle = (article) => dispatch => {
    dispatch({
        type: SET_ARTICLE,
        payload: article
    })
}

export const getNews = (search, sort, page) => async dispatch => {
    const params = search ? `everything?q=${search}` : 'top-headlines?country=us'
    const sortBy = sort ? `&sortBy=${sort}` : ''
    const newPage = page > 1 ? `&page=${page}` : ''

    await axios.get(`https://newsapi.org/v2/${params}${sortBy}${newPage}&apiKey=${API_KEY}`)
        .then(res => {
            console.log(res.data.articles)
            dispatch({
                type: page ? GET_MORE : GET_NEWS,
                payload: res.data.articles
            })
            dispatch({
                type: TOTAL_RESULTS,
                payload: res.data.totalResults
            })
            dispatch({
                type: SEARCH_TERM,
                payload: search
            })
        })
        .catch(err => console.log(err.response.data))
}

export const onSearchChange = (e) => dispatch => {
    dispatch({
        type: SET_SEARCH,
        payload: e
    })
}

//4e79f16f704145ff91c47d9f32484f57