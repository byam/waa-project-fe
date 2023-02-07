import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/properties"> Properties </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
