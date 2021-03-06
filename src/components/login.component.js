import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { redirect: false }
    // }

    render() {
        return (
            
            <div class="form-container">
                <div class="form-pet-icon-top"></div>
                
                <form onSubmit={this.onSubmit}> 
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                    <label>Sign in As </label>
                    <select type="usertype" className="form-control" name="usertype">
                    <option value='petkeeper'>Petkeeper</option>
                    <option value='petowner'>Petowner</option>
                    </select>
                </div>
                <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    {/* <button type="submit" className="btn btn-primary btn-block" >Submit</button> */}
                    <Link className="btn btn-outline-dark btn-lg" role="button" to="/home"> Submit </Link>
                
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
                <a class="attribute-link" href="https://storyset.com/">Illustrations by Storyset</a>
            </div>
            
        );
    }
}
