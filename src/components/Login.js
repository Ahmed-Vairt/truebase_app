import React, {Component} from 'react';
import './header.css';

class Login extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side">
                        <h2>Don't Have an <br />account?</h2>
                        <p>Go ahead and signup. This will associate your <br /> sign-up info with the  profile your claiming</p>
                    </div>
                    <div className="right_side welcm_back">
                    <h2>Login</h2>
                        <form>
                            <div className="pms_field">
                                <input type="text" placeholder="" />
                                <label>Email</label>
                            </div>
                            <div className="pms_field">
                                <input type="password" />
                                <label>Password</label>
                            </div>
                            <input type="submit" value="Login" />
                            <p>By siging in, you indicate that you have read and agree to our <a href="https://www.truebase.io/terms/">terms and condition</a> and <a href="https://www.truebase.io/privacy/">privacy policy</a>.</p>
                            <a href="/forgot">Forgot your password?</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;