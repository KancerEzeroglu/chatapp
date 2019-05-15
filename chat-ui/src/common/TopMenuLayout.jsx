import React, {Component} from 'react';
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Welcome from "../components/Welcome";
import Friends from "../components/Friends";
import Chat from "../components/Chat";
import connect from "react-redux/es/connect/connect";

class TopMenuLayout extends Component {

    render() {
        return (
            <div className="starter-template">
                <Switch>
                    {this.props.loginId ? <Route exact path="/" component={Friends}/> : <Route exact path="/" component={Welcome}/>}
                    {this.props.loginId && <Route exact path="/chat/:friendId" component={Chat}/>}
                </Switch>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        loginId: state.account.loginId
    }
}

export default connect(mapStateToProps, {})(TopMenuLayout);