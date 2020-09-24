import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../../../App';

const CategoryDetail = (props) => {
    const { hendleProductDetail, products } = props;
    const {cart, setCart} = useContext(CategoryContext);
    const style = {
        width: '22rem',
        margin: '20px',
        textAlign: 'center',
        padding: '20px',
        color: 'black',
        underline: 'none'

    }
    return (
        <div onClick={() => hendleProductDetail(products)}>
                <Card className="col md-6" style={style}>
                    <Link to={`/ProductDetail/${products.id}`}>
                        <Card.Img style={{ width: '80%', margin: '0 auto' }} variant="top" src={props.products.img} />
                        <Card.Body>
                            <Card.Title>{products.name}</Card.Title>
                            <Card.Text>{products.description}</Card.Text>
                            <h5><b>$</b>{products.price}</h5>
                        </Card.Body>
                    </Link>
                    <button onClick={() => setCart([...cart,products])}>add to cart</button>
                </Card>
        </div>
    );
};

export default CategoryDetail;