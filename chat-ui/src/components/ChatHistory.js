import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getAllMessages} from "../actions/message.actions";

function getMsgDirection(sender, me){
    if(sender === me){
        return "sent";
    }else{
        return "received";
    }
}

class ChatHistory extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.props.getAllMessages(this.props.loginId, this.props.friendId), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        var messages = this.props.messages || [];
        var loginId = this.props.loginId;

        var chatList = messages.map(function (msg) {
            var direction = getMsgDirection(msg.sender, loginId);
            return (
                <div className="row ">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">

                            </h5>
                            {msg.content}
                        </div>
                    </div>
                </div>

            );
        })

        return (
            <div>
                {chatList}
            </div>
        );
    };
}

function

mapStateToProps(state) {
    return {
        messages: state.account.items,
        loginId: state.account.loginId
    }
}

export default connect(mapStateToProps, {getAllMessages})(ChatHistory);