export const initialState = {
    cart:[],
    Search:null,
    Category:[],
    isSign:false,
    user:null,
    product:[],
    filter:[],
    isLoading:false,
};

export const getTotal =(cart) =>
    cart?.reduce((price,item)=>item.item.price * item.quantity + price, 0);

export const getQuant = (cart) =>
        cart?.reduce((quantity,item)=>item.quantity+quantity,0);

   
function reducer(state,action){
    console.log(action);
    console.log(state)
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:action.isLoading
            }

        case "SET_CURRENT_USER":
                return{
                    ...state,
                    user:action.user,
                    isSign:action.isSign
                };

        case "ADD_TO_CART":
            let newCart1 = state.cart;
            const index = state.cart.findIndex((cart)=> cart.item.id === action.item.id);
            if(index >= 0 ){
                newCart1.splice(index,1,{
                    item:action.item,
                    quantity:state.cart[index].quantity+action.quantity
                })
            }
            else{
                return {
                    ...state,
                    cart:[...state.cart,{item:action.item,quantity:action.quantity}],
                } 
            }
            return {
                ...state,
            };
            
        case "REMOVE_FROM_CART":
            let newCart = state.cart;
            const index1 = state.cart.findIndex((cart)=> cart.item.id === action.item.id);
            
            if(index1 >= 0){
                if(state.cart[index1].quantity < 2){
                    newCart.splice(index1,1);
                }
                else{
                    newCart.splice(index1,1,{
                        item:action.item,
                        quantity:state.cart[index1].quantity-action.quantity
                    })
                }
                
            }else{
                console.warn(`cant remove:${action.id}`);
            }
            return {
                ...state
            };
            
        case "CLEAR_CART":
            let newCart3 = state.cart;
            const index3 = state.cart.findIndex((cart)=> cart.item.id === action.id);
            if(index3>=0){
                newCart3.splice(index3,1);
            }
            return{
                ...state
            };
     
        case "SET_SEARCH":
            return{
                ...state,
                Search:action.Search 
            }
        
        case "SET_CATEGORY":
            let newProduct = state.product;
            newProduct.filter((pr) =>(
                pr.category === action.Category
            ))
            return{
                ...state,
               
            }
        
            case "PRODUCTS":
                return{
                    ...state,
                    product:action.product
                }
                case "EMPTY_CART":
                    return{
                        ...state,
                        cart:action.cart
                    }
            
            case "FILTER":
                return{
                    ...state,
                    filter:action.filter
                }
          
        default:
            return state;
    }
}

export default reducer;