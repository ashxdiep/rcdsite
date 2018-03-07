import React from 'react';

class Contact extends React.Component {
  render() {
    return <div>
      <div className= "mini-head"><i>Office & Branches</i></div>
      <div className = "parag">
      <ul>
        <li> Main Office (Eugene, OR) </li>
        <li> Technical Development (Germantown, TN) </li>
        <li> Customer Engagement (Austin, TX) </li>
      </ul></div>


      <div className= "mini-head"><i>Contact:</i></div>
      <div className = "parag">
        James A. Skinner, Administrative Manager <br />
        Renaissance Code Development <br />
        3926 Monroe Street <br />
        Eugene, Oregon 97405 <br />
        james.skinner@RCDsoftware.com<br />
        (541) 852-3895
      </div>
    </div>
  }
}

export default Contact;
