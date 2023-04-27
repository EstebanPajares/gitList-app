import React from 'react'
import styled from 'styled-components'
import Icon from './icon'


const FiltersStyled = styled.div`
    grid-area: filters;
    background-color: grey;
    color: green;
`

function Filters() {
    return (
        <FiltersStyled>
            <h1>Filters Icon</h1>
            <Icon name = 'heart'/>
            <Icon name = 'branch'/>
            <Icon name = 'check'/>
        </FiltersStyled>
    )
}

export default Filters
