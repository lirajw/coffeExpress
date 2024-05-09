import { NavLink } from 'react-router-dom'
import logo from '/logo.svg'
import { CartButton } from '../CartButton'
import { CityButton } from '../CityButton'
import { HeaderContainer } from './Styles'

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} />
            </NavLink>            
            <aside>
                <CityButton>Porto Alegre, RS</CityButton>
                <CartButton />
            </aside>
        </HeaderContainer>
    )
}