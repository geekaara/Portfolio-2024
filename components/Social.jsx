import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/geekaara" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/aaradhanah/" },
  { icon: <FaTwitter />, path: "https://x.com/aaradhanaha" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/geekaara/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
