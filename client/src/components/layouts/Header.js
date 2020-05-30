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
    background:url("https://images.unsplash.com/photo-1532703108233-69111d554cb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80") no-repeat center/cover;
    height:15rem;

`;

export default Header
