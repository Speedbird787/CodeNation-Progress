//task 3

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/link">Link</Link>
          </li>
          <li>
            <Link to="/address">Address</Link>
          </li>
          <li>
            <Link to="/prices">Prices</Link>
          </li>
        </ul>
        <p>HELLO THERE!</p>
      </nav>
    </footer>
  )
}

export default Footer;