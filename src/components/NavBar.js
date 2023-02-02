import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">NavBar</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavBar;