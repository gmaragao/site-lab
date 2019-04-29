import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "../components/header.module.scss"
const Header = () => {
  return (
    <div>
      <nav>
        <ol className={HeaderStyles.navLinks}>
          <li>
            <Link to="/">Lab</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link to="hall">Hall</Link>
          </li>
          <li>
            <Link to="team">Team</Link>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Header
