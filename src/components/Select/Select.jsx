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
                }
            }
        )
    };

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
            <ButtonDropdown onClick={this.onDisplay} className={this.props.className}>
                {isArray
                    ? this.props.children[this.state.index]
                    : this.props.children}
            </ButtonDropdown>
            {this.state.display   //Если текущее состояние true (равно тому значению, которое в него записано)
                ? isArray         //И если это является массивом
                    ? this.props  // то вывести массив {Content}
                        .children // из City
                        .map((item, index) => { // и перебрать его в цикле map,который вернёт
                            return <ButtonOption // новый массив текста в виде
                                key={index}      // {item}, который является элементом массива
                                onClick={this.onClickItem(index)}>
                                {item}
                            </ButtonOption>; //  и обрамляется в данном случае ButtonOption
                                             //При клике на этот ButtonOption возвращается текущий элемент
                                             // массива, тот, на котрый нажали
                        })
                    : <ButtonOption onClick={this.onClickItem(0)}>
                        {this.props.children}
                    </ButtonOption> // В противном случае, если это не массив, то при клике записать текст из
                                    // объекта
                : <React.Fragment />}
        </React.Fragment>

    }
}

// {this.state.display          Если
//                 ? isArray
//                     ? this.props
//                         .children
//                         .map((item, index) => {
//                             return <ButtonOption
//                                 key={index}
//                                 onClick={this.onClickItem(index)}>
//                                 {item}
//                             </ButtonOption>;
//                         })
//                     : <ButtonOption onClick={this.onClickItem(0)}>
//                         {this.props.children}
//                     </ButtonOption>
//                 : <React.Fragment />}