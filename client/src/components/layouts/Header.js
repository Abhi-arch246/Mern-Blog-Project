import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <MainContainer>
            <h1 className='text-center p-2 heading'>Welcome to MERN BloG PosT</h1>
        </MainContainer>
    )
}

//Main Container
const MainContainer=styled.header`
    background:url("https://images.unsplash.com/photo-1526470095252-8aff668ab8bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80") no-repeat center/cover;
    height:15rem;

`;

export default Header
