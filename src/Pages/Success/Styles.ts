import styled from "styled-components";
import { mixins } from "../../Styles/Themes/mixins";

export const Container = styled.main`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: start;
    width: 100%;    


    & > h1 {
        ${mixins.fonts.titleL}
        color: ${props => props.theme.colors["yellow-dark"]};
        padding-bottom: 0.1rem;
    }

    & > p {
        ${mixins.fonts.textS}
        font-weight: 600;
        color: ${({ theme }) => theme.colors['base-subtitle']};
        
    }

    & > div {
        position: relative;
        width: 85%;
        margin-top: 3rem;
        background: ${({ theme }) => theme.colors.background};; // Cor de fundo da div, ajuste conforme necessário
        border-radius: 6px 36px; // Isso aplica o arredondamento ao elemento principal

        &::before {
            content: '';
            position: absolute;
            top: -1px; // Extende ligeiramente fora para cobrir como uma borda
            right: -1px;
            bottom: -1px;
            left: -1px;
            border-radius: 6px 36px; // Garante que o pseudo-elemento também seja arredondado
            background: linear-gradient(to bottom right, ${({ theme }) => `${theme.colors.yellow}, ${theme.colors.purple}`});
            z-index: -1;
            pointer-events: none; // Assegura que o pseudo-elemento não interfira com a interação do usuário
        }
    }; 
`
export const InfoContent = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;  
    padding: 1rem;
`
const IMAGE_COLORS = {
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
    purple: 'purple-dark',
} as const

interface IMAGEProps {
    statusColor: keyof typeof IMAGE_COLORS
}

export const InfoDetailedContainer = styled.div<IMAGEProps>`

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    
    & > span {
        width: 25px;
        height: 25px;
        border-radius: 50%;

        display: flex;        
        justify-content: center;
        align-items: center;

        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors[IMAGE_COLORS[props.statusColor]]};
    }

    
    & > div {
        display: flex;
        flex-direction: column;

        span {
            ${mixins.fonts.textS}
            font-weight: 400;
        }

    }

`

export const ImageContainer = styled.div`
   & > img {
        height: 293px;
        width: 492px;
    }    
`