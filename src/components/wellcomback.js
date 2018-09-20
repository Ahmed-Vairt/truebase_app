import React, {Component} from 'react';
import './header.css';

class WellcomBack extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side welc_left">
                        <h2>Wellcome Back</h2>
                        <h5>Before you Login and use Truebase,</h5>
                        <p>Please setup your password and basic information.</p>
                    </div>
                    <div className="right_side welcm_back">
                        <form action="/setup/contribute">
                            <div className="pms_field">
                                <input type="text" required/>
                                <label className="default_lable">Username</label>
                                <label className="selected_label">Truebase.io/</label>
                            </div>
                            <div className="pms_field">
                                <input type="text" required />
                                <label>First Name</label>
                            </div>
                            <div className="pms_field">
                                <input type="text" required />
                                <label>Last Name</label>
                            </div>
                            <div className="pms_field">
                                <div id="password_strength"></div>
                            </div>
                            <div className="pms_field">
                                <input type="password" required />
                                <label>Confirm Password</label>
                            </div>
                            <input type="submit" value="Proceed" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default WellcomBack;