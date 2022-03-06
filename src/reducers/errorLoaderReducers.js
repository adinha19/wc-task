import { GET_ERRORS, SET_LOADING } from "../actions/types";

const initialState = {
    error: "",
    loading: false
};

export default function errorLoaderReducers(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return { ...state, error: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}