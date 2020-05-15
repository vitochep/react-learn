
import styled from 'styled-components';

//если компонент только стилевой, без рэндера, то деструктуризировать его импортом из index.js в другом компоненте нельзя
const Button = styled.div`
    font-weight:      bold;
    line-height:      20px;
    color:            #000000;

    border-radius:    5px;

    padding:          10px 0;
    margin:           0 auto;
    cursor:           pointer;
    text-align:       center;
`;

export default Button;
