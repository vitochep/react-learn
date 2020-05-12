import React from 'react';

// Подключение базы данных - createStore хранилища  из библиотеки redux
//combineReducers - сборщика reducers
import {
	createStore,
	combineReducers, 
	applyMiddleware, //импорт мидлвара
} from 'redux';
import thunk from 'redux-thunk'; // пакет, позволяющий создать actions с асинхронностью

//Подключение Provider из библиотеки, чтобы связать базу данных с react
import { Provider as ReduxProvider } from 'react-redux';
import * as reducers from './reducers';

const testMiddleware = (store) => {
	return (next) => {           //если next сработал, переходим на следующую функцию
		return (action) => {
			return next(action);
		};
	};
};

//пример измнения состояния
setTimeout(()=>{
	store.dispatch({
		type: "UPDATE",
		payload:{
			email:'test@gmail.com',
			name:'Vito'
		}
	})
}, 4000);

//создание хранилища store и привязка к нему reducers и Middleware
//combineReducers  - собирает все редьюсеры в одну кучу.
//undefined - второй параметр, то, как выглядит store по умолчанию.
//эта store настраивается один раз за проект
// applyMiddleware - прослойка функция  между actions  и reducers. Принимает в себя thunk или
//какое-то кол-во функций. После того, как все эти все функции отработают, запустится reducer
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

// Непосредственнно база данных
//Содержит в себе функции, которыми надо пользоваться:
//dispatch - изменение состония
//getState - получить текущее состояние
//subscribe - подписка на состояние
console.log('store', store);


//Примеры использования dispatch и getState
setTimeout(()=>{
store.dispatch({type:"TABLET"})
},2000);

setTimeout(()=>{
console.log('TABLET', store.getState())
},3000);


console.log('getStateinTimeout', store.getState());


