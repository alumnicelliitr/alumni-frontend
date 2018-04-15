import React from 'react';
import CurrentMemberCard from './currentMembersCard.jsx';
import '../styles/currentMembers.css';

export default class CurrentMembers extends React.Component {
  render() {
    const members = this.props.members.map((member) => {
      return (<CurrentMemberCard {...member.user} />);
    });

    return (
        <div className="current-members container">
          <h3 className="current-members-heading">Current <br/><span className="current-members-subheading">Members</span></h3>
          <div className="current-members-card-container">
            {members}
          </div>
        </div>
      );
  }
}
