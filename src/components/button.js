import styled from 'styled-components'
import { isValidElement } from 'react'

const ButtonStyled = styled.button`
    background: var(--buttonBG)
    border: 1px solid var(--grey);
    border-radius: .5rem;
    min-inline-size: 8.4375rem;
    display: inline-flex;
    gap:.5rem;
    align-items:center;
    justify-content:center;
    paddin-block: .25rem;
    cursor:pointer;
    text-decoration:none !important;
    font: var(--button);
    color: var(--white);
    &:hover{
        background: var(--white);
        color: var(--button);
    }

`

function Button({text, link, className, icon}) {
    const component = link ? 'a' : 'button'
    let IconComponent = null
    if(icon){
        if(isValidElement(icon)){
            IconComponent = icon
        }
    }
    return (
        <ButtonStyled as={component} href={link} className={className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export default Button
