import React from 'react'
import styled from 'styled-components'
import Icon from './icon'


const FiltersStyled = styled.div`
    grid-area: filters;
    background-color: grey;
    color: var(--white);

`

function Filters() {
    return (
        <FiltersStyled>
            <h1>Filter Icons</h1>
            <Icon name = 'heart'/>
            <Icon name = 'branch'/>
            <Icon name = 'check'/>
            <Icon name = 'home' />
            <Icon name = 'cancel' />
            <Icon name = 'book' />
            <Icon name = 'link' />
            <Icon name = 'location' />
            <Icon name = 'search' />
            <Icon name = 'star' />
            <Icon name = 'twitter' />
            <Icon name = 'user' />
            <Icon name = 'github' />
            <Icon name = 'arrow-down' />
        </FiltersStyled>
    )
}

export default Filters
