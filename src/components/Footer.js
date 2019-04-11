import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <section>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <a
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin
              </a>
            </li>
          </ul>
        </section>
      </footer>
    )
  }
}

export default Footer
