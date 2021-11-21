import React, { Component } from "react";
import axios from "axios";


export default class SignUp extends Component {


      constructor(props){
        super(props)

        this.state ={
            fullname:'',
            username:'',
            password:'',
            email:'',
            usertype:''
        };
      }

      changeHandler = (e) => {
          this.setState({[e.target.name]:e.target.value})
      }

      submitHandler = e => {
          e.preventDefault();
          console.log(this.state);
          axios.post('http://localhost:8080/nci/saveAll',this.state).then(response => {console.log(response)}).catch(error =>  {console.log(error)});
      }
    render() {
        const{fullname,username,password,email} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" name="fullname" value={fullname} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Last name" name="username" value={username} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={this.changeHandler} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
