import React from 'react';
import styled from 'styled-components';
import Select from './../Select';


const Wrapper = styled(Select)`
color: red;
`;

const cities = [
    'Mariupol',
    // 'Kiev',
    // 'Poltava',
    // 'Odessa',
];

const Content = cities.map((nameCity, i) => <h1 key={i}>{nameCity}</h1>);


export default class City extends React.Component {
    state = {
        display: true,
    };

    render = () => {
        return <Wrapper>
            {Content}
        </Wrapper>
    }
};

