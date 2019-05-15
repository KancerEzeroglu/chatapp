import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";

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
        this.setState({loginId: event.target.loginId});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.loginId);
    }

    render() {
        return (
            <form id="contact-form" onSubmit={() => this.handleSubmit} role="form">
                <div className="controls">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <input value={this.state.loginId} onChange={this.handleChange} type="text" name="name"
                                       className="form-control"
                                       placeholder="Please enter your login Id" required="required"/>
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

export default connect(mapStateToProps, {})(Welcome);