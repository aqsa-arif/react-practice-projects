import { createContext, useReducer } from "react"; 

const CartContext = createContext();

const initialCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.quantity;   //action.payload.quantity = 1

        const checkItem = state.items.findIndex(item => {
            return item.id === action.payload.id;
        }) 
        const targetItem = state.items[checkItem]; 

        let updatedItems;
        if (targetItem) {
            const updatedItem = {
                ...targetItem,
                quantity: targetItem.quantity + action.payload.quantity
            }
            updatedItems = [...state.items];
            updatedItems[checkItem] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.payload);
        }

        return {
            totalAmount: updatedTotalAmount,
            items: updatedItems
        }
    }

    if(action.type === 'REMOVE'){
        const checkItem = state.items.findIndex(item => {
            return item.id === action.payload;
        })
        const targetItem = state.items[checkItem];

        const updatedTotalAmount = state.totalAmount - targetItem.price;

        let updatedItems;
        if(targetItem.quantity === 1){
            updatedItems = state.items.filter(item => item.id !== targetItem.id );
        }
        else{
            const updatedItem = {
                ...targetItem,
                quantity: targetItem.quantity - 1
            }
            updatedItems = [...state.items];
            updatedItems[checkItem] = updatedItem;
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return {
        ...state
    }
}


export const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

    const addToCartHandler = (item) => {
        console.log(item);
        dispatchCart({ type: 'ADD', payload: item })
    }
    const removeFromCartHandler = (id) => {
        dispatchCart({ type: 'REMOVE', payload: id })
    }

    const cartcontext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addToCartHandler,
        removeFromCartHandler
    }
   
    return <CartContext.Provider value={cartcontext}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;