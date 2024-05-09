import { CafeListContainer, DetailedInfoContainer, DetailedInfoListContainer, HomeContainer, InfoContainer } from "./Styles";
import Hero from '../../../public/images/hero.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Card } from "../../components/Card";
import { coffees } from '../../../data.json';

export function Home() {
    return (
        <HomeContainer>            
            <InfoContainer>
                <DetailedInfoContainer>                    
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>                                        
                    <DetailedInfoListContainer>
                        <li>   
                            <span>
                                <ShoppingCart size={12} weight="fill"/>
                            </span>                            
                            Compra simples e segura
                        </li>
                        <li>
                            <span>
                                <Package size={12} weight="fill"/>                                
                            </span>                                                     
                            Embalagem mantém o café intacto
                            </li>
                        <li>
                            <span><Timer size={12} weight="fill" /></span>                            
                            Entrega rápida e rastreada
                        </li>
                        <li>
                            <span><Coffee size={12} weight="fill" /></span>
                            O café chega fresquinho até você
                        </li>
                    </DetailedInfoListContainer>                    
                </DetailedInfoContainer>
                <div>
                    <img src={Hero}/>
                </div>
            </InfoContainer>
            <CafeListContainer>
                <h2>Nossos Cafés</h2>
                <ul>
                    {coffees.map(coffee => (
                        <Card key={coffee.id} coffee={coffee}/>
                    ))}
                </ul>
            </CafeListContainer>
        </HomeContainer>
    )
}