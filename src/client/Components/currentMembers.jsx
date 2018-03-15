import React from 'react';
import CurrentMemberCard from './currentMembersCard.jsx';
import '../styles/currentMembers.css';

export default class CurrentMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    let request = new Request('https://institute-alumni-relation-cell.herokuapp.com/api/website/members/',{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        isLoaded: true,
        data: res,
      });
    });
  }

  render() {
    const members = this.state.data.map((member) => {
      return (<CurrentMemberCard name={member.name} branch={member.branch} batch={member.batch} image={member.image} />);
    });

    return (
        <div className="current-members container">
          <h3 className="current-members-heading">Current <br/><span className="current-members-subheading">Members</span></h3>
          <div className="current-members-card-container">
            {members}
          </div>
        }
        </div>
      );
  }
}
