import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { ActionContainer, AdressContainer, TittleContainer, AdressSection, CartContainer, CartItemContainer, CartSection, FormContainer, InputContainer, PaymentContainer, ResumeContainer, PaymentTitleContainer, PaymentOptionContainer, ErrorMessage } from "./Styles";
import { QuantityInput } from "../../components/QuantityInput";
import { useCart } from "../../hooks/useCart";
import { coffees } from '../../../data.json';
import { InputText } from "../../components/InputText";
import { RadioButton } from "../../components/RadioButton";
import zod from 'zod';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Item } from "../../reducers/cart/reducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type FormInputs = {
    cep: number
    street: string
    number: string
    fullAddress: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
  }

  const newOrderFormSchema = zod.object({
    cep: zod.number({ invalid_type_error: 'Informe o CEP (Apenas números)' }),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.string().min(1, 'Informe o número'),    
    neighborhood: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    state: zod.string().min(2, 'Informe a UF (2 digitos)').max(2, 'Informe a UF (2 digitos)'),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
      invalid_type_error: 'Informe um método de pagamento',
    }),
  })

export type NewOrderFromData = zod.infer<typeof newOrderFormSchema>

export function Checkout() {
    const {cart, incrementItemQuantity, decrementItemQuantity, removeItem, checkout } = useCart()
    const navigate = useNavigate()
    
    const newOrderForm = useForm<FormInputs>({
        resolver: zodResolver(newOrderFormSchema),
      })

      const {handleSubmit,watch, formState: { errors } } = newOrderForm
      
      const selectedPaymentMethod = watch('paymentMethod')      

    const coffeesInCart = cart.map((item) => {
        const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)
    
        if (!coffeeInfo) {
          throw new Error('Invalid coffee.')
        }
    
        return {
          ...coffeeInfo,
          quantity: item.quantity,
        }
      })

      const TotalItens = cart.reduce((accumulator, cart) => {
            const currentCoffe = coffeesInCart.find(coffe => coffe.id === cart.id)

            if(currentCoffe) {
                accumulator += currentCoffe.price * cart.quantity
            }

            return accumulator
      }, 0)

      const Total = 3.5 + TotalItens;

      function handleCreateNewOrder(data: NewOrderFromData) {
        if (cart.length === 0) {
          toast.warn('É preciso ter pelo menos um item no carrinho')
        }
        
        checkout(data)        
      }

      function handleIncrementItem(coffeID: string) {
        incrementItemQuantity(coffeID)
      }

      function handleDecrementItem(coffeID: string) {
        decrementItemQuantity(coffeID)
      }

      function handleRemoveItem(coffeID: Item['id']) {
        removeItem(coffeID)
      }

    useEffect(() => {
        if(cart.length == 0) {
            navigate('/')
        }        
    },[cart, navigate])

    return (    
            <main>
                <FormContainer id="order" onSubmit={handleSubmit(handleCreateNewOrder)}>
                <FormProvider {...newOrderForm}>
                    <AdressSection>
                        <h1>Complete seu pedido</h1>                    
                        <AdressContainer>
                            <TittleContainer>
                                <MapPinLine size={18}/>
                                <span>                                    
                                    Endereço de Entrega                                                                
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </span>
                                
                            </TittleContainer>                                                        
                            <InputContainer>                                
                                    <InputText 
                                        placeholder="CEP" 
                                        gridArea="cep"
                                        formName="cep"
                                        isNumber={true}
                                        error={errors.cep?.message}                                       
                                        />
                                    <InputText 
                                        placeholder="Rua" 
                                        gridArea="street"
                                        formName="street"
                                        isNumber= {false}
                                        error={errors.street?.message}
                                    /> 

                                    <InputText 
                                        placeholder="Numero" 
                                        gridArea="number"
                                        formName="number"
                                        error={errors.number?.message} />                                                               
                                    <InputText 
                                        placeholder="Complemento"
                                        gridArea="fulladdress"
                                        formName="fulladdress"
                                        error={errors.fullAddress?.message}
                                        optional />                                
                                    <InputText 
                                        placeholder="Bairro" 
                                        gridArea="neighborhood"
                                        formName="neighborhood"
                                        error={errors.neighborhood?.message}/>
                                    <InputText 
                                        placeholder="Cidade" 
                                        gridArea="city"
                                        formName="city"
                                        error={errors.city?.message}/>
                                    <InputText 
                                        placeholder="UF" 
                                        gridArea="state"
                                        formName="state"
                                        error={errors.state?.message}/>                                                                     
                            </InputContainer>
                        </AdressContainer>
                        <PaymentContainer>
                            <PaymentTitleContainer>
                                <CurrencyDollar/>                                
                                <span>
                                    Pagamento
                                    <p>O pagamento é feito na entrega. Escolha a forma que desejar pagar</p>
                                </span>                                                                                                        
                            </PaymentTitleContainer>
                            <PaymentOptionContainer>
                                <RadioButton 
                                    id="credit" 
                                    value={"credit"}
                                    registerName = "paymentMethod"
                                    checked = {selectedPaymentMethod === 'credit'}                                    
                                >
                                    <CreditCard size={16}/>
                                    <span>Cartão de crédito</span>
                                </RadioButton>
                                <RadioButton 
                                    id="debit" 
                                    value={"debit"}
                                    registerName = "paymentMethod"
                                    checked = {selectedPaymentMethod === 'debit'}
                                >
                                    <Bank size={16}/>
                                    <span>Cartão de debito</span>
                                </RadioButton>
                                <RadioButton 
                                    id="cash"
                                    value={"cash"}
                                    registerName = "paymentMethod"
                                    checked={selectedPaymentMethod === 'cash'}
                                    >
                                    <Money size={16}/>
                                    <span>Dinheiro</span>
                                </RadioButton>                                
                            </PaymentOptionContainer>
                            {errors.paymentMethod && <ErrorMessage role="alert">{errors.paymentMethod.message}</ErrorMessage>}
                        </PaymentContainer>                    
                    </AdressSection>
                    <CartSection>
                        <h1>Cafés selecionados</h1>  
                        <CartContainer>
                            <div>
                                {coffeesInCart.map((coffe) => {
                                    return (
                                        <CartItemContainer key={coffe.id}>
                                            <img src={coffe.image}/>
                                            <div>
                                                <strong>{coffe.title}</strong>
                                                <ActionContainer>
                                                    <QuantityInput
                                                        quantity={coffe.quantity}
                                                        incrementQuantity={() => {handleIncrementItem(coffe.id)}}
                                                        decrementQuantity={() => {handleDecrementItem(coffe.id)}}                                                        
                                                        />
                                                    <button onClick={() => handleRemoveItem(coffe.id)}>
                                                        <Trash size={12}/>
                                                        REMOVER
                                                    </button>
                                                </ActionContainer>                                
                                            </div>
                                            <span>{coffe.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                                        </CartItemContainer>
                                    )
                                })}                                                        
                            </div> 
                            <ResumeContainer>
                                <div>
                                    <span>Total de itens</span>
                                    <span>{TotalItens.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                                </div>
                                <div>
                                    <span>Entrega</span>
                                    <span>R$ 3,50</span>
                                </div>
                                <div>
                                    <strong>Total</strong>
                                    <strong>{Total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>
                                </div>                        
                                <button type="submit" form="order">CONFIRMAR PEDIDO</button>
                            </ResumeContainer>                                                           
                        </CartContainer>

                    </CartSection>
                    </FormProvider>
                </FormContainer> 
            </main>       
    )
}
