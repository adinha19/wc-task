import React from "react";
import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardFooter } from "reactstrap";
import { setArticle } from "../actions/actions";
import { useDispatch } from "react-redux";

const NewsCard = ({ article }) => {
    const dispatch = useDispatch()

    const onArticeClick = (article) => {
        dispatch(setArticle(article))
    }

    return (<div className="col-md-3 col-sm-6 mb-3">
        <Card className="shadow-lg h-100 p-0" body outline>
            <CardImg height="170px" alt="news" src={article.urlToImage} />
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