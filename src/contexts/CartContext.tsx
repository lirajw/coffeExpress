import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { Item, Order, cartReducer } from "../reducers/cart/reducer";
import { CheckoutOrderAction, DecrementItemAction, IncrementItemAction, RemoveItemAction, addItemAction } from "../reducers/cart/actions";
import { NewOrderFromData } from "../Pages/Checkout";
import { useNavigate } from "react-router-dom";

interface CartContextType {
    cart: Item[]
    TotalItens: number
    orders: Order[]
    addItem: (item: Item) => void
    removeItem: (itemId: Item['id']) => void
    decrementItemQuantity: (itemId: Item['id']) => void
    incrementItemQuantity: (itemId: Item['id']) => void    
    checkout: (order: NewOrderFromData) => void
    isOrderAdded: boolean,
    changeIsOrderAdded: (newValue: boolean) => void
  }

export const CartContext = createContext({} as CartContextType)

interface CartProviderType {
    children: ReactNode
}
export function CartContextProvider({children}:CartProviderType) {
    const [isOrderAdded, setIsOrderAdded] = useState(false)

    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart: [],
            TotalItens: 0
           // orders: []
        },
        (cartState) => {
            const storedStateAsJSON = localStorage.getItem(
              '@coffee-delivery:cart-state-1.0.0',
            )
      
            if (storedStateAsJSON) {
              return JSON.parse(storedStateAsJSON)
            }
      
            return cartState
        },
    )       

    const navigate = useNavigate()

    const { cart, TotalItens, orders } = cartState

    function checkout(order: NewOrderFromData) {
        dispatch(CheckoutOrderAction(order, changeIsOrderAdded))
    }

    function addItem(item: Item) {        
        if(item.quantity > 0) {            
            dispatch(addItemAction(item))
        }        
    }

    function removeItem(itemID: Item['id']) {
        dispatch(RemoveItemAction(itemID))
    }
    function decrementItemQuantity(itemID: Item['id']) {
        dispatch(DecrementItemAction(itemID))
    }

    function incrementItemQuantity(itemID: Item['id']) {
        dispatch(IncrementItemAction(itemID))
    }

    function changeIsOrderAdded(newValue: boolean) {
        setIsOrderAdded(newValue)
    }
    useEffect(() => {        
        if (cartState) {
          const stateJSON = JSON.stringify(cartState)
    
          localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
        }
      }, [cartState])
    
      useEffect(() => {
        if(isOrderAdded === true) {
            navigate('/success')
            changeIsOrderAdded(false)
        }
      }, [isOrderAdded, navigate])
            
    return (
        <CartContext.Provider
        value={
            {
                cart,
                addItem,
                TotalItens,
                decrementItemQuantity,
                incrementItemQuantity,
                removeItem,
                checkout,
                orders,
                changeIsOrderAdded,
                isOrderAdded
            }
        }>
            {children}
        </CartContext.Provider>
    )

}