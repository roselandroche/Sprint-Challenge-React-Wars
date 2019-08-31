import React from 'react';
import styled from 'styled-components';

const StyledBirthYear = styled.p`
    font-size: 20px;
`;

function BirthYear(props) {
    return <StyledBirthYear className='birthYear'>{props.birth_year}</StyledBirthYear>
}

export default BirthYear