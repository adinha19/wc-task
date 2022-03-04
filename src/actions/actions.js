import axios from "axios";
import { GET_ERRORS, GET_NEWS, SET_ARTICLE, SET_SEARCH, GET_MORE, SEARCH_TERM, GET_PAGE } from './types'

const API_KEY = 'c23b4ea8820a44e5b8526ed35d95f50d'

export const setArticle = (article, history) => dispatch => {
    dispatch({
        type: SET_ARTICLE,
        payload: article
    })
    history.push('/article')
}

export const setPage = (page) => dispatch => {
    dispatch({
        type: GET_PAGE,
        payload: page
    })
}
//set page

export const setSearchTerm = (search) => dispatch => {
    dispatch({
        type: SEARCH_TERM,
        payload: search
    })
}
//set search term on Search button click so we can decide if we will render clear/dropdown

export const getNews = (search, sort, page) => async dispatch => {
    const params = search ? `everything?q=${search}` : 'top-headlines?country=us'
    const sortBy = sort ? `&sortBy=${sort}` : ''
    const newPage = page > 1 ? `&page=${page}` : ''

    await axios.get(`https://newsapi.org/v2/${params}${sortBy}${newPage}&apiKey=${API_KEY}`)
        .then(res => {
            dispatch({
                type: GET_ERRORS,
                payload: ""
            })
            dispatch({
                type: newPage ? GET_MORE : GET_NEWS,
                payload: res.data
            })
            //if newPage isnt empty, do get_more action, else get_news (no need to send page number if we need first page)
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data.message
        })
        )
}

export const onSearchChange = (inputValue) => dispatch => {
    dispatch({
        type: SET_SEARCH,
        payload: inputValue
    })
}
//on input change

//4e79f16f704145ff91c47d9f32484f57