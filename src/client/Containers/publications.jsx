import React from 'react';
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import Tabs from '../Components/tabs.jsx';
import KnowYourAlum from '../Components/knowYourAlum.jsx';
import ShareYourStory from '../Components/shareYourStory.jsx';
import '../styles/publications.css';

export default class Publications extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab:0,
      writeMode: false,
      story: '',
      file: {},
    };
  }

  tabClick(clickTab) {
    this.setState({
      activeTab: clickTab,
      writeMode: this.state.writeMode,
      story: this.state.story,
      file: this.state.file,
    });
  }

  writeClick() {
    this.setState({
      activeTab: this.state.activeTab,
      writeMode: !this.state.writeMode,
      story: this.state.story,
      file: this.state.file,
    });
  }

  readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image-display')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(input.files[0]);
    }
  }

  storyChange(e) {
    this.setState({
      activeTab: this.state.activeTab,
      writeMode: this.state.writeMode,
      story: e.target.value,
      file: this.state.file,
    });
  }

  render() {
    const tabs = [
      {lightHeading: 'Know your',darkHeading: 'Alum'},
      {lightHeading: 'Share your',darkHeading: 'Story'},
    ];

    const tabContent = [
      ( <div id="know-your-alum" className="publications-containers"><KnowYourAlum /></div> ),
      ( <div id="share-your-story" className="publications-containers"><ShareYourStory /></div> ),
    ];

    const writeContent = (
      <div className="write-form-container">
        <div className="form-outer">
          <div className="upload-image">
            <img id="image-display" />
            <input type='file' className="inputfile" onChange={(e) => this.readURL(e.target)} />
          </div>
          <div className="write-story">
            <textarea name="write-story" className="browser-default" value={this.state.story} onChange={(e) => this.storyChange(e)}></textarea>
          </div>
        </div>
        <div className="button-container">
          <div className="cancel-button">Cancel</div>
          <div className="submit-button">Submit</div>
        </div>
      </div>
    );

    let content = tabContent[this.state.activeTab];
    if(this.state.writeMode) {
      content = writeContent;
    }
    return (
      <div>
      <Navbar/>
      <div className="publications-container container">
        <div>
          <Tabs tabs={tabs} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
        </div>
        <div className="write-button" onClick={(e) => this.writeClick()}><img src="/static/images/signature.svg"/>Write</div>
        {content}
      </div>
      <LandingFooter/>
      </div>
    );
  }
}
