import React from 'react'

import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './index.css'

const IndexPage = () => (
  <React.Fragment>
    <section className="hero is-fullheight is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end" />
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-1 has-text-link is-spaced">Learn to code <br/>at Propel School</h1>
              <h1 className="subtitle is-3">
                4 week intense bootcamp
              </h1>
              <p className="content is-medium ">
                Learn to code. Build skills. Develop your career.
                <span className="has-text-weight-bold"> For free</span>
                <br />
              </p>
              <p className="content is-small is-italic has-text-weight-light" style={{fontFamily: 'monospace'}}>
                *No coding experience required
              </p>
              <p>
                <a
                  className="button is-warning is-medium is-rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/forms/D5qSHdZu6pMDRqJ13"
                >
                  Apply Now
                </a>
              </p>
            </div>
            <div className="column is-hidden-touch">
              <img
                src="/static/hero-developer-9-f9bed15856252f0c7fbb2fdb3ab5c2d7.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-fullheight is-link">
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-hidden-touch">
              <img
                src="/static/hero-program-details-3-2a7ab3f23625e295707c8f793d567480.svg"
                alt=""
              />
            </div>
            <div className="column">
              <h1 className="title is-1 is-spaced">Program details</h1>
              <p className="title is-5">SCHEDULE</p>
              <p className="subtitle is-5 is-spaced">
                Mon - Sat, 9 AM to 6 PM for 4 weeks
              </p>
              <p className="title is-5">LOCATION</p>
              <p className="subtitle is-5 is-spaced">
                <a
                  className=""
                  href="https://goo.gl/maps/mNSy8U98PfhHjsUx8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <span> Workflo by OYO Ranka Junction, KR Puram</span>
                </a>
              </p>
              <p className="title is-5">COST</p>
              <p className="subtitle is-5 is-spaced">
                <span className="tag is-warning">Free</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title is-1 is-spaced">Curriculum</h1>
              <div>
                {/* <p className="title is-5 has-text-bold">CLI &amp; Git</p>
                <p className="subtitle is-5 is-spaced">
                  The basics of using command line interface and Git.
                </p> */}
                <p className="title is-5 has-text-bold">
                  Introduction to JavaScript
                </p>
                <p className="subtitle is-5 is-spaced">
                  Learn the language of web.
                </p>
                <p className="title is-5 has-text-bold">
                  Algorithms &amp; Problem solving
                </p>
                <p className="subtitle is-5 is-spaced">
                  Build your problem solving skills with over 200 hours of intense practice.
                </p>
              </div>
            </div>
            <div className="column columns is-hidden-touch">
              <div className="column">
                <a
                  className=""
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-dark	">
                    <i className="fab fa-free-code-camp fa-5x" />
                  </span>
                </a>
              </div>
              <div className="column">
                <a
                  className=""
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-dark	">
                    <i className="fab fa-js fa-5x" />
                  </span>
                </a>
              </div>
              <div className="column">
                <a
                  className=""
                  href="https://www.hackerrank.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-dark	">
                    <i className="fab fa-hackerrank fa-5x" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-fullheight is-warning">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              <h1 className="title is-1 is-spaced">FAQs</h1>
              <p className="title is-5 has-text-dark">
                Why is the program free ?
              </p>
              <p className="subtitle is-5 is-spaced">
                We are supported by{' '}
                <strong>
                  <a href="https://www.mountblue.io/" target="_blank">
                    MountBlue Technologies
                  </a>
                </strong>
              </p>
              <p className="title is-5 has-text-dark">Will I get a job ?</p>
              <p className="subtitle is-5 is-spaced">
                Participants who do well in the program will get referred to MountBlue Technologies
              </p>
              <p className="title is-5 has-text-dark">
                Why are we using JavaScript ?
              </p>
              <p className="subtitle is-5 is-spaced">
                There is huge demand for Node, React, Angular and Vue
                developers. Learning JavaScript will help you get a job in the
                current market
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered ">
          <p>
            A {' '}
            <strong className="has-text-link">
              <a href="https://www.mountblue.io/" target="_blank">
                MountBlue
              </a>
            </strong>
            {' '} initiative
          </p>
        </div>
      </footer>
    </section>
  </React.Fragment>
)

export default IndexPage
