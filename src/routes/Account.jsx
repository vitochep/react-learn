import React from 'react';
import Section from './../components/Section/Section'
import Title from './../components/Title/Title'
import {Flex as FlexWrapper}  from './../components/Content/Flex'
import Avatar from './../components/Avatar/Avatar'
import FormWrapper from "../components/Forms/FormWrapper";
// import City from "../components/Select/City";
import Select from "../components/Select";




class Account extends React.Component {
    render = () => {
        return <>
            <Section>
                <Title>
                    Персональные данные
                </Title>
                <FlexWrapper>
                    <Avatar/>
                    <FormWrapper />
                </FlexWrapper>

                <Select />
            </Section>
        </>;
    };
}

export default Account;


