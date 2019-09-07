import React from 'react';
import styled from 'styled-components';

const StyledBirthYear = styled.p`
    font-size: 16px;
`;

function BirthYear(props) {
    return <StyledBirthYear className='birthYear'>{props.birthYear}</StyledBirthYear>
}

export default BirthYear