import { InputHTMLAttributes } from "react";
import { RadioButtonContainer } from "./Styles";
import { useFormContext } from "react-hook-form";

interface RadioButtonTypes extends InputHTMLAttributes<HTMLInputElement>{
    registerName: string
}

export function RadioButton({children, checked, registerName, ...props}:RadioButtonTypes) {
    const { register} = useFormContext()
    
    return (
        <RadioButtonContainer data-state = {checked}>
            <input 
            type="radio"
            {...register(registerName)}
             {...props}
             />
            {children}
        </RadioButtonContainer>
    )
}