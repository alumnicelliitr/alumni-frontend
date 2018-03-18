import React from 'react';
import FoundingMembers from '../Components/foundingmembers.jsx';
import Testimonial from '../Components/testimonial.jsx';
import CurrentMembers from '../Components/currentMembers.jsx';
import Loader from './loader.jsx';

export default class Team extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      founding: [],
      current: [],
    };
  }
  componentDidMount() {
    let request = new Request('https://institute-alumni-relation-cell.herokuapp.com/api/core/team/',{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        isLoaded: true,
        founding: res[0].Founding,
        current: res[2].Current,
      });
    });
  }
  render() {
    let foundingMembers;
    let currentMembers;
    if (this.state.isLoaded){
      if (this.state.founding.length > 0){
        foundingMembers = (<FoundingMembers members={this.state.founding}/>);
      }
      if (this.state.current.length > 0){
        currentMembers = (<CurrentMembers members={this.state.current} />);
      }
    }
    return (
        <div className="team">
          { !this.state.isLoaded ? (<Loader/>) : ''}
          {foundingMembers}
          {currentMembers}
          <Testimonial/>
        </div>
      );
  }
}
