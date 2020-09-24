import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';
import { useForm } from "react-hook-form";
import './CartDetail.css';

const CartDetail = () => {

    const [submi, setSubmi] = useState([{}]);

    const { cart } = useContext(CategoryContext);
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => setSubmi(data);

    const total = cart.reduce( (total,product) => total + Number(product.price) , 0)

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div className='d-flex col md-6'>
            <div className="DeliveryDetails col md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="firstName" ref={register({ required: true, Length: 20 })} className='inputBox' /><br />
                        {errors.firstName && <span style={{color: 'red'}}>This field is required</span>}
                    <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} className='inputBox' /><br />
                        {/* {errors.lastName && <span style={{color: 'red'}}>This field is required A-Za-z+$i</span>} */}
                    <input name="Flat" ref={register({ required: true, maxLength: 2 })} className='inputBox' /><br />
                        {errors.Flat && <span style={{color: 'red'}}>This field is required</span>}
                    <input name="BusinessName" ref={register({ required: true, maxLength: 2 })} className='inputBox' /><br />
                        {errors.BusinessName && <span style={{color: 'red'}}>This field is required</span>}
                    <input name="AddDeliveryInstructor" ref={register({ required: true, maxLength: 2 })} className='inputBox' /><br />
                        {errors.AddDeliveryInstructor && <span style={{color: 'red'}}>This field is required</span>}
                    <input type="submit" className='inputBtn' />
                </form>
            </div>
            <div className="DeliveryItemsDetails col md-6">
                {cart.map(cart =>
                    <div className="card mb-3" style={{ maxWidth: "540px",padding:'20px' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={cart.img} className="card-img" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6 className="card-title">{cart.name}</h6>
                                    <p className="card-text">$ {cart.price}</p>
                                    <p className="card-text"><small className="text-muted">{cart.description}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    
                    {cart.length >= 1  ? 

                            <div>
                            <p>Subtotal.{cart.length} Item: ${total}</p>
                            <p>product Price: {formatNumber(total)}</p>
                            <p>Shipping Cost:{shipping}</p>
                            <p><small>Tax + VAT: {tax}</small></p>
                            <p><b>total:{grandTotal}</b></p>
                                {submi.firstName ? <button>Order</button>
                                : <p>plz form submit</p>
                                }
                            </div>
                        : <h1>cart Item 0 </h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default CartDetail;