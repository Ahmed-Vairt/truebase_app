import React, {Component} from 'react';
import './header.css';

class Signup extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side">
                        <h2>Join the Truebase Network</h2>
                        <p>Sign up so that we can match you with members that are the best fit to help you advance your business and career.</p>
                    </div>
                    <div className="right_side  welcm_back">
                    <h2>Sign Up</h2>
                        <form id="signups" action="/setup/account">
                            <div className="pms_field">
                                <input type="text"  placeholder="" id="txtEmail" name="txtEmail" required/>
                                <label>Email</label>
                            </div>
                            <p className="emails_validation">Please enter valid email address</p>
                            <input type="submit" id="btnValidate" value="Sign Up" />
                            <a href="/login">Already have an account?</a>
                            <p>By signing up, you indicate that you have read and agree to our  <a href='/terms'>terms and condition</a> and <a href='/privacy'>privacy policy</a>.</p>
                            <p>We'll use the email address associated with your sign up with to contact you regarding the status of your Truebase account.</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;