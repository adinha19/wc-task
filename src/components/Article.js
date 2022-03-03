import React from "react";
import { useSelector } from "react-redux";

const Article = () => {

    const article = useSelector(state => state.news.article)

    return (<div>

    </div>)
}

export default Article