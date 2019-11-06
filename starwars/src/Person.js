import React from 'react'
import Name from './Name';
import BirthYear from './BirthYear';
import styled from 'styled-components'

const PersonDiv = styled.div`
    margin: 40px;
`;

function Person(props) {
    return <PersonDiv>
        <Name name={props.name} />
        <BirthYear birthYear={props.birthYear}/>
    </PersonDiv>
}

export default Person