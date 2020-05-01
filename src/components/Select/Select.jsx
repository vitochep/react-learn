import React from 'react';
import City from './City';


// import {
//     ButtonOption,
//     ButtonDropdown,
//
// } from './../../components/Button';


export default class Select extends React.Component {

    state = {
        display: true,
    };

    render = () => {
        console.log(this.props.children);
        return <>
            <City>55555555555555</City>
        </>

    }
}