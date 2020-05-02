import React from 'react';
import styled from 'styled-components';
import Select from './../Select';


const Wrapper = styled.div`
color: red;
`;

const cities = [
    'Mariupol',
    'Kiev',
    'Poltava',
    'Odessa',
];


export default class City extends React.Component {


    render = () => {
        return <Wrapper>
       <Select>dfmgd'jdfkg</Select>
        </Wrapper>
    }
};

const Content = cities.map((nameCity, i) => <h1 key={i}>{nameCity}</h1>);