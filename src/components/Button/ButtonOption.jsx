
import styled from 'styled-components';
import Button from './Button';


const ButtonOption = styled(Button)`
    background-color: grey;

    &:hover{
     box-shadow: 0 2px 10px grey;
    transition: 0.4s ease;
    }
`;


export default ButtonOption