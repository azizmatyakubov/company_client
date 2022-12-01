import "./navbar.scss";
import { HiSearch } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Topbar = () => {
  // const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <HiSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className="icon" />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode className="icon" />
            {/* onClick={() => dispatch({ type: "TOGGLE" }) */}
          </div>

          <div className="item">
            <MdNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdOutlineChat className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
