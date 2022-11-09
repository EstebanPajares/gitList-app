import React from 'react'
import styled from 'styled-components'

const ProfileStyled = styled.div`
    /* background-color: blue; */
    grid-area: profile;

    .avatar{
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow: hidden;
        box-sizing: border-box;
        margin-block: 1.5rem;
    }

    .name{
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem;
    }

    .userName{
        margin-block-start: .5rem;
        margin-block-end: 1.5rem;
        font: var(--headline2-ligth);
    }

    .info{
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }

    a:hover {
        text-decoration: underline;
    }
    .buttons{
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }
`

function Profile() {
    return (
        <ProfileStyled>
            <img className='avatar' src="" width="278" height="278" alt="Avatar de Esteban" title="Perfil de Esteban" />
            <p className="name">Esteban</p>
            <p className="userName">EstebanPajares</p>
            <div className='buttons'>
                <button>Follow</button>
                <button>Sponsors</button>
            </div>
            <p className="bio info">Frontend Developer</p>
            <p className="followers info">
                . 10 <span>followers</span>  <span>.</span> 15 <span>following</span>
            </p>
            <p className="stars info">
                . 85
            </p>
            <p className="location info">
                Lima - Perú
            </p>
            <a className='info' href="https://github.com/EstebanPajares" target="_blank" rel="noreferrer">https://github.com/EstebanPajares</a>
            <a className='info' href="https://twitter.com/Esteban_Pajares" target="_blank" rel="noreferrer">@EstebanPajares</a>

        </ProfileStyled>
    )
}

export default Profile

