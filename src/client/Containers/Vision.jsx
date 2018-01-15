import React from 'react'
import { Link } from 'react-router'

class Vision extends React.Component {
  render() {
    return (
    <div className="vision">
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
      <div className="about-section-headings" id="vision">
        <div className="vision-active">
          Vision
        </div>
        <div className="dora-inactive">
          DORA
        </div>
        <div className="team-inactive">
          Team
        </div>
        <div className="social-links-inactive">
          Social links
        </div>
      </div>
      <div className="about-content-vision">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
 volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero er
os et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum d
olor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut 
wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum
 dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
 wisi enim ad minim 
      </div>
      <div className="about-content-vision-quote">
      <div className="quote-container">
        <img src="double-quotes.svg" />
      </div>
      <div className="quote-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
 erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
      </div>
      </div>
    </div>
    )
  }
}

export default Vision