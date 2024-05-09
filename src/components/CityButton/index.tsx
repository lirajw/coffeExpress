import { ReactNode } from "react";
import { CityAnchor } from "./Styles";
import { MapPin } from "phosphor-react";

interface CityButtonProps {
    children: ReactNode
}
export function CityButton({children}: CityButtonProps) {
    return (
        <CityAnchor>
            <MapPin size={24} weight="fill"/>
            {children}
        </CityAnchor>
    )
}