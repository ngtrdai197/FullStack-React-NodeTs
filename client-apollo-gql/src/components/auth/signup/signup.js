import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser } from '../../../store/actions';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fullName: '',
            email: '',
        }
        this.handleChange = this.handleChange;
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password, fullName, email } = this.state;
        const user = { username, password, fullName, email };
        this.props.createUser(user);
    }

    render() {
        const { error } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <form onSubmit={this.handleSubmit} ref="formSignup">
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping">@</span>
                                    </div>
                                    <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange}></input>
                                </div>
                                {error ? <div className="alert alert-danger">{error.message}</div> : ''}
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping">@</span>
                                    </div>
                                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange}></input>
                                </div>
                                <br></br>
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping">@</span>
                                    </div>
                                    <input type="text" name="fullName" className="form-control" placeholder="FullName" onChange={this.handleChange}></input>
                                </div>
                                <br></br>
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping">@</span>
                                    </div>
                                    <input type="text" name="email" className="form-control" placeholder="Email" onChange={this.handleChange}></input>
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-block btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { error, user } = state.userReducer;
    return { user, error }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ createUser }, dispatch);
};


export default SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);
