
import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header.component';
import Banner from './Components/Banner/Banner.component';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import MediaCard from './Components/MediaCard/MediaCard.component';
import Filter from './Components/Filter/Filter.component';
import {useStateValue} from './StateProvider';
import CartPg from './Components/CartPg/CartPg.component';
import Summary from './Components/Summary/Summary.compoent';
import Pay from './Components/Pay/Pay.component';
import SignIn from './Components/SignIn/SignIn.component';
import SignUp from './Components/SignUp/SignUp.component';
import {auth} from './firebase';
function App() {
  
  const [,dispatch] = useStateValue();
  const [products,setProduct] = useState();
  const [category, setCategory]= useState();
  const [{Search,Category}]=useStateValue();

  useEffect(()=>{
    const unsubsribe= auth.onAuthStateChanged((authUser)=>{
    
      if(authUser){
        
        
        dispatch({
            
          type:"SET_CURRENT_USER",
          user:authUser,
          isSign:true
      });
      }
      else{
       
        dispatch({
        
          type:"SET_CURRENT_USER",
          user:null,
          isSign:false
          
      });
        
      }
      return()=>{
        unsubsribe();
      };
    });
  },[dispatch]);

  useEffect(()=>{
    if(Category.length > 0){
      fetch(`https://fakestoreapi.com/products/category/${Category}`)
            .then(res=>res.json())
            .then(json=>setCategory(json));
    }
    else{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json));

    }       
  },[Category]);

 
 
  return (
    <div className="App">
       <Router>
        <Switch>
          
          <Route path="/Cart_Pg">
           <Header/>
           <CartPg/>
          </Route>

          <Route path="/Summary">
           <Header/>
           <Summary/>
          
          </Route>
          <Route path="/SignIn">
            <SignIn/>    
          </Route>

          <Route path="/SignUp">
            <SignUp/>    
          </Route>



        
          <Route path="/Pay">
              <Pay/>
          </Route>

          <Route  path="/">
            <Header/>
            <Banner/>
            <div className="filterMain">
            <Filter/>
            <div className='productbg'>
            {
              Category.length > 0 ? 
              category?.map((cat)=>(
                <MediaCard key={cat.id} data={cat}/>
              ))
              :
              products !== undefined ?

               Search === null || Search === '' ?
                products?.map((product)=>(
                <MediaCard key={product.id} data={product}/>
              ))  
              :
              products.filter((product)=>(
                  product?.title.toLowerCase().indexOf(Search.toLowerCase()) !== -1   
              )).map((product)=>(
                <MediaCard key={product.id} data={product}/>
              ))
          :''
          
            } 
            
             
        

          
            </div>
            </div>
           
            
            
          </Route>
        </Switch>
      </Router >
    </div>
  );
}
export default App;
