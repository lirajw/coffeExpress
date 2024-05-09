import styled from "styled-components";
import { mixins } from "../../Styles/Themes/mixins";

export const FormContainer = styled.form`

display: flex;
justify-content: center;
align-items: start; 
gap: 2rem;
`

export const AdressSection = styled.section`
    flex-basis: 75%;

    display: flex;
    flex-direction: column;    

    h1 {
        ${mixins.fonts.titleXS}
        padding-top: 0.75rem;
        padding-bottom: 0.5rem;
        color: ${props => props.theme.colors["base-title"]};
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 2rem;
    }

    & > div + div {
        margin-top: 1rem;
    }
`
export const AdressContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background-color: ${props => props.theme.colors["base-card"]};
`

export const TittleContainer = styled.div`    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;    

    gap: 0.75rem;

    svg {
        color: ${props => props.theme.colors["yellow-dark"]};
    }
    span {        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;    
                
        ${mixins.fonts.textS}
        font-weight: bold;
        color: ${props => props.theme.colors["base-text"]};

        & > p {
            ${mixins.fonts.textXS}
            font-weight: 600;
            color: ${props => props.theme.colors["base-label"]};
        }
    }   
    
    
`
export const PaymentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background-color: ${props => props.theme.colors["base-card"]};
`

export const PaymentTitleContainer = styled.div`

display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;    

    gap: 0.75rem;

    svg {
        color: ${props => props.theme.colors["purple-dark"]};
    }
    span {        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;    
                
        ${mixins.fonts.textS}
        font-weight: bold;
        color: ${props => props.theme.colors["base-text"]};

        & > p {
            ${mixins.fonts.textXS}
            font-weight: 600;
            color: ${props => props.theme.colors["base-label"]};
        }
    } 

`

export const PaymentOptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.875rem;
`
export const InputContainer = styled.div`
        display: grid;
        grid-template-areas: 
            'cep . .'
            'street street street'
            'number fulladdress fulladdress'
            'neighborhood city state';
        grid-template-columns: 200px 1fr 60px;
        grid-gap: 1rem 0.75rem;
`

export const CartSection = styled.section`
    flex-basis: 25%;
    
    & > h1 {
        ${mixins.fonts.titleXS}
        padding-top: 0.75rem;
        padding-bottom: 0.5rem;
        color: ${props => props.theme.colors["base-title"]};
    }           
    
`
export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;

    border-radius: 0 25px 0 25px;
    background: ${props => props.theme.colors["base-card"]};
    border-radius: 0 25px 0 25px;
    padding: 2rem;

    & > div:first-child {
        max-height: 45vh;
        overflow: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 2rem;
    }
`

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;       
    justify-content: center;
    align-items: start;    
    gap: 2rem;

    & > img {
        height: 4rem;
        width: 4rem;
    }

    strong {
        margin-bottom: 0.5rem;
        ${mixins.fonts.textS}
        font-weight: bold;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    & > span {
        margin-left: 1rem;
        margin-top: -5px;
        ${mixins.fonts.titleS}
    }
`
export const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;   
    gap: 0.5rem;

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        ${mixins.fonts.buttonM}
        background: ${props => props.theme.colors["base-button"]};
        padding: 0.5rem;
        border-radius: 8px;

        svg {
            color: ${props => props.theme.colors["purple-dark"]};
        }

        &:hover {
            background: ${props => props.theme.colors["purple-dark"]};
            color: ${props => props.theme.colors["purple-light"]};

            svg {
                color: ${props => props.theme.colors["purple-light"]};
             }
        }
    }
`

export const ResumeContainer = styled.div`
    width: 100%;
    
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: 1;

        ${mixins.fonts.textS}
    }    

    & > div + div {
        margin-top: 0.1rem;
    }

    & > div:nth-child(3) {
        ${mixins.fonts.textM}
        font-weight: bold;
    }

    & > button {
        width: 100%;
        padding: 1rem;
        margin-top: 1rem;

        background: ${props => props.theme.colors['yellow']};
        color: ${props => props.theme.colors.white};
        border-radius: 8px;
        ${mixins.fonts.buttonG}

        &:hover {
            background: ${props => props.theme.colors['yellow-dark']};            
        }
    }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`