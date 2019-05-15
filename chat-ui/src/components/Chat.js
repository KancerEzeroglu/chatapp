import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import ChatHistory from "./ChatHistory";
import ChatMessage from "./ChatMessage";

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

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

function

mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {})(Chat);