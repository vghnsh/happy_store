import React from 'react';
import {Link} from 'react-router-dom';

import {getTotal} from '../../Reducer';

import Button from '@material-ui/core/Button';

import {useStateValue} from '../../StateProvider';

function Summary() {
    const [{cart}]=useStateValue();
    return (
        <div className='summary'>
            <div className='tit'>
            <b><i>Summary of  Shopping</i></b>
            </div>
            <div className='btn'>
                <Link className="link1" to="/Pay">
                <Button  size="large"  color="primary" variant="contained">Pay </Button>
                
                </Link>
                &nbsp;<b>₹{getTotal(cart)}</b>
                    
                </div>
            <div className='product'>
            {
                 cart.map((pg)=>(
                     
                    <div className='checkout-item'>
                        <div className='image-container'>
                            <img alt='item' src={pg.imageUrl}></img>
                        </div>
                        
                        <span className='name'>{pg.name}</span>
                            <span className='quantity'>
                                <span>{pg.quantity}</span>
                            </span>
                        <span className='price'>₹{pg.price * pg.quantity}</span>     
                    </div>

                 ))
            }

            </div>
            

           
        </div>
    )
}

export default Summary;
