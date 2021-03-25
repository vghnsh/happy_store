import React from 'react'

function Summaryitem({data}) {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={data.item.imageUrl}></img>
            </div>
            
            <span className='name'>{data.item.name}</span>
                <span className='quantity'>
                    <span>{data.quantity}</span>
                </span>
            <span className='price'>₹{data.item.price * data.quantity}</span>     
        </div>
    )
}

export default Summaryitem;
