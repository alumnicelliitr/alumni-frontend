import React from 'react';
import FoundingMembers from '../Components/foundingmembers.jsx';
import Testimonial from '../Components/testimonial.jsx';
import CurrentMembers from '../Components/currentMembers.jsx';

export default class Team extends React.Component {
  render() {
    return (
        <div className="team">
          <FoundingMembers/>
          <CurrentMembers/>
          <Testimonial/>
        </div>
      );
  }
}
