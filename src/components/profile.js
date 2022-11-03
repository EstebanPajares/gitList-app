import React from 'react'
import styled from 'styled-components'

const ProfileStyled = styled.div`
    background-color: blue;
    grid-area: profile;
`

function Profile() {
    return (
        <ProfileStyled>
            Profile
        </ProfileStyled>
    )
}

export default Profile

