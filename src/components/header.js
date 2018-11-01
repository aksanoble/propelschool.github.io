import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <h1 class="title">Propel School</h1>
      </a>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <a class="navbar-item"><Link to="/about/">About</Link></a>
          <a class="navbar-item"><Link to="/programs/">Programs</Link></a>
          <a class="navbar-item"><Link to="/faqs/">FAQs</Link></a>
          <a class="navbar-item"><Link to="/contact/">Contact</Link></a>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
