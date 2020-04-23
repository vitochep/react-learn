import React from 'react';
// import styled from 'styled-components'
import Section from './../components/Section/Section'
import Title from './../components/Title/Title'
import {Flex as FlexWrapper}  from './../components/Content/Flex'
import Avatar from './../components/Avatar/Avatar'

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
                <FlexWrapper>
                    <Avatar/>
                </FlexWrapper>
            </Section>
        </>;
    };
}

export default Account;


