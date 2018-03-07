import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './Buttons.css';
import Home from './Home';
import Code from './Code';
import Quality from './Quality';
import Employment from './Employment';
import Regis from './Regis';
import Contact from './Contact';

class Buttons extends Component {
  constructor (props){
    super(props);
    this.state = {
      component: <Home/>,
      homeActive: true,
      codeActive: false,
      qualityActive: false,
      employActive: false,
      regisActive: false,
      contactActive: false
    }
  }

  componentDidUpdate(){
    console.log(this.state.component, this.state.codeActive);
  }

  render(){
    var homeBg = this.state.homeActive ? 'white' : '#696969';
    var codeBg = this.state.codeActive ? 'white' : '#696969';
    var qualityBg = this.state.qualityActive ? 'white' : '#696969';
    var employBg = this.state.employActive ? 'white' : '#696969';
    var regisBg = this.state.regisActive ? 'white' : '#696969';
    var contactBg = this.state.contactActive ? 'white' : '#696969';

    var homeText = this.state.homeActive ? '#696969' : '#F8F8F8';
    var codeText = this.state.codeActive ? '#696969' : '#F8F8F8';
    var qualityText = this.state.qualityActive ? '#696969' : '#F8F8F8';
    var employText = this.state.employActive ? '#696969' : '#F8F8F8';
    var regisText = this.state.regisActive ? '#696969' : '#F8F8F8';
    var contactText = this.state.contactActive ? '#696969' : '#F8F8F8';

    var homeBC = this.state.homeActive ? '#F5F5F5' : '#989898';
    var codeBC = this.state.codeActive ? '#F5F5F5' : '#989898';
    var qualityBC = this.state.qualityActive ? '#F5F5F5' : '#989898';
    var employBC = this.state.employActive ? '#F5F5F5' : '#989898';
    var regisBC = this.state.regisActive ? '#F5F5F5' : '#989898';
    var contactBC = this.state.contactActive ? '#F5F5F5' : '#989898';

    var homeStyle = {
      backgroundColor: homeBg,
      color: homeText,
      borderColor: homeBC,
    };
    var codeeStyle = {
      backgroundColor : codeBg,
      color: codeText,
      borderColor: codeBC,
    };
    var qualityStyle = {
      backgroundColor: qualityBg,
      color: qualityText,
      borderColor: qualityBC,
    };
    var employStyle = {
      backgroundColor: employBg,
      color: employText,
      borderColor: employBC,
    };
    var regisStyle = {
      backgroundColor: regisBg,
      color: regisText,
      borderColor: regisBC,
    };
    var contactStyle = {
      backgroundColor: contactBg,
      color: contactText,
      borderColor: contactBC,
    };

    return(
      <div className = " border-box">
        <div className = "buttons">
          <Link to = "/" className = 'unactive home' activeclassName= "active" ><div
            className = "item home"
            onClick = {() => { this.setState({ homeActive: true, codeActive: false, qualityActive: false, employActive: false, regisActive: false, contactActive: false  });  } }
            style = { homeStyle } >Home</div></Link>
          <Link to = "/category" className = 'unactive codeDev' activeclassName= "active" ><div
              className = "item codeDev"
              onClick = {() => { this.setState({ homeActive: false, codeActive: true, qualityActive: false, employActive: false, regisActive: false, contactActive: false });}}
              style = { codeeStyle } >Code Development </div></Link>
          <Link to = "/contact" className = 'unactive contact' activeclassName= "active" ><div
              className = "item contact"
              onClick = {() => { this.setState({  homeActive: false, codeActive: false, qualityActive: false, employActive: false, regisActive: false, contactActive: true });} }
              style = { contactStyle }>Contact Us</div></Link>
          <Link to = "/quality" className = 'unactive quality' activeclassName= "active" ><div
            className = "item quality"
            onClick = {() => { this.setState({  homeActive: false, codeActive: false, qualityActive: true, employActive: false, regisActive: false, contactActive: false  }); } }
            style = { qualityStyle }>Quality Assurance</div></Link>
          <Link to = "/registrations" className = 'unactive regis' activeclassName= "active" ><div
            className = "item regis"
            onClick = {() => { this.setState({  homeActive: false, codeActive: false, qualityActive: false, employActive: false, regisActive: true, contactActive: false });} }
            style = { regisStyle }>Registrations & Certifications</div></Link>
          <Link to = "/employment" className = 'unactive employment' activeclassName= "active" ><div
            className = "item employment"
            onClick = {() => { this.setState({  homeActive: false, codeActive: false, qualityActive: false, employActive: true, regisActive: false, contactActive: false }); } }
            style = { employStyle }>Employment</div></Link>
        </div>

        <div className = "content">
          <Route exact = { true } path = '/' component = { Home } />
          <Route path = '/category' component = { Code } />
          <Route path = '/quality' component = { Quality } />
          <Route path = '/employment' component = { Employment } />
          <Route path = '/registrations' component = { Regis } />
          <Route path = '/contact' component = { Contact } />
        </div>
      </div>
    )
  }
}

export default Buttons;
