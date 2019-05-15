import React from 'react';
import {connect} from 'react-redux';

import './App.css';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import TopMenuLayout from "../common/TopMenuLayout";


class App extends React.Component {

    render() {
        return (
            <Switch key="appSwitch">
                <Route path="/" component={TopMenuLayout}/>
            </Switch>

        )
    }
}
export default App;