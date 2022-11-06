import React from "react";
// import Link from "next/link";
type Props = {};

function LeftMenu({ }: Props) {
  const items = [
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Experience",
      link: "#experience",
    },
    {
      label: "Skills",
      link: "#skills",
    },
    {
      label: "Projects",
      link: "#projects",
    },
  ];
  return (
    <div className="left-navigation">
      {items.map((item) => {
        return (
          <a href={item.link} className="left-navigation__item" key={item.label}>
            {/* <a href={item.link}> */}
              <div className="bar"></div>
              {/* <Link> */}
              <span className="link-item label-2">
                {item.label}
              </span>
              {/* </Link> */}
            </a>
          // </div>
        );
      })}
    </div>
  );
}

export default LeftMenu;
