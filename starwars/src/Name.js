import React from 'react'
import styled from 'styled-components'

const StyledName = styled.p`
    font-size: 24px;
    background-color: white;
    color: black;
    width: 20%;
    text-align: center;
    margin: 10px auto;
    
`;

function Name(props) {
    return <StyledName className='name'>{props.name}</StyledName>
}

export default Name