import { useFormContext } from "react-hook-form"
import { BoxContainer, ErrorMessage, LabelContainer } from "./Styles"
import { InputHTMLAttributes, useState } from "react"

interface InputTextType extends InputHTMLAttributes<HTMLInputElement>{
    optional?: boolean,    
    gridArea: string,
    formName: string,
    isNumber?: boolean
    error?: string
}

export function InputText( {optional, formName, isNumber = false, error, gridArea, ...props} : InputTextType) { 
    const [isFocused, setIsFocused]  = useState(false)
    const { register} = useFormContext()

    function handleFocus() {
        setIsFocused(true)        
    }
    
    function handleBlur() {
        setIsFocused(false)        
    }
    
    return (
        <BoxContainer $gridarea={gridArea}>
            <LabelContainer data-state = {isFocused ? 'focused' : 'blurred'}>
                <input 
                type="text"          
                {...register(formName, {valueAsNumber: isNumber})}                      
                onFocus={handleFocus}                                
                onBlur={handleBlur}
                {...props} />
                {optional && <span>Optional</span>}
            </LabelContainer>
            {(error?.length ?? 0) > 0 && <ErrorMessage role="alert">{error}</ErrorMessage>}
        </BoxContainer>
        
    )
}