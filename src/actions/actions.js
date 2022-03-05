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
//set article, and push to article

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

export const getNews = (search, sort, page) => async (dispatch, getState) => {
    const params = search ? `everything?q=${search}` : 'top-headlines?country=us'
    const sortBy = sort ? `&sortBy=${sort}` : ''
    const newPage = page > 1 ? `&page=${page}` : ''

    const { error } = getState().errors
    error && dispatch(getError(''))
    //if there are previous errors, dispatch no errors
    
    search && dispatch(setSearchTerm(search))
    //if search has value, set search term

    await axios.get(`https://newsapi.org/v2/${params}${sortBy}${newPage}&apiKey=${API_KEY}`)
        .then(res => {
            dispatch({
                type: newPage ? GET_MORE : GET_NEWS,
                payload: res.data
            })
            //if newPage isnt empty, do get_more action, else get_news (no need to send page number if we need first page)
        })
        .catch(err => dispatch(getError(err.response.data.message))
            //catch errors
        )
}

const getError = (error) => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: error
    })
}

export const onSearchChange = (inputValue) => dispatch => {
    dispatch({
        type: SET_SEARCH,
        payload: inputValue
    })
}
//on input change

export const clearSearch = () => dispatch => {
    dispatch(onSearchChange(''))
    dispatch(setSearchTerm(''))
    dispatch(setPage(1))
    dispatch(getNews())
}

//4e79f16f704145ff91c47d9f32484f57