import React from 'react';
import {useStateValue} from '../../StateProvider';
import Cartitem from '../Cartitem/Cartitem.component';
import {getTotal} from '../../Reducer';
import {Link} from 'react-router-dom';
import './CartPg.style.scss';
import Button from '@material-ui/core/Button';


function CartPg() {

   
    const [{cart}]=useStateValue();
    return (
        
            <div className='cart_pg'>
                {
                    cart.length > 0 ? 
                    <div>
                        <div className='btn'>
                            <Link className="link1" to="/Summary">
                            <Button  size="large"  color="primary" variant="contained">Proceed To Pay </Button>
                            
                            </Link>
                            &nbsp;<b>₹{getTotal(cart)}</b>
                               
                            </div>
                            {
                                cart.map((pg)=>(
                                    <Cartitem key={pg.id} data={pg}></Cartitem>
                                ))
                            }
                    </div>
                    :
                    <div className="link">Cart is Empty</div>

                }
            </div>
            

            
       
    )
}

export default CartPg;
