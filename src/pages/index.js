import React from 'react'

import 'bulma/css/bulma.css'
import './index.css'

const IndexPage = () => (
  <React.Fragment>
    <section className="hero is-link is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome to Propel.</h1>
          <h1 className="title">
            A Revolutionary New School
            <br />
            That Invests in You
          </h1>
          <h2 className="subtitle">
            Currently offering a 2-week immersive program to launch your
            software engineering career. <strong>For free.</strong><br/>
            Our next program starts from <strong>19th November, 2018</strong>.
            Apply here <a href="https://goo.gl/forms/D5qSHdZu6pMDRqJ13">https://goo.gl/forms/D5qSHdZu6pMDRqJ13</a>.
          </h2>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default IndexPage
