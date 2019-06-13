import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fullname: ''
        }
        this.handleChange = this.handleChange;
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password, fullname } = this.state;
        console.log(username);
        console.log(password);
        console.log(fullname);
    }

    render() {
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
                                <br></br>
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
                                    <input type="text" name="fullname" className="form-control" placeholder="FullName" onChange={this.handleChange}></input>
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
