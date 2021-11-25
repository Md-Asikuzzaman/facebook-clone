import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import Profile from "./img/profile.png";

// custom profile image
import profile1 from "./img/testimonials-1.jpg";
import profile2 from "./img/testimonials-2.jpg";
import profile3 from "./img/testimonials-3.jpg";
import profile5 from "./img/testimonials-5.jpg";

// custom background image
import bg1 from "./img/portfolio-1.jpg";
import bg2 from "./img/portfolio-2.jpg";
import bg3 from "./img/portfolio-3.jpg";
import bg4 from "./img/portfolio-4.jpg";
import bg5 from "./img/portfolio-5.jpg";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story image={bg4} profileSrc={Profile} title="Md Asikuzzaman" />
      <Story image={bg2} profileSrc={profile1} title="Jone Doe" />
      <Story image={bg3} profileSrc={profile2} title="Wr mime" />
      <Story image={bg1} profileSrc={profile3} title="Christina" />
      <Story image={bg5} profileSrc={profile5} title="Mike Dane" />
    </div>
  );
};

export default StoryReel;
