import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {login} from "../actions/message.actions";

class Welcome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginId: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({loginId: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.loginId);
    }

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit} role="form">
                <div className="controls login-area">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Enter your Login ID:</label>
                                <input value={this.state.loginId} onChange={this.handleChange} type="number" name="name"
                                       className="form-control" required="required"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="submit" className="btn btn-success btn-send" value="Login"/>
                        </div>
                    </div>
                </div>
            </form>
        );
    };
}

function

mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {login})(Welcome);