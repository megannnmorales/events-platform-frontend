import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
