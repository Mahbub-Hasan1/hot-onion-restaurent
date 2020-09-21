import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CategoryDetail = (props) => {
    const style = {
        width: '22rem',
        margin: '20px',
        textAlign: 'center',
        padding: '20px',
        
    }
    return (
        <div >
            <Card className="col md-6" style={style}>
                <Card.Img style={{width:'80%',margin:'0 auto'}} variant="top" src={props.products.img} />
                <Card.Body>
                    <Card.Title>{props.products.name}</Card.Title>
                    <Card.Text>{props.products.description}</Card.Text>
                    <h5><b>$</b>{props.products.price}</h5>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CategoryDetail;