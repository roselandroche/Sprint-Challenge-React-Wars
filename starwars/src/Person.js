import React from 'react'
import Name from './Name';
import BirthYear from './BirthYear';
import styled from 'styled-components'

const PersonDiv = styled.div`
    margin-top: 20px;
`;

function Person(props) {
    return <PersonDiv>
        <Name name={props.name} />
        <BirthYear birthYear={props.birth_year}/>
    </PersonDiv>
}

export default Person