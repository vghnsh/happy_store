import React from 'react';
import {useStateValue} from '../../StateProvider';
import Cartitem from '../Cartitem/Cartitem.component';
import {getTotal} from '../../Reducer';
import {Link} from 'react-router-dom';
import './CartPg.style.scss';
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router-dom";

function CartPg() {
    
    const history = useHistory();
    const [{cart,isSign}]=useStateValue();

    const summ=()=>
    {
        if(isSign === true){
            history.push("/Summary");
        }
        else{
            history.push("/SignIn");
        }
        
        
    };
   
    return (
        
            <div className='cart_pg'>
                {
                    cart.length > 0 ? 
                    <div>
                        <div className='btn'>
                            <Link className="link1" >
                            <Button onClick={summ}  size="large"  color="primary" variant="contained">Proceed To Pay </Button>
                            
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
