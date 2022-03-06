import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Article = () => {

    const article = useSelector(state => state.news.article)
    //get values from article state
    
    return (<div className="container mt-1">
        <Link to='/'>Back</Link>
        <div className="shadow-lg d-flex flex-row mt-1 p-2">
            <div className="d-flex flex-column justify-content-center w-50 me-1">
                <img className="mh-75" src={article.urlToImage} alt="article" />
                <div className="h-25 mt-3 fs-5 text-center">
                    <div>Authors: {article.author}</div>
                    <div>Source: {article.source?.name}</div>
                    <div>Published: {article.publishedAt?.replace('T', ' ').slice(0, -1)}</div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center h-100 m-1">
                <div className="fs-3 text-center">{article.title}</div>
                <div className="m-2 fst-italic">{article.description}</div>
                <div className="m-2">{article.content}</div>
            </div>
        </div>
    </div>)
}

export default Article