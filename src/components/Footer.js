import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
        <footer>
      {/* Social media icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      {/* Privacy button */}
      <button className="privacy-button">Privacy</button>
    </footer>
    </div>
  )
}

export default Footer