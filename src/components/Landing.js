import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import { getNews, onSearchChange } from "../actions/actions";
import NewsCard from "./NewsCard";

const Landing = () => {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search.search)
    const news = useSelector(state => state.news.news)
    const totalResults = useSelector(state => state.news.totalResults)
    const searchTerm = useSelector(state => state.news.searchTerm)

    const [page, setPage] = useState(1)
    const [dropdown, setDropdown] = useState(false)
    const [sort, setSort] = useState('')
    const toggle = () => setDropdown(!dropdown)

    const onGetMore = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch(getNews(search, sort, page))
    }, [page])

    const onDropdownItemClick = (e) => {
        setSort(e.target.value)
    }

    useEffect(() => {
        sort && dispatch(getNews(search, sort))
    }, [sort])


    const onClearSearch = () => {
        dispatch(onSearchChange(''))
        setPage(1)
        dispatch(getNews())
    }

    return (<div className="container text-center">
        {searchTerm && <div className="d-flex flex-row justify-content-between m-1">
            <Button color="link" onClick={onClearSearch}>Clear Search</Button>
            <Dropdown isOpen={dropdown} toggle={toggle}>
                <DropdownToggle color="link" caret style={{ textDecoration: "none" }}>Sort By Section</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem value='popularity' onClick={(e) => onDropdownItemClick(e)}>Popularity</DropdownItem>
                    <DropdownItem value='relevancy' onClick={(e) => onDropdownItemClick(e)}>Relevancy</DropdownItem>
                    <DropdownItem value='publishedAt' onClick={(e) => onDropdownItemClick(e)}>Published Date</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>}
        <Row className="mt-3">
            {news?.map((article, i) => {
                return <NewsCard key={i} article={article} />
            })}
        </Row>
        {news.length < totalResults && <Button className="mb-3" onClick={onGetMore}>Get More</Button>}
    </div>)
}

export default Landing