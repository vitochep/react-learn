
import React from 'react';
import InputTitle from './InputTitle.jsx';

class Name extends React.Component {

    render = () => {
        return <InputTitle>
            {this.props.title}
        </InputTitle>
    };
}

export default Name;