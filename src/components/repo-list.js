import React from 'react'
import styled from 'styled-components'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
    grid-area: repo-list;
    background-color: skyblue;
`

function RepoList({ repoList }) {
    return (
        <RepoListStyled>
            {repoList.map((item)=>{
                return <RepoItem {...item} key= {item.id}/>
            })}
        </RepoListStyled>
    )
}

export default RepoList
