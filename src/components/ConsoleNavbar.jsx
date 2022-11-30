import Jdenticon from "./Jdenticon";
import { useLogout } from "../hooks/useLogout";

function ConsoleNavbar() {
  const { logout } = useLogout();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark p-1 shadow">
      <div className="d-flex flex-grow-1">
        <a className="navbar-brand d-flex pt-2" href="/console">
          Admin Console
        </a>
        <div className="w-100 text-right">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse flex-grow-1 text-right"
          id="navbarDropdown"
        >
          <ul className="navbar-nav ms-auto flex-nowrap">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle nav-avatar-dropdown"
                id="dropdownMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Jdenticon
                  className="nav-avatar rounded-circle"
                  // name={user.username}
                  height="32px"
                  width="32px"
                />
                {/* {user.username} */}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenu"
              >
                <li>
                  <a className="dropdown-item" href="/dashboard">
                    Profile
                  </a>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ConsoleNavbar;
