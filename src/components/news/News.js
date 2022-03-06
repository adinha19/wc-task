import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import { getNews, setPage } from "../../actions/actions";
import NewsCard from "./NewsCard";
import SortAndClear from "./SortAndClear";
import Error from "../error/Error";
import Loader from "../loader/Loader";

const News = () => {
    const dispatch = useDispatch()

    const news = useSelector(state => state.news.news)
    const page = useSelector(state => state.news.page)
    const totalResults = useSelector(state => state.news.totalResults)
    const searchTerm = useSelector(state => state.news.searchTerm)
    const sort = useSelector(state => state.news.sort)
    const error = useSelector(state => state.errorLoader.error)
    const loading = useSelector(state => state.errorLoader.loading)
    //get states from redux

    const onGetMore = () => dispatch(setPage(page + 1))
    //change page

    useEffect(() => {
        dispatch(getNews(searchTerm, sort, page))
        //eslint-disable-next-line
    }, [page, searchTerm, sort])
    //get news at first load and when page/searchTerm/sort changes

    if (error) return <Error />
    //if api doesnt work return error

    return (loading ? <Loader /> :
        <div className="container text-center">
            {searchTerm && <SortAndClear />}
            <Row className="mt-3">
                {news?.map((article, i) => {
                    return <NewsCard key={i} article={article} />
                })}
            </Row>
            {news.length < totalResults &&
                <button type="button" className="btn btn-outline-primary mb-3" onClick={onGetMore}>Get More</button>}
        </div>)
}

export default News