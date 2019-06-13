import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <div className="input-group flex-nowrap">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="addon-wrapping">@</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username"></input>
                            </div>
                            <br></br>
                            <div className="input-group flex-nowrap">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="addon-wrapping">@</span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password"></input>
                            </div>
                            <br></br>
                            <button className="btn btn-block btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
