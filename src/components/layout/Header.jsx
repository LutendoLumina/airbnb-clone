import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { openModal } from "../../actions/modalAction";
import {logout} from "../../actions/userAction"
import Login from "../Login";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandler = () => {
    dispatch(openModal("open", "login"));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <img src={Logo} className="header_logo" alt="Airbnb Logo" />

      <div className="header_center">
        <div className="search_wrapper">
          <input type="text" placeholder="Search destinations" />
          <SearchIcon />
        </div>
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown_content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span onClick={logoutHandler}>Log out</span>
              </>
            ) : (
              <>
                <span>Sign Up</span>
                <span onClick={openModalHandler}>Log In</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
