import React from "react";
import { Avatar } from "@mui/material";
import "./Sugesstions.css";

function Sugesstions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title"> Suggested for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>r</Avatar>
            </span>
            <div className="username_info">
              <span className="username">giang đến đấy đâsdasdashjdbkasgh</span>
              <span className="relation"> follow by ha.leps</span>
            </div>
          </div>
          <button className="follow__button">Follow </button>
        </div>
        
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>h</Avatar>
            </span>
            <div className="username_info">
              <span className="username">giang</span>
              <span className="relation"> follow by ha.leps</span>
            </div>
          </div>
          <button className="follow__button">Follow </button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>h</Avatar>
            </span>
            <div className="username_info">
              <span className="username">giang</span>
              <span className="relation"> follow by ha.leps</span>
            </div>
          </div>
          <button className="follow__button">Follow </button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>h</Avatar>
            </span>
            <div className="username_info">
              <span className="username">giang</span>
              <span className="relation"> follow by ha.leps</span>
            </div>
          </div>
          <button className="follow__button">Follow </button> 
        </div>
        

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>h</Avatar>
            </span>
            <div className="username_info">
              <span className="username">giang</span>
              <span className="relation"> follow by ha.leps</span>
            </div>
          </div>
          <button className="follow__button">Follow </button>
        </div>

      </div>
    </div>
  );
}

export default Sugesstions;
