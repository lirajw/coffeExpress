import { NewOrderFromData } from "../../Pages/Checkout"
import { Item } from "./reducer"

export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
    CHECKOUT_CART = 'CHECKOUT_CART',
  }

  interface CallbackTYpe {
    (newValue: boolean): void
  }
  export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: NewOrderFromData,
        callback: CallbackTYpe,        
      }
    }

  export function addItemAction(item: Item) {
    return {
      type: ActionTypes.ADD_ITEM,
      payload: {
        item,
      },
    } satisfies Actions
  }

  export function DecrementItemAction(itemId: Item['id']) {
    return {
      type: ActionTypes.DECREMENT_ITEM_QUANTITY,
      payload: {
        itemId,
      },
    } satisfies Actions
  }

  export function IncrementItemAction(itemId: Item['id']) {
    return {
      type: ActionTypes.INCREMENT_ITEM_QUANTITY,
      payload: {
        itemId,
      },
    } satisfies Actions
  }

  export function RemoveItemAction(itemId: Item['id']) {
    return {
      type: ActionTypes.REMOVE_ITEM,
      payload: {
        itemId,
      },
    } satisfies Actions
  }

  export function CheckoutOrderAction(order : NewOrderFromData, callback: CallbackTYpe) {
    return {
      type: ActionTypes.CHECKOUT_CART,
      payload: {
        order: order,
        callback: callback
      }
    } satisfies Actions
  }