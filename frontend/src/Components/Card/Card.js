import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
const CardMessage = (props) => {

    return (

        <div className="m-2">
            <Card>
                <CardTitle>{props.author}</CardTitle>
                {props.image !== "null" ? <CardImg style={{width:"100px", height:"100px"}} src={'http://localhost:8000/uploads/' + props.image} alt="Card image cap" /> : null}
                <CardBody>
                    <CardText>{props.message}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardMessage;