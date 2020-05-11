
import styled from 'styled-components';
import Button from './Button';


const ButtonOption = styled(Button)`
    background-color: grey;
    
    ${({theme})=>`
      	width: ${theme.buttons.primaryDesktop.width};
    	font-size: ${theme.buttons.primaryDesktop.fontSize};
    	line-height: ${theme.buttons.primaryDesktop.lineHeight};
    	height: ${theme.buttons.primaryDesktop.height};
    `}

    &:hover{
     box-shadow: 0 2px 10px grey;
    transition: 0.4s ease;
    }
`;


export default ButtonOption