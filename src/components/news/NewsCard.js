import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardFooter } from "reactstrap";
import { setArticle } from "../../actions/actions";
import { defaultImage } from "../../assets/defaultImage";
import news from '../../assets/news.jpg'

const NewsCard = ({ article }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onArticeClick = (article) => {
        dispatch(setArticle(article, history))
    }
    //set article state to article that was clicked, action will push us to /article

    return (<div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <Card className="shadow-lg h-100 p-0 bg-light" body outline>
            <CardImg onError={defaultImage} height="170px" alt="news" src={article.urlToImage ? article.urlToImage : news} />
            <CardBody className="p-1">
                <CardTitle tag="h5" className="pt-1">{article.title}</CardTitle>
                <CardText className="p-1">{article.description}</CardText >
            </CardBody>
            <CardFooter>
                <Button color="primary" onClick={() => onArticeClick(article)}>Check full article</Button>
            </CardFooter>
        </Card>
    </div>)
}
export default NewsCard