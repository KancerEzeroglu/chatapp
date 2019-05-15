import React from 'react';

import './App.css';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import TopMenuLayout from "./common/TopMenuLayout";


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Switch key="appSwitch">
                    <Route path="/" component={TopMenuLayout}/>
                </Switch>
            </div>
        )
    }
}
export default App;