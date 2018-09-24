import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              
              <Header>
                    <div className="container">
                        <div className="logo"><a href="/"><img src="https://s3.amazonaws.com/truebase/static/truebase_logo.png" /></a></div>
                        <Navigation>
                            <a href="/">About</a>
                            <a href="https://www.trueprotocol.com">Protocol</a>
                        </Navigation>
                        <div className="login_buttons">
                            <Navigation>
                                <a href="/login">Login</a>
                                <a href="/signup" className="signs">Sign Up</a>
                            </Navigation>
                        </div>
                        <div className="right_search">
                            <form><i className="fa fa-search"></i>
                            <input type="text" className="key_input" placeholder="Search for Companies or People" />
                                <div className="sarch_rslt">
                                    <ul>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                  
              </Header>
              <header className="header_two clearfix">
                    <div className="container">
                        <div className="logo"><a href="/"><img src="https://s3.amazonaws.com/truebase/static/truebase_logo.png" /></a></div>
                        <Navigation>
                            <a href="/ask">Ask</a>
                            <a href="/">Contribute</a>
                        </Navigation>
                        <div className="after_logins">
                            <span>100 true</span>
                            <ul>
                                <li><a href="/"><i className="fa fa-bell"></i></a></li>
                                <li><a href="/"><i className="fa fa-question"></i></a></li>
                                <li className="user_icon"><a href="/"><img src="https://image.flaticon.com/icons/png/512/149/149071.png" /></a></li>
                            </ul>
                        </div>
                        <div className="right_search">
                            <form><i className="fa fa-search"></i><input type="text" className="key_input" placeholder="Search for Companies or People" />
                                <div className="sarch_rslt">
                                    <ul>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p> iam a good at ican Contribute
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
              </header>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
          <footer>
                      <div className="container">
                        
                        <div className="right_search">
                            <form><i className="fa fa-search"></i>
                            <input type="text" className="key_input" placeholder="Search for Companies or People" />
                                <div className="sarch_rslt">
                                    <ul>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                        <li>
                                            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                            <h5>Pretend Co</h5>
                                            <p>San Francisco, Ca, USA</p>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="bottom_footer clearfix">
                            <div className="lefts">
                                <Navigation>
                                    <a href="/privacy">Privacy Policy</a>
                                    <a href="/terms">Term of Use</a>
                                </Navigation>
                            </div>
                            <div className="colm_two">
                                <Navigation>
                                    <a href="https://www.trueprotocol.com">Protocol</a>
                                    <a href="https://angel.co/truebase/jobs">Career</a>
                                    <a href="mailto:hello@truebase.io">Contactus</a>
                                </Navigation>
                            </div>
                            <div className="center">
                                <ul>
                                    <li><a href="https://t.me/truebase"><i className="fa fa-paper-plane"></i></a></li>
                                    <li><a href="https://twitter.com/truebaseio"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/truebase/"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="footer-botm">
                            <p>© Truebase Inc, 2018. All rights reserved.</p>
                        </div>
                      </div>
                  </footer>
      </div>
    );
  }
}

export default App;
