import React from 'react';
import CurrentMemberCard from './currentMembersCard.jsx';
import '../styles/currentMembers.css';

export default class CurrentMembers extends React.Component {
  render() {
    return (
        <div className="current-members container">
          <h2 className="current-members-heading">Current <br/><span className="current-members-subheading">Members</span></h2>
          <div className="current-members-card-container">
            <CurrentMemberCard/>
            <CurrentMemberCard/>
            <CurrentMemberCard/>
            <CurrentMemberCard/>
          </div>
        </div>
      );
  }
}
