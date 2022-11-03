import React from 'react'
import styled from 'styled-components'

const RepoListStyled = styled.div`
    grid-area: repo-list;
    background-color: orange;
`

function RepoList() {
    return (
        <RepoListStyled>
            RepoList
        </RepoListStyled>
    )
}

export default RepoList
