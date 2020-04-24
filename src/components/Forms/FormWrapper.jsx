import React from 'react';
import styled from 'styled-components';
import Name from "./../Inputs/Name"


const FormWrapper = styled.div`
    width: 100%;
    
    .ContentForms{
    width:           100%;
    display:         flex;
    align-items:     center;
    justify-content: flex-start;
    padding-top:     50px;
    margin-bottom:   75px;
    }
`;

const InputWrapper = styled.div`
    width: 100%;

    margin-right: ${(props)=> props.name ? '30px': '0'};

`;


export default class Forms extends React.Component {
    render = () => {
        return <FormWrapper>
            <div className='ContentForms'>
                <InputWrapper name={true}>
                    <Name title={'Имя и фамилия'} />
                </InputWrapper>

                <InputWrapper>
                    <Name title={'Email'} />
                </InputWrapper>
            </div>
        </FormWrapper>;
    };
}



