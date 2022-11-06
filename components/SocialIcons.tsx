import Image from "next/image";
import React from "react";
// import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
type Props = {};

function SocialIcons({}: Props) {
  const iconList = [
    {
      id: 1,
      label: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/pranjaypathak/",
    },
    {
      id: 2,
      label: "Github",
      icon: <FaGithubSquare />,
      link: "https://github.com/PranjayPathak",
    },
    {
      id: 3,
      label: "Instagram",
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/pranjay_pathak/?hl=en",
    },
  ];

  return (
    <IconContext.Provider value={{ className: "social-icons__icon" }}>
      <div className="social-icons">
        {iconList.map((item) => {
          return (
            <a key={item.id} target="_blank" rel="noopener noreferrer" href={item.link}>
              <motion.div
              
              initial={{ x: -100, y: 100, scale: 0.8 }}
              animate={{ x: 0, y: 0, scale: 1 }}
              transition={{ delay: item.id / 10, type:"tween" }}
            >
              {item.icon}
            </motion.div>
            </a>
          );
        })}

        {/* <motion.div>
          <FaGithubSquare />
        </motion.div>
        <motion.div>
          <FaInstagramSquare />
        </motion.div> */}
      </div>
    </IconContext.Provider>
  );
}

export default SocialIcons;
