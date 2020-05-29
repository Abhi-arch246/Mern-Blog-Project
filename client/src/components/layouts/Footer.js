import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <FooterContainer>
            <h5 className='text-white text-center p-1'>
                 Designed & Developed by Abhishek &copy;{new Date().getFullYear()}
            </h5>
        </FooterContainer>
    )
}

//Footer Container
const FooterContainer=styled.footer`
    background:#334;
    height:3rem;
    width:100%;
`;

export default Footer
