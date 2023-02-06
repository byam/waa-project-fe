import { Link } from 'react-router-dom';

function Header() {
  return (
    <ul>
      <li>
        <Link to="/properties"> Properties </Link>
      </li>
    </ul>
  );
}

export default Header;
