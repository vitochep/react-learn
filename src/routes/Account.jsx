import React from 'react';
// import styled from 'styled-components'
import Section from './../components/Section/Section'
import Title from './../components/Title/Title'

// const Div = styled.div`
// padding: ${(props)=> props.active ? '10px': '0'};
//
//
//
// `;
//
// const Avatar = styled(Div)`
// display: block;
// margin-bottom: 20px;
// `


class Account extends React.Component {
    render = () => {
        return <>
            <Section>
                <Title>
                    Персональные данные
                </Title>
            </Section>
        </>;
    };
}

export default Account;


