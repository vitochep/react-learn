import React from 'react';
import Primary from './InputPrimary.jsx';

class InputName extends React.Component {
    render = () => {
        return <Primary type="text" placeholder="Введите имя" />
    };
}

export default InputName;