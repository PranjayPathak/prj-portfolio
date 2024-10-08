import React from "react";
import Image from "next/image";
import CornerButton from "./common/CornerButton";
import HeadingHighlight from "./common/HeadingHighlight";
import constant from "../constants"

type Props = {};

function AboutSection({ }: Props) {
  return (
    <div className="about">
      {/* Background shades */}
      {/* <div className="color-layout layout-purple"></div>
      <div className="color-layout layout-blue"></div> */}

      <div className="about__wrapper container">
        <h1 className="about__heading headline-1">
          About <HeadingHighlight>Me</HeadingHighlight>
        </h1>
        <div className="about__content">
          <div>
            <p className="about__content__text para para-1">
              Hi 👋, my name is <strong>Pranjay Pathak</strong>. I am a <strong>Software Engineer</strong> graduate (B.Tech - 2022) with a passion for developing well-engineered, robust, and pixel-perfect products on the web.
              <br />
              My goal 🎯 with every project is to provide the best functionality and user experience with a maintainable codebase in the given set of constraints.
              <br />
              I&#39;ve had the privilege of working 👨‍💻 on dApps scaling Ethereum and serving <strong>2.5Million+</strong> users 🚀 every month at <strong>Polygon(Matic Network)</strong>. I was also part of the dev team at <strong>Credochain</strong> solving credit line issues for Indian MSMEs.
          </p>
            <a target="_blank" rel="noopener noreferrer" href={constant.RESUME_LINK}>
              <CornerButton>Get My Resume</CornerButton>
            </a>
          </div>
          <div className="about__content__image-wrapper">
            <Image className="profile-img" src="/images/prj5.jpeg" alt="Smiling professional portrait." layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
