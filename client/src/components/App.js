import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import RoomManage from './rooms/RoomManage';
import TestRoom from './rooms/TestRoom';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/manage" exact component={RoomManage} />
                            <Route path="/test" exact component={TestRoom} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;