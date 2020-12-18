import React from 'react';
import Button from '@material-ui/core/Button';
import './Filter.style.scss';

import {useStateValue} from '../../StateProvider';
function Filter() {

    const [,dispatch] = useStateValue();

    const setMen=(e)=>{
        dispatch({
            type:"SET_CATEGORY",
            Category:"men clothing" 
        })
    }
    const setWomen=(e)=>{
        dispatch({
            type:"SET_CATEGORY",
            Category:"women clothing" 
        })
    }
    const setJew=(e)=>{
        dispatch({
            type:"SET_CATEGORY",
            Category:"jewelery" 
        })
    }
    const setElectro=(e)=>{
        dispatch({
            type:"SET_CATEGORY",
            Category:"electronics" 
        })
    }
    const clear=(e)=>{
        dispatch({
            type:"SET_CATEGORY",
            Category:"" 
        })
    }
    
    
   
    return (
        <div>
            <b><h2>Filter</h2></b>
            <div className='Filter'>
            <Button onClick={clear} className='btn' variant="contained" color="primary" >Clear</Button>
            <Button onClick={setWomen} className='btn' variant="contained" color="primary">Women Clothing</Button>
            <Button onClick={setMen} className='btn' variant="contained" color="primary">Men Clothing</Button>
            <Button onClick={setJew} className='btn' variant="contained" color="primary">Jewelery</Button>
            <Button onClick={setElectro} className='btn' variant="contained" color="primary">electronics</Button>
           
        </div>
        </div>

       
    )
}

export default Filter;
 