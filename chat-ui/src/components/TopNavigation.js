import React from "react";
import connect from "react-redux/es/connect/connect";
import {logout} from "../actions/message.actions";
import { withRouter } from "react-router-dom";

class TopNavigation extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logout(this.props);
    }

    render() {
        return (
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Chat Application</h5>
                <input type="submit" className="btn btn-primary btn-send" value="Logout" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginId: state.account.loginId
    }
}



export default connect(mapStateToProps, {logout})(withRouter(TopNavigation));
