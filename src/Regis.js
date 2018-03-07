import React from 'react';

class Regis extends React.Component {
  render() {
    return <div>
      <div className= "mini-head"><i>Registrations & Certifications</i></div>
      <div className = "parag">
        RCD is registered with the following systems. Contact us for details.
        <ul>
          <li> System for Award Management (SAM) </li>
          <li> Small Business Administration </li>
          <li> GSA Schedule </li>
          <li> NSF Fastlane </li>
        </ul>
      </div>

      <div className = "parag">
        Our team includes staff with the following credentials:
        <ul>
          <li> Board Certification in Health Physics </li>
          <li> Emergency Response Qualifed for Major Radiological Incidents </li>
          <li> Nuclear Security </li>
        </ul>
      </div>
    </div>;
  }
}

export default Regis;
