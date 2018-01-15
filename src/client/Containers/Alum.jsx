import React from 'react'
import { Link } from 'react-router'

class KnowYourAlum extends React.Component {
  render() {
    return (
<div className="knowyouralum">
<div className="navbar">
          <div className="loginbutton">Login</div>
            <div className="links-div">
                <div className="nav-links"><a href="about/vision">About</a></div>
                <div className="nav-links"><a href="/events/recent">Events</a></div>
                <div className="nav-links"><a href="/mou">MOUs</a></div>
                <div className="nav-links"><a href="/initiatives">Initiatives</a></div>
                <div className="nav-links"><a href="/awards">Awards</a></div>
                <div className="nav-links"><a href="/donate">Donate</a></div>
                <div className="nav-links"><a href="/contact">Contact</a></div>
          </div>
      </div>
      <div className="separator">
        
      </div>
      <div className="know-your-alum-active">
        <div className="know-your-alum-active-heading">
          <div className="know-your-alum-active-heading-main">
            Know your
          </div>
          <div className="know-your-alum-active-heading-sub">
            Alum
          </div>
        </div>
        <div className="know-your-alum-content">
          <div className="know-your-alum-content-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo
lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
          </div>
          <div className="know-your-alum-content-card">
            <div className="card-row-1">
              <div className="card-1">
                <div className="card-placeholder">
                  
                </div>
                <div className="card-text">
                  <div className="card-text-head">
                    Lorem Ipsum
                  </div>
                  <div className="card-text-sub">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="share-story-inactive">
        <div className="share-story-inactive-heading">
          <div className="share-story-inactive-heading-main">
            Share Your
          </div>
          <div className="share-story-inactive-heading-sub">
            Story
          </div>
        </div>
      </div>
</div>
    )
  }
}

export default KnowYourAlum