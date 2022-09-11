import styles from "styles/social.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Social({ iconSize = 'initial' }) {
  return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      <li>
        <a href="http://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="http://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="http://Github.com">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  )
}
