import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {createMessage} from "../actions/message.actions";

class ChatMessage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            msgText: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({msgText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createMessage(this.props.loginId, this.props.friendId, this.state.msgText);
        this.setState({msgText: ""});

    }

    render() {
        return (
            <form id="message-form" onSubmit={this.handleSubmit} role="form">
                <div className="row">
                    <div className="col-md-10">
                        <div className="form-group">
                            <textarea value={this.state.msgText} onChange={this.handleChange} type="text" name="name"
                                   className="form-control" required="required"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="btn btn-success btn-send" value="Send"/>
                    </div>
                </div>

            </form>
        );
    };
}

function

mapStateToProps(state) {
    return {
        loginId: state.account.loginId
    };
}

export default connect(mapStateToProps, {createMessage})(ChatMessage);