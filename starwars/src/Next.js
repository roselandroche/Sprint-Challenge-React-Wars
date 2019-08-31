import React from 'react';
import styled from 'styled-components'

const StyledNext = styled.a`
    background-color: #CED8E4;
    border-radius: 6px;
    color: black;
    text-decoration: none;
    padding: 8px 12px;
`;

function Next(props) {
    return <StyledNext href={props.nextAPI}>Next</StyledNext>
}

export default Next