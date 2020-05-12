import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Account from 'routes/Account';
import Main from 'routes/Main';
// import News from 'routes/News';
import './../app.scss';
import { bindActionCreators } from 'redux' //Подключение функции для создания action
import { connect } from 'react-redux';
import { resolution } from 'components/Store/actions';


class App extends React.Component {

    componentDidMount = () => {

        //вторым параметром сюда передаётся action в котором
        // описано изменение состояния по resize
        window.addEventListener('resize', this.props.resolution)
    };


    render = () => {
        return <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    {/*<Route exact path="/news">*/}
                    {/*	<News />*/}
                    {/*</Route>*/}
                    <Route path="/account">
                        <Switch>
                            <Route path="/account/test">
                                Test
                            </Route>
                            <Route path="/">
                                <Account/>
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
                <h1>
                    <Link to="/account">
                        To account
                    </Link>
                </h1>
                <h1>
                    <Link to="/">
                        To main
                    </Link>
                </h1>
            </BrowserRouter>
        </React.Fragment>;
    };
};

//Connect - это метод, забирающий данные из state action. Связвает
// компонет App с данными из state и запускает action
// Action запускает свой dispatch.

//Первый параметр: объект с возможными пропсами
//Второй параметр - функция
export default connect(undefined, (dispatch) => {
    return {
        //resolution -сам action, который создаётся с помощью функции bindActionCreators
        //принимает 2 параметра - функция конкретного action, описанная внутри него
        // (в данном случае const resolution) и его dispatch, чтобы работало обновление
        resolution: bindActionCreators(resolution, dispatch),
    };
})(App);
