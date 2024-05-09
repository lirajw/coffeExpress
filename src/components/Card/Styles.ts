import styled from "styled-components";
import { mixins } from "../../Styles/Themes/mixins";

export const CardContainer = styled.li`      
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors["base-card"]};

    border-radius: 0 25px 0 25px;

    img {
        width: 120px;
        height: 120px;
        margin-top: -20px;
    }

    strong {
        ${mixins.fonts.titleXS}
        padding-top: 0.75rem;
        padding-bottom: 0.5rem;
        color: ${props => props.theme.colors["base-title"]};
    }

    p {
        font-size: 0.75rem;
        line-height: 130%;
        font-weight: 400;
        text-align: center;
        color: ${props => props.theme.colors["base-label"]};

    }

    & > div {
        flex: 1;
        display: flex;
        gap: 0.4rem;

    }
`

export const Tag = styled.span`
        ${mixins.fonts.tag}
        padding: 0.25rem 0.5rem;
        border-radius: 8px;
        margin-top: 0.5rem;

        background: ${props => props.theme.colors["yellow-light"]};
        color: ${props => props.theme.colors["yellow-dark"]};
`

export const CartContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 1rem;    
        
        & > span:first-child {
            ${mixins.fonts.titleXS}            
            color: ${props => props.theme.colors["base-subtitle"]};
        }
`

export const CartActionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;  
    
    gap: 0.5rem;
`

export const AddCartButton = styled.button`
    background-color: ${props => props.theme.colors["purple-dark"]};
    color: ${props => props.theme.colors.white};
    border: 0;
    border-radius: 8px;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${props => props.theme.colors["purple"]};
        color: ${props => props.theme.colors["purple-light"]};   
    }
`