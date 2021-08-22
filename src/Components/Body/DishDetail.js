import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';
import { baseUrl } from '../../Redux/baseUrl';


const DishDetail = (props) => {
    return (
        <div>
            <Card style={{marginTop: '10px'}}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{textAlign: 'left'}}>
                    <CardTitle><h4>{props.dish.name}</h4></CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Tk: {props.dish.price}/-</p>
                    </CardText>
                    <hr />
                    <h3 style={{color: 'tomato'}}>Customer Reviews::</h3>
                    <LoadComments comments={props.comments} commentsIsLoading={props.commentsIsLoading}/>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment}></CommentForm>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;