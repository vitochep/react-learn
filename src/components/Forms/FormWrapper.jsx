import React from 'react';
import styled from 'styled-components';
import InputWrapper from "./../Inputs/InputWrapper"
import Name from "./../Inputs/Name"
import Email from "./../Inputs/Email"




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



export default class Forms extends React.Component {
    render = () => {
        return <FormWrapper>
            <div className='ContentForms'>
                <InputWrapper name={1}>
                    <Name></Name>
                </InputWrapper>

                <InputWrapper>
                    <Email></Email>
                </InputWrapper>
            </div>
        </FormWrapper>;
    };
}