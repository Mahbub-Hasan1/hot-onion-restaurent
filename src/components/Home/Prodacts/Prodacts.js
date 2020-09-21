import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../../App';
import fakeDataProducts from '../../fakeDataProducts/fakeDataProducts';
import CategoryDetail from './CategoryDetail/CategoryDetail';

const Prodacts = () => {
    const [category, setCategory] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    const productsData = fakeDataProducts;
    useEffect(() => {
        const matchedProducts = productsData.filter(pd => pd.category === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <button class="btn btn-outline-primary" onClick={() => setCategory("breakfast")}>Breakfast </button>
                <button class="btn btn-outline-primary" onClick={() => setCategory("dinner")}>Dinner </button>
                <button class="btn btn-outline-primary" onClick={() => setCategory("lunch")}>Lunch </button>
                <h4>Category:{category}</h4>
            </div>

            <div className="row" style={{marginLeft:'5%'}}>
                {
                    products.map(pd => <CategoryDetail key={pd.id} products={pd}></CategoryDetail>)
                }
            </div>

        </div>
    );
};

export default Prodacts;