import React from 'react';
import '../styles/vision.css';

export default class VisionTab extends React.Component {
  render() {
      return (
        <div className="vision-container container">
          <div className="vision-content">
            <ul className="browser-default">
            <li>To provide the student community with more opportunities to interact with the alumni and gain from their experience.</li>
            <li>To build a sound framework wherein the alumni can engage in a more wholesome way with the institute.</li>
            <li>To hold reunions/meets to ensure a sustained connectivity among the alumni and between the alumni and the institute.</li>
            <li>To encourage the alumni to contribute to the progress of their alma mater in numerous ways possible.</li>
            <li>To serve the alumni community by recognizing their selfless service and contributions to the institute and to the nation.</li>
            </ul>
          </div>
          <div className="vision-quote">
            <img src="/images/double-quotes.svg" />
            <div className="quote-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </div>
          </div>
        </div>
        );
    }
}
