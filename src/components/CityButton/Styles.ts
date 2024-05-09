import styled from "styled-components";

export const CityAnchor = styled.a`

    display: flex;
    justify-items: center;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem;
    font-size: 0.875rem;
    line-height: 1rem;
    background: ${props => props.theme.colors["purple-light"]};
    color: ${props => props.theme.colors["purple"]};
    border-radius: 6px;

    box-shadow: 0 5px 10px  ${props => props.theme.colors["base-label"]};
    svg {
        color: ${props => props.theme.colors["purple-dark"]};                
    }

    &:hover {
        background: ${props => props.theme.colors["purple"]};
        color: ${props => props.theme.colors["purple-light"]};   

        svg {
          color: ${props => props.theme.colors["purple-light"]};   
        }
    }
`