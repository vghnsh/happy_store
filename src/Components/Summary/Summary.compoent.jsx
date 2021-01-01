import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {getTotal} from '../../Reducer';

import Button from '@material-ui/core/Button';

import {useStateValue} from '../../StateProvider';
import {db} from '../../firebase';
import './Summary.style.scss';
import Summaryitem from '../Summaryitem/Summaryitem.component';

function Summary() {
    const [{cart,user}]=useStateValue();
    const [,dispatch]= useStateValue();
    const [add,setAdd] =useState();
    const order = () =>{
        if(db.collection('users').onSnapshot((snapshot) => 
        (snapshot.docs.map((doc) =>( doc.uid !== user?.uid)))))
        {
            db.collection('users').doc(user?.uid).set({
                uname: user?.displayName,
                address: add,
            })
        }

        db.collection('users').doc(user?.uid).collection('orders').doc().set({
            amount:getTotal(cart),
            cart:cart,
            time:moment().format('lll')
        })
        dispatch({
            type:"CLEAR_CART",
            cart:[]
        })
    }

    return (
        <div>
        {
            cart.length > 0 ?
            <div className='summary'>
           
            <div className='product'>
            <div className='tit'>
            <b><i>Summary of  Shopping</i></b>
            </div>
            {
                 cart.map((pg)=>(
                     
                    <Summaryitem key={pg.id} data={pg}/>
                 ))
            }
            </div>
            
            <div className='btn'>
            
                    <Button disabled={!add} onClick={order}   size="large" color="primary" variant="contained">
                    <Link className="link_hist" to="/History">Place Your Order</Link> </Button>    
               
                &nbsp;<b>₹{getTotal(cart)}</b>
                <br/>
                <textarea placeholder="Enter your address" onChange={(e)=>setAdd(e.target.value)} style={{height:'5em',width:'15em'}} >
                    
                </textarea> 
            </div>
        </div>
        :
        <div className='center'><b><i>Cart is empty</i></b></div>
        }
        </div>
        
    )
}

export default Summary;
