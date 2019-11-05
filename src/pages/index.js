import React from 'react'

import 'bulma/css/bulma.css'
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
              <h1 className="title is-1 has-text-link">Welcome to Propel</h1>
              <h1 className="subtitle is-3">
                A Revolutionary New School
                <br />
                That Invests in You.
              </h1>
              <p className="content is-medium ">
                Currently offering a 2-week immersive program
                <br />
                to launch your software engineering career.
                <span className="has-text-weight-bold"> For free.</span>
                <br />
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
              <img src="/static/hero-developer-9-f9bed15856252f0c7fbb2fdb3ab5c2d7.svg" alt="" />
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
                Everyday from 9:00 a.m. to 6:00 p.m. for a duration of 2 weeks.
              </p>
              <p className="title is-5">LOCATION</p>
              <p className="subtitle is-5 is-spaced">
                <a
                  className=""
                  href="https://goo.gl/maps/N3CRDQR4kvz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="map-marker-alt"
                    className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    />
                  </svg>
                  <span> 91Springboard, J.P. Nagar, Bangalore.</span>
                </a>
              </p>
              <p className="title is-5">COST</p>
              <p className="subtitle is-5 is-spaced">Free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-1 is-spaced">Curriculum</h1>
              <div>
                <p className="title is-5 has-text-bold">CLI &amp; Git</p>
                <p className="subtitle is-5 is-spaced">
                  The basics of using command line interface and Git.
                </p>
                <p className="title is-5 has-text-bold">Introduction to JavaScript</p>
                <p className="subtitle is-5 is-spaced">Learn the language of web.</p>
                <p className="title is-5 has-text-bold">Algorithms &amp; Problem solving</p>
                <p className="subtitle is-5 is-spaced">
                  Sharpen your problem solving skills with over 80 hours of intense programming
                  practice.
                </p>
              </div>
            </div>
            <div className="column columns is-multiline is-hidden-touch">
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="free-code-camp"
                className="svg-inline--fa fa-free-code-camp fa-7x column is-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M69.3 144.5c-41 68.5-36.4 163 1 227C92.5 409.7 120 423.9 120 438c0 6.8-6 13-12.8 13C87.7 451 8 375.5 8 253.2c0-111.5 78-186 97.1-186 6 0 14.9 4.8 14.9 11.1 0 12.7-28.3 28.6-50.7 66.2zm195.8 213.8c4.5 1.8 12.3 5.2 12.3-1.2 0-2.7-2.2-2.9-4.3-3.6-8.5-3.4-14-7.7-19.1-15.2-8.2-12.1-10.1-24.2-10.1-38.6 0-32.1 44.2-37.9 44.2-70 0-12.3-7.7-15.9-7.7-19.3 0-2.2.7-2.2 2.9-2.2 8 0 19.1 13.3 22.5 19.8 2.2 4.6 2.4 6 2.4 11.1 0 7-.7 14.2-.7 21.3 0 27 31.9 19.8 31.9 6.8 0-6-3.6-11.6-3.6-17.4 0-.7 0-1.2.7-1.2 3.4 0 9.4 7.7 11.1 10.1 5.8 8.9 8.5 20.8 8.5 31.4 0 32.4-29.5 49-29.5 56 0 1 2.9 7.7 12.1 1.9 29.7-15.1 53.1-47.6 53.1-89.8 0-33.6-8.7-57.7-32.1-82.6-3.9-4.1-16.4-16.9-22.5-16.9-8.2 0 7.2 18.6 7.2 31.2 0 7.2-4.8 12.3-12.3 12.3-11.6 0-14.5-25.4-15.9-33.3-5.8-33.8-12.8-58.2-46.4-74.1-10.4-5-36.5-11.8-36.5-2.2 0 2.4 2.7 4.1 4.6 5.1 9.2 5.6 19.6 21.4 19.6 38.2 0 46.1-57.7 88.2-57.7 136.2-.2 40.3 28.1 72.6 65.3 86.2zM470.4 67c-6 0-14.4 6.5-14.4 12.6 0 8.7 12.1 19.6 17.6 25.4 81.6 85.1 78.6 214.3 17.6 291-7 8.9-35.3 35.3-35.3 43.5 0 5.1 8.2 11.4 13.2 11.4 25.4 0 98.8-80.8 98.8-185.7C568 145.9 491.8 67 470.4 67zm-42.3 323.1H167c-9.4 0-15.5 7.5-15.5 16.4 0 8.5 7 15.5 15.5 15.5h261.1c9.4 0 11.9-7.5 11.9-16.4 0-8.5-3.5-15.5-11.9-15.5z"
                />
              </svg>
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github fa-7x column is-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="js"
                className="svg-inline--fa fa-js fa-7x column is-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                />
              </svg>
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="hackerrank"
                className="svg-inline--fa fa-hackerrank fa-7x column is-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 464 512"
              >
                <path
                  fill="currentColor"
                  d="M453.5 128C439.01 103.05 261.13 0 232.16 0 203.2 0 25.25 102.79 10.84 128c-14.41 25.21-14.49 230.8 0 256.01C25.33 409.21 203.22 512 232.16 512s206.85-102.92 221.33-128c14.48-25.08 14.49-231.05.01-256zM292.13 414.22c-3.96 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32.04-2.02-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 5.96-5.74 5.94-10.13-.03-20.27-.11-30.41-.08-4.1.01-5.87-1.53-5.74-6.11.92-33.44 2.96-84.02-.15-212.67v-3.17c-9.67-.35-16.38-.96-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69 3.96 0 41.17 35.78 38.27 38.69-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2.03 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46.02 4.57 1.72 4.5 5.38-3.65 191.29-.66 177.94-.66 210.34 8.87.35 16.82.96 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"
                />
              </svg>
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="kaggle"
                className="svg-inline--fa fa-kaggle fa-6x column is-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 291 512"
              >
                <path
                  fill="currentColor"
                  d="M291.72 508.98c-.51 2.01-2.51 3.01-6.01 3.01h-66.92c-4.02 0-7.51-1.75-10.52-5.27L97.74 366.14l-30.82 29.32v109.02c0 5.02-2.51 7.52-7.52 7.52H7.52C2.5 512 0 509.5 0 504.48V7.51C0 2.51 2.5 0 7.52 0H59.4c5.01 0 7.52 2.51 7.52 7.51v306l132.32-133.82c3.51-3.5 7.02-5.26 10.52-5.26h69.18c6.96 0 7.9 7.87 5.26 10.52L144.35 320.26l145.86 181.2"
                />
              </svg>
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="coffee"
                className="svg-inline--fa fa-coffee fa-6x column is-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                color="salmon"
              >
                <path
                  fill="currentColor"
                  d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
                />
              </svg>
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
              <p className="title is-5 has-text-dark">Why is the program free ?</p>
              <p className="subtitle is-5 is-spaced">
                Because best things in life are. On a serious note, we are supported by tech
                companies who are interested in hiring our graduates.
              </p>
              <p className="title is-5 has-text-dark">Will I get a job ?</p>
              <p className="subtitle is-5 is-spaced">
                The participants who do well in these 2 weeks will get referred to tech companies in
                Bengaluru.
              </p>
              <p className="title is-5 has-text-dark">Why are we using JavaScript ?</p>
              <p className="subtitle is-5 is-spaced">
                There is a huge demand of Node, React, Angular and Vue developers. Learning
                JavaScript will help you get a job in the current market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default IndexPage
