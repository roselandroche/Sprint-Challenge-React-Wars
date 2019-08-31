import React from 'react'
import styled from 'styled-components'

const StyledName = styled.h1`
    font-size: 24px;
    background-color: rgba(220, 207, 199, .5);
    color: #443E3E;
    width: 18%;
    text-align: left;
    margin: 0 auto;
`;

function Name(props) {
    return <StyledName className='name'>{props.name}</StyledName>
}

export default Name