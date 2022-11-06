import React from "react";
import Image from "next/image";
import CornerButton from "./common/CornerButton";
import HeadingHighlight from "./common/HeadingHighlight";

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
              Hi I am <span className="highlight">Pranjay Pathak</span> , a 21
              year old <span className="highlight">web developer</span> from
              India. I am a Software Engineer graduated in 2022, currently looking for an awesome
              team and workplace.
              <br />
              Do have a look at my projects, skills or just connect with me on
              LinkedIn. I am always excited to do business with like minded
              people.
            </p>
            <CornerButton>Get My Resume</CornerButton>
          </div>
          <div className="about__content__image-wrapper">
            <Image className="profile-img" src="/images/prj4.jpeg" alt="pranjay" layout="fill"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
