import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  // FaPinterestP,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/GodwayneAyo" },
  { Social: <FaGithub />, link: "https://github.com/ayowayne123" },
  { Social: <FaTwitter />, link: "https://www.linkedin.com/in/ayomide-wayne/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/ayomide_wayne" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/Ayomide_wayne" },
  // { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
