import React from 'react';


import {
    ButtonOption,
    ButtonDropdown,

} from './../../components/Button';


export default class Select extends React.Component {

    state = {
        display: false,
        index: 0,
    };


    onDisplay = (e) => {
        e.preventDefault();
        this.setState((currentState) => {
            return {
                index: currentState.index,
                display: !currentState.display,
            }}
        )};

    onClickItem = (index) => (e) => {
        e.preventDefault();

        this.setState((currentState) => {
            return {
                index,
                display: false,
            };
        });
    };

    render = () => {

        const isArray = Array.isArray(this.props.children);

        return <React.Fragment>
ergedgergerg
            {this.props.children}
            {/*<ButtonDropdown onClick={this.onDisplay} className={this.props.className}>*/}
            {/*    {isArray*/}
            {/*        ? this.props.children[this.state.index]*/}
            {/*        : this.props.children}*/}
            {/*        */}
            {/*    {console.log(this.props.children)}*/}
            {/*</ButtonDropdown>*/}
            {/*{this.state.display*/}
            {/*    ? isArray*/}
            {/*        ? this.props*/}
            {/*            .children*/}
            {/*            .map((item, index) => {*/}
            {/*                return <ButtonOption*/}
            {/*                    key={index}*/}
            {/*                    onClick={this.onClickItem(index)}>*/}
            {/*                    {item}*/}
            {/*                </ButtonOption>;*/}
            {/*            })*/}
            {/*        : <ButtonOption onClick={this.onClickItem(0)}>*/}
            {/*            {this.props.children}*/}
            {/*        </ButtonOption>*/}
            {/*    : <React.Fragment />}*/}
        </React.Fragment>

    }
}