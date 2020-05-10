import React from 'react';
import {connect} from "react-redux"; // из библиотеки берём для
// связывания с хранилищем
import Store from 'components/Store'
import Primary from './InputPrimary.jsx';

class InputEmail extends React.Component {
    render = () => {
        console.log('смотрим на  весь Store', Store);
        console.log('смотрим на reducers Store', Store.getState());
        console.log('getStore', Store.getState().user.email)
        return <Primary type="text" placeholder="Введите email"
                        value={Store.getState().user.email} //Так можно из храпнилища прокидывать данные в компоненты
        onChange={()=>{}}/> //прописывать onChange потому, что без него в value значение не изменяется.
    };
}


export default connect((state) => {
    return {
        email: state.user.email,
        name: state.user.name   // Функция связывает состояние  ключа в хранилище Store
    }                             // компоненту InputEmail
})(InputEmail)                    //Если сюда не пробрасывать из Store измнение name или
                                  // email, то connect не будет знать, что ключ изменился.
                                  // И рендер в таком случае не произойдёт