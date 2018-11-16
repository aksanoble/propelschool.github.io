import React from 'react';

import 'bulma/css/bulma.css';
import './index.css';

const IndexPage = () => (
  <React.Fragment>
    <section className="hero is-link is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-weight-bold">Welcome to Propel</h1>
          <h1 className="is-size-3">
            A Revolutionary New School
            <br />
            That Invests in You.
          </h1>
          <p className="content is-medium ">
            Currently offering a 2-week immersive program to launch your
            software engineering career.
            <span className="has-text-weight-bold"> For free.</span>
            <br />
            Our next program starts from
            <span className="has-text-weight-bold"> 19th November, 2018.</span>
          </p>
          <p><a className="button is-warning" target="_blank" rel="noopener noreferrer" href="https://goo.gl/forms/D5qSHdZu6pMDRqJ13">Apply Now</a></p>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default IndexPage;
