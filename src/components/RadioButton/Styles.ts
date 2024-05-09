import styled from "styled-components";
import { mixins } from "../../Styles/Themes/mixins";

export const RadioButtonContainer = styled.label`
    padding: 0.75rem 0.3rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};
    
    gap: 0.75rem;

    text-transform: uppercase;
    ${mixins.fonts.buttonM}

    transition: all 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    &[data-state='true'] {
        background-color: ${({ theme }) => theme.colors['purple-light']};
        border-color: ${({ theme }) => theme.colors.purple};
    }

    input {
        display: none;
    }

    svg {
        color: ${({ theme }) => theme.colors.purple};
    }
`