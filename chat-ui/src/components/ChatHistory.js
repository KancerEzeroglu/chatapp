import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getAllMessages} from "../actions/message.actions";
import {getFriendById} from "../actions/friend.actions";

function getMsgDirection(sender, me) {
    var myId = parseInt(me, 10);
    if (sender === myId) {
        return "sent";
    } else {
        return "received";
    }
}

class ChatHistory extends Component {

    componentDidMount() {
        this.interval = setInterval(() => this.props.getAllMessages(this.props.loginId, this.props.friendId), 1000);
        this.props.getFriendById(this.props.friendId);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        var messages = this.props.messages || [];
        var loginId = this.props.loginId;
        var friend = this.props.friend;

        if( !loginId || !friend ){
            return <div/>
        }

        var chatList = messages.map(function (msg) {
            var direction = getMsgDirection(msg.sender, loginId);
            var style = "col-md-4 offset-md-8";
            var name = "me";
            if (direction === "received") {
                name = friend.name;
                style = "col-md-4";
            }

            return (
                <div className="row " key={msg.id}>
                    <div className={style}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {name}
                                </h5>
                                {msg.content}
                            </div>
                        </div>
                    </div>
                </div>

            );
        });

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
        loginId: state.account.loginId,
        friend: state.friend.item
    }
}

export default connect(mapStateToProps, {getAllMessages, getFriendById})(ChatHistory);