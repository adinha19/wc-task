import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "reactstrap";
import { getNews, clearSearch, setPage } from "../actions/actions";
import NewsCard from "./NewsCard";
import Loader from "./Loader";
import Error from "./Error";
import SortDropdown from "./SortDropdown";

const Landing = () => {

    const [sort, setSort] = useState('')
    //dont know if I should put this in redux too, bit its a simple state so i guess theres no need

    const dispatch = useDispatch()

    const search = useSelector(state => state.search.search)
    const news = useSelector(state => state.news.news)
    const page = useSelector(state => state.news.page)
    const totalResults = useSelector(state => state.news.totalResults)
    const searchTerm = useSelector(state => state.news.searchTerm)
    const error = useSelector(state => state.errors.error)
    //get states from redux

    const onGetMore = () => {
        dispatch(setPage(page + 1))
    }
    //change page

    useEffect(() => {
        dispatch(getNews(search, sort, page))
    }, [page])
    //get news at first load and when page changes

    useEffect(() => {
        sort && dispatch(getNews(search, sort))
    }, [sort])
    //getNews when sort has value or when sort changes

    const onClearSearch = () => {
        dispatch(clearSearch())
    }
    //get back to highlighted news

    if (error) return <Error />
    if (news.length === 0) return <Loader />
    //if api doesnt work return error, if data is loading, return loader

    return (<div className="container text-center">
        {searchTerm && <div className="d-flex flex-row justify-content-between m-1">
            <Button color="link" onClick={onClearSearch}>Clear Search</Button>
            <SortDropdown setSort={setSort} />
        </div>}
        <Row className="mt-3">
            {news?.map((article, i) => {
                return <NewsCard key={i} article={article} />
            })}
        </Row>
        {news.length < totalResults && <button type="button" className="btn btn-outline-primary mb-3" onClick={onGetMore}>Get More</button>}
    </div>)
}

export default Landing