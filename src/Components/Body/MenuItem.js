import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseUrl } from '../../Redux/baseUrl';

const MenuItem = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <Card>
                <CardBody>
                <CardImg width='100%' alt={props.dish.name} src={baseUrl + props.dish.image} style={{opacity: '0.5'}}/>
                    <CardImgOverlay>
                        <CardTitle onClick={props.dishSelect} style={{cursor: 'pointer'}}><h2>{props.dish.name}</h2></CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;