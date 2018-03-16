import React from 'react';

import '../styles/toggleRow.css';

export default class ToggleRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleShow(e){
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    let toggleContent;
    let imageSrc = "/static/images/down-arrow.svg";
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, p dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.";
    if (this.state.show) {
      toggleContent = (
          <div className="toggle-about">
            <h5>About</h5>
            <p>{this.props.description}</p>
          </div>
        );
      imageSrc = "/static/images/up-arrow.svg"
    }
    return (
      <div className="toggle-row">
        <div className="row-head" onClick={(e) => this.toggleShow(e)}>
          <h3 className="toggle-heading">{this.props.title}</h3>
          <img src={imageSrc}/>
        </div>
        {toggleContent}
      </div>
    );
  }
}
