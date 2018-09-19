import React, {Component} from 'react';
import './header.css';

class Aboutme extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side forgot">
                        <h2>Reset your password</h2>
                    </div>
                    <div className="right_side forgot_right welcm_back">
                        <h2>Forgot your username or password?</h2>
                        <p>Please enter your email and our support team will send you instuctions to reset your password</p>
                        <form action="/reset">
                            <div className="pms_field">
                                <input type="text" placeholder="" />
                                <label>example@youremail.com</label>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;