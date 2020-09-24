import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../App';
import fakeDataProducts from '../fakeDataProducts/fakeDataProducts';

const ProductDetail = () => {
    const {id} = useParams();
    const productsData = fakeDataProducts;
    const [product, setProduct] = useState({});
    const {category, setCategory, cart, setCart} = useContext(CategoryContext);
    
    useEffect(() => {
        const matchedProducts = productsData.find(pd => pd.id === id);
        setProduct(matchedProducts);
    },[]);

    return (
        <div className='d-flex'>
            <div style={{width:'50%',textAlign:'center',marginTop:'10%',padding:'50px'}}>
                <h2>Item Name : {product.name}</h2>
                <h5>Item Description :{product.description}</h5>
                <button onClick={() => setCart([...cart,product])}>add to cart</button>
            </div>
            <div style={{width:'50%',textAlign:'center',  display: 'block',marginLeft: 'auto',marginRight: 'auto',width: '50%'}}>
                <img style={{width:'85%',margin:'20px',marginTop: '0'}} src={product.img} alt="product.img"/>
            </div>
        </div>
    );
};

export default ProductDetail;