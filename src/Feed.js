import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

// post info
import Profile from "./img/profile.png";
import Post1 from "./img/post-1.jpg";
import Post2 from "./img/post-2.jpg";
import Post3 from "./img/post-3.jpg";
import Post4 from "./img/post-4.jpg";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={Profile}
        image={Post1}
        username="Md Asikuzzaman"
        timestamp={new Date().toUTCString()}
        message="Awesome nature : )"
      />
      <Post
        profilePic={Profile}
        image={Post2}
        username="Md Asikuzzaman"
        timestamp={new Date().toUTCString()}
        message="Beautyful car..."
      />
      <Post
        profilePic={Profile}
        image={Post3}
        username="Md Asikuzzaman"
        timestamp={new Date().toUTCString()}
        message="New techonology is coming...."
      />
      <Post
        profilePic={Profile}
        image={Post4}
        username="Md Asikuzzaman"
        timestamp={new Date().toUTCString()}
        message="Orange is so good for health"
      />
    </div>
  );
};

export default Feed;
