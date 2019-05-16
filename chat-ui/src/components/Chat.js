import React, {Component} from "react";
import ChatHistory from "./ChatHistory";
import ChatMessage from "./ChatMessage";

class Chat extends Component {

    render() {
        return (
            <div>
                <div className="m-sm-2">
                    <ChatHistory friendId = {this.props.match.params.friendId}/>
                </div>
                <div>
                    <ChatMessage friendId = {this.props.match.params.friendId}/>
                </div>
            </div>
        );
    };
}


export default Chat;