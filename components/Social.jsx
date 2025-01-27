import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/rizqullahy" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/rafly-rizqullah-yusuf" },
  { icon: <FaInstagram />, path: "https://instagram.com/rfly_rzqllh" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
