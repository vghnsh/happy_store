import React from 'react'

function Summaryitem({data}) {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={data.imageUrl}></img>
            </div>
            
            <span className='name'>{data.name}</span>
                <span className='quantity'>
                    <span>{data.quantity}</span>
                </span>
            <span className='price'>₹{data.price * data.quantity}</span>     
        </div>
    )
}

export default Summaryitem;
