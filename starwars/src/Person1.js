import React from 'react'
import styled from 'styled-components'

const StyledPerson = styled.p`
    font-size: 18px;
    background-color: white;
    color: black;
`;

function Person1(props) {
    return <StyledPerson className='person1'>{props.name}</StyledPerson>
}

export default Person1