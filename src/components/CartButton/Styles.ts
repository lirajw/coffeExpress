import styled, { css } from "styled-components";

export const CartButtonContainer = styled.nav<{$itemCount: number;}>`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    margin: 0;
    border: 0;
    border-radius: 6px;
    background: ${props => props.theme.colors["yellow-light"]};    

    svg {
        color: ${props => props.theme.colors["yellow-dark"]};
    }


    box-shadow: 0 5px 10px  ${props => props.theme.colors["base-label"]};


    ${props => props.$itemCount === 0 && css`
        box-shadow: none;
        cursor: ;
    `}

    ${props => props.$itemCount > 0 && css`        

        &:hover {
            background: ${props => props.theme.colors["purple"]};

            svg {
                color: ${props => props.theme.colors["purple-light"]};   
            }
            
        }
            
        &::after {
            content: '${props.$itemCount}';
            width: 20px;
            height: 20px;
            background: ${props => props.theme.colors["yellow-dark"]};
            color: ${props => props.theme.colors["yellow-light"]};
            border-radius: 50%;        
            font-size: 10px;
            
            text-align: center;            
            position: absolute;
            top: -12px;
            right: -12px;

            display: flex;
            justify-content: center;
            align-items: center;

                    
        }
    `}
    
    a {
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;  
        padding: 0.5rem;
        outline: none;
        text-decoration:none        
    }    
`