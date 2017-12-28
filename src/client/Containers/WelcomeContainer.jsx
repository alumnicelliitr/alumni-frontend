import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="navbar">
        	 <div className="loginbutton">Login</div>
           <div className="links-div">
  			      <div className="nav-links"><a href="#about">About</a></div>
              <div className="nav-links"><a href="#events">Events</a></div>
              <div className="nav-links"><a href="#mou">MOUs</a></div>
              <div className="nav-links"><a href="#initiatives">Initiatives</a></div>
              <div className="nav-links"><a href="#awards">Awards</a></div>
              <div className="nav-links"><a href="#donate">Donate</a></div>
              <div className="nav-links"><a href="#contact">Contact</a></div>
          </div>
	  	  </div>
      
        <div className="trendingNews">
          <div className="newsHead">Trending News Will Come Here</div>
          <div className="newsTag">Trending News Tagline(if any)</div>
        </div>
        <div className="mou-div">
          <div className="mou-text">
            <div className="mou-text-heading">
              <div className="mou-text-heading-main">
                Memorandum of
              </div>
              <div className="mou-text-heading-sub">
                Understanding
              </div>
            </div>
            <div className="see-our-mou">
              See our MOUs
            </div>
            <div className="view-mou-button">
              <div className="view-text">
              View
              </div>
            </div>
          </div>
          <div className="mou-placeholder">
            <div className="outer-circle">
              <div className="middle-circle">
                <div className="inner-circle">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-repo-div">
          <div className="video-placeholder">
            
          </div>
          <div className="video-text">
            <div className="video-text-heading">
              <div className="video-text-heading-main">
                Video
              </div>
              <div className="video-text-heading-sub">
                Repository
              </div>
            </div>
            <div className="video-text-sub">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tncidunt ut laoreet dolore aliquam erat volutpat. Ut wisi enim ad minimveniam, quis nostrud exerci taton ullamcorper suscipit loborts nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse moleste consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te eugait nulla facilisi.

            </div>
          </div>
        </div>
     
    </div>
    )
  }
}

export default WelcomeContainer
