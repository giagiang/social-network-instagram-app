import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar></Avatar>
          roses_are_rosie
          <span></span> 
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img
          src="https://i.pinimg.com/736x/96/af/4a/96af4a92697323ee0f16f1823e2a5f35.jpg"
          alt=""
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <MessageIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        like by ha.leps and 4.897.345 others
      </div>
    </div>
  );
}

export default Post;
