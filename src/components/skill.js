import React, {Component} from 'react';
import './header.css';

class WellcomBack extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side welc_left skills_lfts">
                        <h2>Which Ask Match <br /> Your Skills?</h2>
                        <h5>One way to search for ask is to think about the things you are good ad doing and than find careers that match your skills.</h5>
                      
                    </div>
                    <div className="right_side skills  welcm_back rights_ls ac">
                        <h2>Please select any five skills you're good at doning.</h2>
                        <form className="form_main_page skill_forms" action="/company">

                            <cite className="skill_boxs mainss">
                                <cite className="ons">
                                    <label>I am a </label>
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
                                    <label>I can Contribute</label>
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
                                </cite>
                            </cite>


                            <cite className="skill_row_wrap">
                                <cite className="skill_row ui-state-default">
                                    <cite className="skill_boxs">
                                    <span class="fa fa-arrows-alt"></span>
                                        <cite className="ons">
                                            <label>I am a </label>
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
                                            <label>I can Contribute</label>
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

                            </cite>
                            <a href="#" className="pluss"><i className="fa fa-plus"></i></a>
                            <div id='demo'> </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Create your account" />
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default WellcomBack;