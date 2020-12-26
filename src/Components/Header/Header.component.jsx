import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg';
import {useStateValue} from '../../StateProvider';
import {TextField } from '@material-ui/core';
import logo from '../Header/logo9.png';
import SearchIcon from '@material-ui/icons/Search';

import {getQuant} from '../../Reducer';
import {auth} from '../../firebase';
function Header() {
    
    const [,dispatch] = useStateValue();
    const [{cart,user,isSign}]=useStateValue();
    
    const  handleChange=(e)=>{
        dispatch({
            type:"SET_SEARCH",
            Search: e.target.value
        })
    }

    const signOut=(event)=>{
        event.preventDefault();
        
        auth.signOut();
        
      };

    return (
        <nav className="header">
            
            <Link className="amz" to="/">
                <img 
                className="logo"
                src={logo} 
                alt="Logo"/>
            </Link>

            <div className='SearchBar'>
                <TextField
                    className='product'
                    id="outlined-secondary"
                    label="Product"
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                    />

                <SearchIcon className='SearchIcon' >
                    
                </SearchIcon>

            </div>
            
            {
                user?.displayName? 
                <Link className="link" to="/">{user.displayName}</Link>
                :<Link className="link" to="/" >Account</Link>
            }
            
           
            {
                isSign ? 
                <Link
                className="link" 
                onClick={signOut} 
                to="/"
                
                >Logout 
                </Link>
                :
                
                <Link className="link" to="/SignIn">
                SignIN
                </Link>
               
            }
            
           

            <Link to="/Cart_Pg">
                <div className="cart-icon">
                    <ShoppingIcon
                    className="shop-icon"/>    
                    <span className="item-count">
                        {getQuant(cart)}   
                    </span>
                    </div>
            </Link> 
        </nav>
    )
}
export default Header;