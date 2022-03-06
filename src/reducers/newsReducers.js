import { GET_NEWS, GET_MORE, SET_ARTICLE, SEARCH_TERM, GET_PAGE, SET_SORT } from "../actions/types";

const initialState = {
    news: [],
    article: {},
    totalResults: 0,
    searchTerm: '',
    page: 1,
    sort: ''
};

export default function newsReducers(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, news: action.payload.articles, totalResults: action.payload.totalResults };
        case GET_MORE:
            return { ...state, news: [...state.news, ...action.payload.articles] }
        case SET_ARTICLE:
            return { ...state, news: [], article: action.payload }
        case SEARCH_TERM:
            return { ...state, searchTerm: action.payload }
        case GET_PAGE:
            return { ...state, page: action.payload }
        case SET_SORT:
            return { ...state, sort: action.payload }
        default:
            return state;
    }
}