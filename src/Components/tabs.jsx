import React from 'react';
import '../styles/tabs.css';

export default class Tabs extends React.Component {

  onClick(e) {
    this.props.onClick(e.currentTarget.getAttribute("data-key"));
  }

  render() {
    const tabs = this.props.tabs.map((tab, index)=> {
      if (index==this.props.activeTab){
        return (
          <div className="custom-tab active-tab" key={index} data-key={index} onClick={this.onClick}>
            <span className="light-heading">{tab.lightHeading}</span>
            {tab.darkHeading}
          </div>
        );
      }
      return (
        <div className="custom-tab" key={index} data-key={index} onClick={(e) => this.onClick(e)} >
          <span className="light-heading">{tab.lightHeading}</span>
          {tab.darkHeading}
        </div>
      );
    });
    return (
      <div className="tabs-container">
        {tabs}
      </div>
    );
  }
}
