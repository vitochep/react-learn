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
import {changeMobile} from "./Events";

// import Slider from "./Slider";


class App extends React.Component {

    componentDidMount = () => {
        window.addEventListener('resize', (e) => {
            const width = e.currentTarget.innerWidth;

            //одновременно с генерацией кастомного события
            //меняется changeMobile на новый flag
            const newFlag = width < 780;

            //передётся аргументом true или false - в зависимости от
            //ширины экрана
            //Флаг изменится раньше, чем сгенерируется событие
            changeMobile(newFlag);

            //функция для вызова события, его генерации
            //customEvent - зарезервированный метод
            //второй параметр -объект, принимающий в себя detail
            //detail - зарезервированный параметр который является
            // зависящим от события значением, связанным с событием.
            window.dispatchEvent(new CustomEvent('onChangeResolution', {
                'detail':newFlag
            }));
        });
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

export default App;
