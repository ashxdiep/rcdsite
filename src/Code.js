import React from 'react';

class Code extends React.Component {
  render() {
    return <div>
      <div className= "mini-head"><i>Experts in Computer Code Development</i></div>
      <div className = "parag">
        With more than 35 years of collective software experience, our PhD scientists
        and engineers have addressed software development, maintenance, testing,
        documentation, and training. Examples include computer codes to calculate:
        <ul>
          <li> Shallow dose equivalent </li>
          <li> Deep dose equivalent </li>
          <li> Atmospheric releases, dispersion and deposition </li>
          <li> Environmental pathway analysis </li>
          <li> Radionuclide migration in the geosphere </li>
          <li> Groundwater contamination </li>
          <li> Surface water contamination </li>
          <li> Nuclear facility safety and risk </li>
          <li> Radioactive material threats </li>
        </ul>
        We have been in your shoes. Our staff has sponsored code development; led
        computer module development; written, reviewed, and tested code; and
        utilized software to demonstrate compliance with regulatory requirements.
        We blend these perspectives into our projects.
      </div>
    </div>;
  }
}

export default Code;
