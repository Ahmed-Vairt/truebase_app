import React, {Component} from 'react';
import './header.css';

class WellcomBack extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side welc_left skills_lfts">
                        <h2>Be a Part of the Community</h2>
                        <p>Truebase members are here to help each other grow and advance our businesses and careers. Let us know how you can help so that we can match you with the needs of other members.</p>
                    </div>
                    <div className="right_side skills  welcm_back rights_ls ac">
                        <h2>Community Contributions</h2>
                        <form className="form_main_page skill_forms" action="/company">

                            <cite className="skill_row_wrap">
                                <cite className="skill_row ui-state-default">
                                    <cite className="skill_boxs">
                                    <span class="fa fa-arrows-alt"></span>
                                        <cite className="ons">
                                            <label>As a </label>
                                            <select className="basics">
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
                                        </cite>
                                        <cite className="ons">
                                            <label>I can</label>
                                            <select className="basics">
                                                <option value="">Please Select any five Skills</option>
                                                <option value="">Lorem ipsum</option>
                                                <option value="">Lorem ipsum</option>
                                                <option value="">Lorem ipsum</option>
                                                <option value="">Lorem ipsum</option>
                                                <option value="">Lorem ipsum</option>
                                                <option value="">Lorem ipsum</option>
                                                <option value="">Lorem ipsum</option>
                                            </select>
                                        </cite>
                                        <a href="#" className="minus" ><i className="fa fa-minus"></i></a>
                                        
                                    </cite>
                                </cite>
                            </cite>
                            <cite className="loads">
                                <cite className="skill_boxs mainss  ui-state-default">
                                <cite className="innrs">
                                    <span class="fa fa-arrows-alt"></span>
                                    <cite className="ons">
                                        <label>As a </label>
                                        <select className="basic">
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
                                    </cite>
                                    <cite className="ons">
                                        <label>I can</label>
                                        <select className="basic">
                                            <option value="">Please Select any five Skills</option>
                                            <option value="">Lorem ipsum</option>
                                            <option value="">Lorem ipsum</option>
                                            <option value="">Lorem ipsum</option>
                                            <option value="">Lorem ipsum</option>
                                            <option value="">Lorem ipsum</option>
                                            <option value="">Lorem ipsum</option>
                                            <option value="">Lorem ipsum</option>
                                        </select>
                                    </cite></cite>
                                </cite>
                            </cite>
                            <a href="#" className="pluss"><i className="fa fa-plus"></i></a>
                            <div id='demo'> </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Join the Community" />
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default WellcomBack;