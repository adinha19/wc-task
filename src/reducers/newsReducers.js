import { GET_NEWS, GET_MORE, SET_ARTICLE, TOTAL_RESULTS, SEARCH_TERM, GET_PAGE } from "../actions/types";

const initialState = {
    news: [],
    article: {},
    totalResults: null,
    searchTerm: '',
    page: 1,
};

export default function newsReducers(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, news: action.payload };
        case GET_MORE:
            return { ...state, news: [...state.news, ...action.payload] }
        case SET_ARTICLE:
            return { ...state, news: [], article: action.payload }
        case TOTAL_RESULTS:
            return { ...state, totalResults: action.payload }
        case SEARCH_TERM:
            return { ...state, searchTerm: action.payload }
        case GET_PAGE:
            return { ...state, page: action.payload }
        default:
            return state;
    }
}