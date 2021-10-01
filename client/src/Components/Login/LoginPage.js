import React, { useState } from "react";
import './login.css';


export default function LoginPage(props) {

    const {setIsLoggedIn} = props;
    const handleSubmit =(event) => {
        event.preventDefault();
        console.log("here");
        setIsLoggedIn(true);
    }

    return (
        <div className="login_div">
                <div className="logo"></div>
                <div className="login_content">
                    <form name="login_form" onSubmit={handleSubmit}>
                        <div className="spacer">
                                <label> Username or email</label>
                                    <input type="username" className="user-input" placeholder="UserName" />
                        </div>
                        <div className="spacer">
                                <label> Password </label>
                                    <input type="password" className="pass-input" placeholder="Password" />
                        </div>
                        <div className="spacer-2">
                        <button className="signin-button">
                            Login
                        </button>
                        </div>
                        <div className="spacer-2">
                        <div className="forgot_pass">
                            Forgot your <a href="" className="link-color">Password ?</a>
                        </div>
                        </div>
                    </form>
                    <hr className="login_divider"/>
                    <div className="spacer-2 forgot_pass">
                       Don't have an account?
                       <a href="" className="link-color"> Sign Up</a> for free! 
                    </div>
                </div>
            </div>
    );
};



 