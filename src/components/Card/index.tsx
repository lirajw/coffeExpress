import { ShoppingCart } from "phosphor-react";
import { AddCartButton, CardContainer, CartActionContainer, CartContainer, Tag } from "./Styles";
import { QuantityInput } from "../QuantityInput";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Item } from "../../reducers/cart/reducer";
import { toast } from "react-toastify";

export interface CoffeType {
    coffee: {
        id: string
        title: string
        description: string
        tags: string[]
        price: number
        image: string
      }
}


export function Card({coffee} : CoffeType) {
    const [ qtyItem, setQtyItem ] = useState(0)
    const {addItem} = useCart()

    function incrementQuantityItem() {
        setQtyItem(prev => prev + 1)
    }

    function decrementQuantityItem() {        
        setQtyItem(prev => prev - 1 > 0 ? prev - 1 : 0)
    }

    function handleAddItem(coffe: Item) {
        addItem(coffe)
        toast.success('Café adicionado ao carrinho', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <CardContainer>            
            <img src={coffee.image} alt={coffee.title} />
            <div>
                {coffee.tags.map(tag => {
                    return (<Tag key={tag}>{tag.toUpperCase()}</Tag>)
                })}

            </div>            
            <strong>{coffee.title}</strong>
            <p>{coffee.description}</p>
            <CartContainer>
                <span>{coffee.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <CartActionContainer>                    
                    <QuantityInput
                        quantity={qtyItem}
                        incrementQuantity={incrementQuantityItem}
                        decrementQuantity={decrementQuantityItem}
                    />                                        
                    <AddCartButton onClick={() => 
                        handleAddItem({
                            id: coffee.id,
                            quantity: qtyItem
                        })}>
                        <ShoppingCart size={24} weight="fill"/>
                    </AddCartButton>
                </CartActionContainer>
            </CartContainer>
        </CardContainer>
    )
}