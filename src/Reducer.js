export const initialState = {
    cart:[],
    Search:null,
    Category:[],

};
export const getTotal =(cart) =>
    cart?.reduce((price,item)=>item.price * item.quantity + price, 0);

export const getQuant = (cart) =>
    cart?.reduce((quantity,item)=>item.quantity+quantity,0);

function reducer(state,action){
    
    console.log(action);
    switch(action.type){

        case "ADD_TO_CART":
            let newCart1 = state.cart;
            const index = state.cart.findIndex((cart)=> cart.id === action.item.id);
            if(index >= 0 ){
                newCart1.splice(index,1,{
                    id:action.item.id,
                    imageUrl:action.item.imageUrl,
                    name:action.item.name,
                    price:action.item.price,
                    quantity:state.cart[index].quantity+action.item.quantity
                })
            }
            else{
                return {
                    ...state,
                    cart:[...state.cart,action.item],
                } 
            }
            return {
                ...state,
            };
            
        case "REMOVE_FROM_CART":
            let newCart = state.cart;
            const index1 = state.cart.findIndex((cart)=> cart.id === action.item.id);
            
            if(index1 >= 0){
                if(state.cart[index1].quantity < 2){
                    newCart.splice(index1,1);
                }
                else{
                    newCart.splice(index1,1,{
                        id:action.item.id,
                        imageUrl:action.item.imageUrl,
                        name:action.item.name,
                        price:action.item.price,
                        quantity:state.cart[index1].quantity-action.item.quantity
                    })
                }
                
            }else{
                console.warn(`cant remove:${action.id}`);
            }
            return {
                ...state
            };
      
     
        case "SET_SEARCH":
            return{
                ...state,
                Search:action.Search 
            }
        
        case "SET_CATEGORY":
            return{
                ...state,
                Category:action.Category
            }
        
          
        default:
            return state;
    }
}

export default reducer;