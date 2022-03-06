import { combineReducers } from "redux";
import newsReducers from "./newsReducers";
import errorLoaderReducers from "./errorLoaderReducers";
import searchReducers from "./searchReducers";

const rootReducer = combineReducers({
    news: newsReducers,
    errorLoader: errorLoaderReducers,
    search: searchReducers
})

export default rootReducer;