import React from 'react';

// Подключение базы данных - хранилища из библиотеки redux
import { 
	createStore,
	combineReducers, 
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

//Подключение Provider из библиотеки, чтобы связать базу данных с react
import { Provider as ReduxProvider } from 'react-redux';
import * as reducers from './reducers';

const testMiddleware = (store) => {
	return (next) => {
		return (action) => {
			return next(action);
		};
	};
};

//создание хранилища store и привязка к нему reducers и Middleware
//combineReducers  - собирает все редьюсеры в одну кучу.
const store = createStore(combineReducers(reducers), undefined, applyMiddleware(thunk, testMiddleware));

class Provider extends React.PureComponent {


	render = () => {
		const { children } = this.props;


		// обязательно передавать store
		return <ReduxProvider store={store}>
			{children}
		</ReduxProvider>;
	};
};

export default store;
export {
	Provider,
};

//Создаётся хранилище, в котором функция combineReducers собирает вместе все reducers
// const store=createStore(combineReducers(reducers));
// console.log('createStore', reducers);

// console.log('store', store); // Непосредственнно база данных
//Содержит в себе функции, которыми надо пользоваться:
//dispatch - изменение состония
//getStore - получить текущее состояние
//subscribe - подписка на состояние


//Пример использования dispatch и getState
// setTimeout(()=>{
// store.dispatch({type:"TABLET"})
// },2000);
//
// setTimeout(()=>{
// console.log('TABLET', store.getState())
// },3000);
//
// console.log('store', store.getState());


