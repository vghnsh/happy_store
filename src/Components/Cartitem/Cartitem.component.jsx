import React from 'react';
import './Cartitem.style.scss';

import {useStateValue} from '../../StateProvider';

function Cartitem({data}) {
    const [,dispatch] = useStateValue();

const removeFromCart=()=>{
    dispatch({
        type:"REMOVE_FROM_CART",
        item:
        {
            id:data.id,
            name:data.name,
            imageUrl:data.imageUrl,
            price:data.price,
            quantity:1,
        }
    });
}
  const addToCart=()=>{
       
    dispatch({
        type:"ADD_TO_CART",
        item:
        {
        id:data.id,
        name:data.name,
        imageUrl:data.imageUrl,
        price:data.price,
        quantity:1,
        }
    });
}


    return (
        <div>
            
            <div className='checkout-item'>
                <div className='image-container'>
                    <img alt='item' src={data.imageUrl}></img>
                </div>
                
                <span className='name'>{data.name}</span>

                    <span className='quantity'>
                    <div className='arrow' onClick={removeFromCart} >
                                &#10094;
                    </div>
                        <span>{data.quantity}</span>
                            <div className='arrow' onClick={addToCart} >
                                &#10095;
                            </div>
                        </span>

                    <span className='price'>₹{data.price * data.quantity}</span>
                            <div className='remove-button' onClick={removeFromCart} > &#10005; </div>
                    
            </div>
        </div>
    )
}

export default Cartitem;
