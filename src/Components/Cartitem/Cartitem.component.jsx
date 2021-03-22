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
                id:data.item.id,
                name:data.item.name,
                imageUrl:data.item.imageUrl,
                price:data.item.price,
            }
            ,quantity:1
        });
    }
    const addToCart=()=>{
        dispatch({
            type:"ADD_TO_CART",
            item:
            {
                id:data.item.id,
                name:data.item.name,
                imageUrl:data.item.imageUrl,
                price:data.item.price,    
            }
            ,quantity:1
        });
    }
    const clearFromCart=()=>{
        dispatch({
            type:"CLEAR_CART",
            id:data.item.id, 
        });
    }
    return (
           
            <div className='checkout-item1'>
                <div className='image-container'>
                    <img alt='item' src={data.item.imageUrl.replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/')} ></img>
                </div>

                <span className='name'>{data.item.name}</span>

                <span className='quantity'>
                    <div className='arrow' onClick={removeFromCart} >
                        &#10094;
                    </div>
                    <span>{data.quantity}</span>
                    <div className='arrow' onClick={addToCart} >
                        &#10095;
                    </div>
                </span>
                <span className='price'>₹{data.item.price * data.quantity}</span>
                    <div className='remove-button' onClick={clearFromCart} > &#10005; 
                    </div>  
            </div>
        
    )
}

export default Cartitem;
