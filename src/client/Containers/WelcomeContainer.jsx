import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="homepage">
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
        <div className="more-videos">
          <div className="more-videos-head">
            More of Video Repository
          </div>
          <div className="more-videos-sub">
            Visit our Youtube channel
          </div>
          <div className="youtube-button">
            Youtube channel
          </div>
        </div>
        <div className="samp">
          <div className="samp-heading">
            Student Alumni Mentorship Programme
          </div>
          <div className="samp-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci taton ullamcorper suscipit loborts nisl ut aliquip ex ea comm\odo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse moleste consequat, vel illum dolore eu feugiat 
          </div>
          <div className="samp-placeholder">
            
          </div>
          <div className="register-button">
            Register
          </div>
        </div>
        <div className="alumni-cards">
          <div className="alumni-cards-heading">
            <div className="alumni-cards-heading-main">
              Alumni
            </div>
            <div className="alumni-cards-heading-sub">
              Cards
            </div>
          </div>
          <div className="alumni-cards-text">
            Don't have? Get registered
          </div>
          <div className="card-register-button">
            Register
          </div>
        </div>
        <div className="news-and-insight">
          <div className="news-insight-heading">
            News & Insight
          </div>
          <div className="news-view-item-div">
            <div className="view-item-menu">
              <img src="" />
            </div>
            <div className="view-item-text">
              View all articles
            </div>
          </div>
          <div className="news-card-div">
            <div className="cardrow">
              <div className="news-card-1">
                <div className="news-card-1-ph">
                  
                </div>
                <div className="">
                  
                </div>
              </div>
              <div className="news-card-2">
                
              </div>
              <div className="news-card-3">
                
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <div className="subscribe-heading">
            <div className="subscribe-heading-main">
              Subscribe to our Newsletter
            </div>
            <div className="subscribe-heading-sub">
              Get updated of the Institute activities through the Verband
            </div>
          </div>
          <div className="subscribe-mail">
            <div className="subscribe-mail-enter">
              <textarea id="subscribe-mail-textarea" placeholder="Enter mail ID"></textarea>
            </div>
            <div className="subscribe-button">
              Subscribe
            </div>
          </div>
        </div>
        <div className="others">
          <div className="others-home-div">
            <div>Home</div>
            <div>About Us</div>
            <div>Student Affairs</div>
          </div>
          <div className="others-initiatives-div">
            <div className="others-heading-main">
              Initiatives
            </div>
            <div className="others-options">
              <div>SAMP</div>
              <div>CORE</div>
              <div>Video Repository</div>
            </div>
          </div>
          <div className="others-blogs-div">
            <div className="others-heading-main">
              Blogs
            </div>
            <div className="others-options">
              <div>Know your Alum</div>
              <div>Share your story</div>
            </div>
          </div>
          <div className="others-events-div">
            <div className="others-heading-main">
              Events
            </div>
            <div className="others-options">
              <div>Golden Jubilee</div>
              <div>Silver Jubilee</div>
              <div>Ruby Jubilee</div>
              <div>Alumni Meets</div>
            </div>
          </div>
          <div className="others-contact-div">
            <div className="others-heading-main">
              Contact
            </div>
            <div className="others-options">
              <div>Address</div>
              <div>Number</div>
              <div>Email</div>
              <div>Follow us on</div>
              <div className="contact-icons-dark">
            </div>
          </div>
        </div>
    </div>
    </div>
    )
  }
}

export default WelcomeContainer
