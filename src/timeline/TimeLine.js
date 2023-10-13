import React, { useState } from "react";
import "./Timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./posts/Post";
function TimeLine() {
  const [posts, setPosts] = useState([
    {
      user: "cristiano",
      postImage:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5311e29b6e362d7a/60dbe33596e07e0f6e54f479/85b0f5fb22b2d5fda204aed7bade9a8040ba17d4.jpg",
      likes: 11.862468,
      timestamp: "1w",
    },
    {
      user: "coding_harry",
      postImage:
        "https://i.pinimg.com/736x/4c/a9/c1/4ca9c1ae804617308c2ddeab72411807.jpg",
      likes: 6.3482,
      timestamp: "2d",
    },
    {
      user: "soytiet",
      postImage:
        "https://images2.thanhnien.vn/uploaded/lenammedia/2020_12_16/ytiet16-9khonglogo00_02_08_23still005_PKIT.jpg?width=500",
      likes: 33.862,
      timestamp: "4d",
    },
    {
      user: "may__lily",
      postImage:
        "https://i1-ngoisao.vnecdn.net/2021/01/05/phuongly0926-20190919151153-3235-1609845638.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=9AW0D8zPHzGZDuP6Z2KJRw",
      likes: 66.356,
      timestamp: "1d",
    },
    {
      user: "ha.leps",
      postImage:
        "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/367448244_2006441876383485_7870747243879656627_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aoSAmMPDVfMAX-nKusV&_nc_ht=scontent.fhan3-4.fna&oh=00_AfD0W3WcG2qs6yI6HAqtKbz4HV3FCfgaIdlisyBStnu21Q&oe=652E468B",
      likes: 5,
      timestamp: "1d",
    },

  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__post">
          {posts.map((post) => {
            return (
              <Post
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
              />
            );
          })}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default TimeLine;
