/* eslint-disable no-case-declarations */
import { NewOrderFromData } from "../../Pages/Checkout"
import { ActionTypes, Actions } from "./actions"

export interface Item {
    id: string
    quantity: number
  }

  export interface Order extends NewOrderFromData {
    id: string
    items: Item[]
  }

interface CartInterface {
    TotalItens: number,
    cart: Item[],
    orders: Order[]
}

  export function cartReducer(state: CartInterface, action: Actions) : CartInterface {        
        switch (action.type) {
            case ActionTypes.ADD_ITEM:                                        
                const itemAlreadyAdded = state.cart.find(x => x.id === action.payload.item.id)             
                if(itemAlreadyAdded) {
                    const index = state.cart.findIndex(prod => prod.id === action.payload.item.id)

                    if(index === -1) return state                    
                    return {
                        ...state,
                        cart : [
                            ...state.cart.slice(0, index),
                            {
                                ...state.cart[index],
                                quantity: state.cart[index].quantity + action.payload.item.quantity
                            },
                            ...state.cart.slice(index + 1)
                        ],
                        TotalItens : state.TotalItens + action.payload.item.quantity
                    } 
                } else {
                    return {
                        ...state,
                        cart : [...state.cart, action.payload.item],
                        TotalItens : state.TotalItens + action.payload.item.quantity
                    }
                }
            case ActionTypes.REMOVE_ITEM:
                const indexRemove = state.cart.findIndex(prod => prod.id === action.payload.itemId)
                return {
                    ...state,
                    TotalItens: state.TotalItens - state.cart[indexRemove].quantity,
                    cart: [...state.cart.filter(c => c.id !== action.payload.itemId)],
                }
            case ActionTypes.DECREMENT_ITEM_QUANTITY:
                const index = state.cart.findIndex(prod => prod.id === action.payload.itemId)

                if(index === -1) return state

                if(state.cart[index].quantity == 1)
                    return state

                return {
                    ...state,
                    cart : [
                        ...state.cart.slice(0, index),
                        {
                            ...state.cart[index],
                            quantity: state.cart[index].quantity - 1
                        },
                        ...state.cart.slice(index + 1)
                    ],
                    TotalItens : state.TotalItens - 1
                } 

            case ActionTypes.INCREMENT_ITEM_QUANTITY:
                const indexIncrement = state.cart.findIndex(prod => prod.id === action.payload.itemId)

                if(indexIncrement === -1) return state

                return {
                    ...state,
                    cart : [
                        ...state.cart.slice(0, indexIncrement),
                        {
                            ...state.cart[indexIncrement],
                            quantity: state.cart[indexIncrement].quantity + 1
                        },
                        ...state.cart.slice(indexIncrement + 1)
                    ],
                    TotalItens : state.TotalItens + 1
                } 
            case ActionTypes.CHECKOUT_CART: 
                const newOrder = {
                    id: new Date().toString(),
                    items: state.cart,
                    ...action.payload.order,
                } as Order
      
                
                action.payload.callback(true)
                
                return {
                        ...state,   
                        orders: [...state.orders, newOrder],                  
                        cart: [],
                        TotalItens: 0
                    }
            default:
                return {...state};
        }
  }

