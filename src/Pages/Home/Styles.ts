import styled from "styled-components";
export const HomeContainer =styled.main`

    display: flex;
    flex-direction: column;        
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    border-radius: 6px;

    background-image: url('/public/images/hero-bg.svg');

        div {
            flex: 1;
        }
    `

export const DetailedInfoContainer = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-between;
    align-items: start;
    gap: 2rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        line-height: 1.3;
        font-weight: 800;
        color: ${props => props.theme.colors["base-title"]};
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: 400;
        color: ${props => props.theme.colors["base-subtitle"]};
        width: 90%;
        margin-top: -1rem;
    }

`

export const DetailedInfoListContainer = styled.ul`
    display: flex;
    width: 100%;    
    flex-direction: row;
    flex-wrap:wrap;

    list-style-type: none;
    text-decoration: none;

    li {                        
       
        flex-basis: 50%;

        font-size: 0.75rem;
        line-height: 2.5;
        font-weight: 400;        
        display: flex;
        justify-content: flex-start;
        align-items: center;

        gap: 0.5rem;

        span {
            border: 0;
            border-radius: 50%;
            padding: 5px ;

            display: flex;
            justify-content: center;
            align-items: center;            
            color: ${props => props.theme.colors.white};
        }        

        &:nth-child(1) {
            span {
                background: ${props => props.theme.colors["yellow-dark"]};
            }
        }

        &:nth-child(2) {
            span {
                background: ${props => props.theme.colors["base-subtitle"]};
            }
        }

        &:nth-child(3) {
            span {
                background: ${props => props.theme.colors.yellow};
            }
        }

        &:nth-child(4) {
            span {
                background: ${props => props.theme.colors["purple-dark"]};
            }
        }
    }

`

export const CafeListContainer = styled.div`

    margin-top: 3rem;    

    h2 {
            font-family: 'Baloo 2', sans-serif;
            font-size: 1.5rem;
            line-height: 1.3;
            font-weight: 800;
            margin-bottom: 3rem;
            color: ${props => props.theme.colors["base-subtitle"]};
        }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 40px;
        grid-column-gap: 32px;
    }
`