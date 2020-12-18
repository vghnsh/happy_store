import React from 'react';
import Cartitem from '../Cartitem/Cartitem.component';
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
                     <Cartitem key={pg.id} data={pg}></Cartitem>
                 ))
            }

            </div>
            

           
        </div>
    )
}

export default Summary;
