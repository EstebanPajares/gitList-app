import styled from 'styled-components'
import { isValidElement } from 'react'

const ButtonStyled = styled.button`
    border-radius: .5rem;
    paddin-block: .25rem;
    background: var(--buttonBG);
    color: var(--white);
    border: 1px solid var(--grey);
    min-inline-size: 8.4375rem;
    display: inline-flex;
    gap:.5rem;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    text-decoration:none !important;
    font: var(--button);
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
