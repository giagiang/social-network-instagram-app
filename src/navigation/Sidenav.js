import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/detail/2-28310_instagram-logo-black-and-ahite-instagram-word-logo.png"
        alt="Instagram Logo Black And Ahite - Instagram Word Logo Png@pngkey.com"
      />
      <div className="sidenav__buttons">
      <button className="sidenav__button">
        <HomeIcon />
        <span>Home</span>
      </button>

      <button className="sidenav__button">
        <SearchIcon />
        <span>Search</span>
      </button>

      <button className="sidenav__button">
        <ExploreIcon />
        <span>Explore</span>
      </button>

      <button className="sidenav__button">
        <SlideshowIcon />
        <span>Reels</span>
      </button>

      <button className="sidenav__button">
        <MessageIcon />
        <span>Messages</span>
      </button>

      <button className="sidenav__button">
        <FavoriteBorderIcon />
        <span>Notifications</span>
      </button>

      <button className="sidenav__button">
        <AddCircleOutlineIcon />
        <span>Create </span>
      </button>

      <button className="sidenav__button">
        <AccountCircleIcon />
        <span>Profile </span>
      </button>
    </div>
     <div className="sidenav__more">
      <button className="sidenav__button">
        <MenuIcon />
        <span>More</span>
      </button>
     </div>
  </div>
  );
}


export default Sidenav;