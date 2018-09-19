import React, {Component} from 'react';
import './header.css';

class Signup extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side">
                        <h2>Howday!</h2>
                        <p>Go ahead and signup. This will associate your <br /> sign-up info with the profile you are claiming.</p>
                    </div>
                    <div className="right_side  welcm_back">
                    <h2>Sign Up</h2>
                        <form action="/wellcomback">
                            <div className="pms_field">
                                <input type="text" placeholder="" />
                                <label>Email</label>
                            </div>
                            <input type="submit" value="Sign Up" />
                            <p>By siging up, you indicate that you have read and agree to our <a href='https://www.truebase.io/terms/'>terms and condition</a> and <a href='https://www.truebase.io/privacy/'>privacy policy</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;