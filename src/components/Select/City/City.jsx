import React from 'react';
import styled from 'styled-components';
import Select from './../Select';


const Wrapper = styled(Select)`
color: red;
`;

const cities = [
    'Mariupol',
    'Kiev',
    'Poltava',
    'Odessa',
];

const Content = cities.map((nameCity, i) => <h1 key={i}>{nameCity}</h1>);

export default class City extends React.Component {


    render = () => {
        return <Wrapper>
            {Content}
        </Wrapper>
    }
};




//Работа пропсов:
// Вариант 1(правильный): City наследует стили и логику от Select,  потому, что const Wrapper = styled(Select)`.
// В City записано import Select from './../Select';
// В Account записывается компонент City.
// значаение в виде текста или цикла или перемененной в рэндере City передаётся вниз
// к дочернему Select и там прописывается как this.props.children. (Это правило.)


//Вариант 2(возможный): City НЕ наследует стили и логику от Select,  потому, что const Wrapper = styled.div`.
// В City записано import Select from './../Select';
// значаение в виде текста или цикла или перемененной в рэндере City обрамляется в тег
// <Select>{Content}</Select>  и передаётся вниз
//  к дочернему Select и там прописывается как this.props.children. Также будет отоюражаться то, что
//  в виде текста или кода написано в Select.jsx


//Здесь также  может не обрамляется в тэг <Select>Text 1</Select>. И не важно, есть ли
// import Select from './../Select', тогда
// будет отображаться только то, что City передаст в Account непосредственно, т.к. он не знает Select, как
//дочерний элемент


//Вариавнт 3(НЕ правильный): логика прописана в Select. Он же записан в Account.
// Так же в Select записан тег <City>Какой-то текст</City> и import  City from './City'. А в City
//прописывается {this.props.children}
// Это НЕВЕРНАЯ компоновка объектов!!!!



