import { SET_SEARCH } from "../actions/types";

const initialState = {
    search: ''
};

export default function searchReducers(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, search: action.payload };
        default:
            return state;
    }
}