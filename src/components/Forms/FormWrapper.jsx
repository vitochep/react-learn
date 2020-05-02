import React from 'react';
import styled from 'styled-components';
import Name from "./../Inputs/Name"
import Input from "./../Inputs/Input"
import ButtonSend from "./../Button/ButtonSend"


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
                    <Input/>
                </InputWrapper>

                <InputWrapper>
                    <Name title={'Email'} />
                    <Input/>
                </InputWrapper>
            </div>
            <ButtonSend />
        </FormWrapper>;
    };
}


//  margin-right: ${(props)=> props.name ? '30px': '0'};
//Запись означает, что параметры пропсы InputWrapper принимают параметр name, в  которое
// из условия придетают или  30px(true) или 0(false).В компоненте
//может быть true или false соответственно и выгдялдит так  <InputWrapper name={true}>
