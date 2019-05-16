import React from 'react';

import './App.css';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import MainLayout from "./common/MainLayout";
import TopNavigation from "./components/TopNavigation";


class App extends React.Component {

    render() {
        return (
            <div>
                <TopNavigation/>
                <div className="container">
                    <Switch key="appSwitch">
                        <Route path="/" component={MainLayout}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;