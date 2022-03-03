import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "reactstrap";
import { getNews, onSearchChange, setPage } from "../actions/actions";
import NewsCard from "./NewsCard";
import Loader from "./Loader";
import Error from "./Error";
import SortDropdown from "./SortDropdown";

const Landing = () => {

    const [sort, setSort] = useState('')

    const dispatch = useDispatch()

    const search = useSelector(state => state.search.search)
    const news = useSelector(state => state.news.news)
    const page = useSelector(state => state.news.page)
    const totalResults = useSelector(state => state.news.totalResults)
    const searchTerm = useSelector(state => state.news.searchTerm)
    const error = useSelector(state => state.errors.error)

    const onGetMore = () => {
        dispatch(setPage(page))
    }

    useEffect(() => {
        dispatch(getNews(search, sort, page))
    }, [page])

    useEffect(() => {
        sort && dispatch(getNews(search, sort))
    }, [sort])

    const onClearSearch = () => {
        dispatch(onSearchChange(''))
        setPage(1)
        dispatch(getNews())
    }

    if (error) return <Error />
    if (news.length === 0) return <Loader />

    return (<div className="container text-center">
        {searchTerm && <div className="d-flex flex-row justify-content-between m-1">
            <Button color="link" onClick={onClearSearch}>Clear Search</Button>
            <SortDropdown data={sort} setData={setSort} />
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