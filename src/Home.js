import React from 'react';

class Home extends React.Component {
  render() {
    return <div>
      <div className= "mini-head"><i>Our Mission</i></div>
      <div className = "parag">
        Risk-informed decisions demand reliable, realistic information. We
        deliver advanced, effective and validated computational tools on
        radiological health and safety to facilitate sound decision-making.
      </div>

      <div className= "mini-head"><i>Our Motivation</i></div>
      <div className = "parag">
        RCD offsets the escalating costs of software development and maintenace
        by delivering unparalled computational integrity and advancement at a price
        lower than that of our competitors. Technological advancements of today
        make it easier than ever to upgrade dated codes, make them more user
        friendly and increase automated data transfer. Along these lines, our
        client collaborations and products have ushered in a Renaissance of Code
        Development.
      </div>
    </div>;
  }
}

export default Home;
