import { useCart } from "../../hooks/useCart"
import img from '../../../public/images/delivery.svg'
import { Container, ImageContainer, InfoContainer, InfoContent, InfoDetailedContainer } from "./Styles"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export function Success() {
    const { orders } = useCart()    

    return (
        <Container>
            <InfoContainer>
                <h1>uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <div>
                    <InfoContent>
                        <InfoDetailedContainer statusColor="purple">
                            <span>
                                <MapPin size={12} weight="fill"/>
                            </span>
                            <div>
                                <span>Entrega em <strong>{orders[orders.length -1].street}, {orders[orders.length -1].number}</strong></span>                            
                                <span>{orders[orders.length -1].neighborhood}, {orders[orders.length -1].city}</span>  
                            </div>
                        </InfoDetailedContainer>
                        <InfoDetailedContainer statusColor="yellow">
                            <span>
                                <Timer size={12} weight="fill" />
                            </span>
                            <div>
                                <span>Previsão de entrega</span>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </InfoDetailedContainer>
                        <InfoDetailedContainer statusColor="yellowDark">
                            <span>
                                <CurrencyDollar size={14} weight="fill" />
                            </span>                        
                            <div>
                                <span>Pagamento na entrega</span>
                                <strong>{orders[orders.length -1].paymentMethod == 'credit' ? 'Cartão de Crédito' :
                                    orders[orders.length -1].paymentMethod == 'debit' ? 'Cartão de Débito' : 'Dinheiro'}</strong>
                            </div>
                        </InfoDetailedContainer>
                    </InfoContent>
                </div>
            </InfoContainer>
            <ImageContainer>
                <img src={img} alt="" />
            </ImageContainer>
        </Container>
    )
}