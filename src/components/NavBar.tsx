import { NavLink } from "react-router";
import { useUser } from "../hooks/useUser";

export default function NavBar() {
  const { userState } = useUser();

  console.log(userState);
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
        <li>
          {userState && (
            <NavLink
              to="/myevents"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              my events
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
