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
import Store from './Store'


class App extends React.Component {

    componentDidMount = () => {
        window.addEventListener('resize', (e) => {
            const width = e.currentTarget.innerWidth;

            //одновременно с генерацией кастомного события
            //меняется changeMobile на новый flag
            const tabletFlag = width < 1024 && width > 768;
            const mobileFlag = width < 768;

            //изменение состояния
            //  если tabletFlag, то передавать 'TABLET'.
            // в противном случае mobileFlag.
            //А если mobileFlag, то передавать 'MOBILE'.
            //в противном случае ничего
            Store.dispatch({
                type: tabletFlag
                    ? 'TABLET'
                    : mobileFlag
                     ? 'MOBILE'
                        : "",
            })
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
