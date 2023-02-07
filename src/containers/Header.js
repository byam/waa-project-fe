import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 p-4 flex items-center justify-between">
      <nav className="flex">
        <ul className="flex">
          <li className="text-white font-medium mr-4 hover:text-gray-400">
            <Link to="/properties"> Properties </Link>
          </li>
          <li className="text-white font-medium mr-4 hover:text-gray-400">
            <Link to="/admin"> Admin </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
