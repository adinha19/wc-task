import React from "react";
import './Article.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { defaultImage } from "../../assets/defaultImage";
import news from '../../assets/news.jpg'

const Article = () => {

    const article = useSelector(state => state.news.article)
    //get values from article state

    return (<div className="container mt-1">
        <Link to='/'>Back</Link>
        <div className="shadow-lg d-flex justify-content-center mt-1 p-2 article">
            <div className="d-flex flex-column justify-content-center me-1 article-info">
                <img onError={defaultImage} className="mh-75" src={article.urlToImage ? article.urlToImage : news} alt="article" />
                <div className="h-25 mt-3 fs-5 fst-italic text-center">
                    <div className="pb-2">Authors: {article.author}</div>
                    <div className="pb-2">Source: {article.source?.name}</div>
                    <div>Published: {article.publishedAt?.replace('T', ' ').slice(0, -1)}</div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center h-100 m-1">
                <div className="fs-3 text-center">{article.title}</div>
                <div className="fst-italic">{article.description}</div>
                <div >{article.content}</div>
            </div>
        </div>
    </div>)
}

export default Article