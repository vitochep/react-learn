import React from 'react';
import styled from 'styled-components';
import InputWrapper from "./../Inputs/InputWrapper"
import InputTitleName from "./../Inputs/InputTitleName"



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
                <InputWrapper name={1} />
                <InputTitleName />
                <InputWrapper />
            </div>
        </FormWrapper>;
    };
}