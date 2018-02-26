import React from 'react';
import FoundingMemberCard from './foundingMemberscard.jsx';
import '../styles/foundingMembers.css';

export default class FoundingMembers extends React.Component {
  render() {
    return (
        <div className="founding-members container">
          <h3 className="light-heading">Founding <br/><span className="dark-subheading">Members</span></h3>
          <div className="founding-members-card-container container">
            <FoundingMemberCard/>
            <FoundingMemberCard/>
            <FoundingMemberCard/>
          </div>
        </div>
      );
  }
}
