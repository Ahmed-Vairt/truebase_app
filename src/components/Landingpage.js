import React, {Component} from 'react';
import './landing.css';

class Landing extends Component{
    render(){
        return(

            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side welc_left land_left">
                        <h2>Advance your <br /> Blockchain Business <br /> and Career</h2>
                        <h5>Truebase is a trusted community for blockchain professionals that is owned, controlled, and rewarded by its member</h5>
                        <a href="/signup"> <i className="fa fa-paper-plane"></i> Join our Telegram</a>
                    </div>
                    <div className="right_side welcm_back rights_ls">
                        <form className="form_main_page" action="/signup">
                            <h3>Engage the truebase network</h3>
                            <label>I Need </label>
                            <select className="basic economist">
                                <option value="token">Token economist</option>
                                <option value="token">Token economist</option>
                                <option value="">Advisor</option>
                                <option value="">Agency</option>
                                <option value="">Co-founder</option>
                                <option value="">Community Manager</option>
                                <option value="">Designer</option>
                                <option value="">Developer</option>
                                <option value="">Economist</option>
                                <option value="">Investor</option>
                            </select>
                            <div className="whitepaper">
                                <label>To</label>
                                <input type="text" placeholder="Review my Whitepaper" />
                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Request Match" />
                            <div className="clearfix"></div>
                        </form>

                    </div>
                </div>
            </div>

        )
    }
}

export default Landing;