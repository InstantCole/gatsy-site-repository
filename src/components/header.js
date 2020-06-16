import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    
      <h1>
        <Link
          className={headerStyles.title}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/">Page 2</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/">Page 3</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/">Page 4</Link>
          </li>
        </ul>
        
      </nav>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
