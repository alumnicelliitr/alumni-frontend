import React from 'react';
import FoundingMemberCard from './foundingMemberscard.jsx';
import '../styles/foundingMembers.css';

export default class FoundingMembers extends React.Component {
  render() {
    return (
        <div className="founding-members container">
          <h2 className="founding-members-heading">Founding <br/><span className="founding-members-subheading">Members</span></h2>
          <div className="founding-members-card-container container">
            <FoundingMemberCard/>
            <FoundingMemberCard/>
            <FoundingMemberCard/>
          </div>
        </div>
      );
  }
}
