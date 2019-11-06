import React from 'react';
import styled from 'styled-components'

const StyledNext = styled.button`
    background-color: #CED8E4;
    border-radius: 6px;
    color: black;
    text-decoration: none;
    padding: 8px 12px;
    font-size: 16px;
`;

function Next(props) {
    return <StyledNext onClick={() => {
        props.updateNextAPI(props.info.next)
    }}>Next</StyledNext>
}

export default Next