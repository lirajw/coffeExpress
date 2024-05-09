import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";
import { CartButtonContainer } from "./Styles";
import { toast } from "react-toastify";


export function CartButton() {
    const {TotalItens} = useCart()
    
    function handleClickWithoutItem() {
        if(TotalItens === 0) {
            toast.warn('Selecione um café antes de prosseguir.', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            })
        }

    }
    return (
        <CartButtonContainer $itemCount={TotalItens}>
            <NavLink onClick={handleClickWithoutItem} to={TotalItens === 0 ? "/" : "/checkout"}>
                <ShoppingCart size={24} weight="fill" />                                     
            </NavLink>
        </CartButtonContainer>
    )
}