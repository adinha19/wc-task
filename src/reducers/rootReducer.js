import { combineReducers } from "redux";
import newsReducers from "./newsReducers";
import errorReducers from "./errorReducers";
import searchReducers from "./searchReducers";

const rootReducer = combineReducers({
    news: newsReducers,
    errors: errorReducers,
    search: searchReducers
})

export default rootReducer;