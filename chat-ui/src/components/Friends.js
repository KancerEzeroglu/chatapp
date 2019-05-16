import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import Table from "react-bootstrap/es/Table";
import {getAllFriends} from "../actions/friend.actions";
import Link from "react-router-dom/es/Link";

class Friends extends Component {

    componentDidMount() {
        this.props.getAllFriends(this.props.loginId);
    }

    render() {
        var friends = this.props.friends || [];

        var tableBody = friends.map(function (item) {
            return (
                <tr key={item.id}>
                    <td key="id">{item.id}</td>
                    <td key="name"><Link to={"/chat/" + item.id}>{item.name}</Link></td>
                </tr>);
        });

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </Table>
        );
    };
}

function mapStateToProps(state) {
    return {
        friends: state.friend.items,
        loginId: state.account.loginId
    };
}

export default connect(mapStateToProps, {getAllFriends})(Friends);
