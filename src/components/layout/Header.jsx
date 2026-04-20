import Logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import "./Header.css";

const Header = () => {
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
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
