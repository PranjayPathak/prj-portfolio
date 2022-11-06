import React, { useCallback, useEffect, useRef } from "react";
import HeadingHighlight from "./common/HeadingHighlight";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

function HeroSection({ }: Props) {

  // const notFocusedRef = useRef(null);

  const selectText: any = useRef(null);

  const [typewriterText] = useTypewriter({
    words: ["<AWebDeveloper />","Who-loves-coffee.js", "<AndLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  useEffect(() => {
    if (selectText.current) {
      selectText.current.select();
    }
  }, []);

  // let selectedStyle: any = useRef({
  //   backgroundColor: '#5B4AF4',
  //   color: '#202020'
  // })

  // const handleClickOutside = useCallback((event: any) => {
  //   if (notFocusedRef.current && !notFocusedRef.current.contains(event.target)) {
  //     onClickOutside && onClickOutside();
  //   }
  // }, []);



  // const onClickOutside = useCallback(() => {
  //   console.log('clicked outside');
  //   selectedStyle.current = {};
  //   document.removeEventListener('click', handleClickOutside, true);
  // }, []);

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-section__text-wrapper">
          {/* <h3 id="highlightl" className="label-1">Hey, my name is</h3> */}
          <input readOnly ref={selectText} type='text' id="selected" className="selected-text label-1" value={'Hey, my name is'} />
          <h1 className="headline-1">
            <HeadingHighlight>Pranjay Pathak</HeadingHighlight>
          </h1>
          <h3 className="typewriter label-1">
            {/* <input ref={selectText} type='text' id="selected" className="selected-text label-1" value={'a web developer based in india'} /> */}
            {/* <span style={selectedStyle.current} ref={notFocusedRef}>{typewriterText}</span> */}

            {typewriterText}
            <Cursor 
            cursorStyle="_" 
            cursorColor="#5600E8"//5B4AF4" 
            />
          </h3>
        </div>

        <div className="hero-section__animation-wrapper">
          {/* <div className="containesr">
            <div className="container__item landing-page-container"> */}
          {/* <div className="content__wrapper"> */}

          {/* 1st Ellipse */}
          <div className="ellipses-container">
            <div className="ellipses ellipses__outer--thin">
              <div className="ellipses ellipses__orbit"></div>
            </div>
            <div className="ellipses ellipses__outer--thick"></div>

            {/* 2nd Ellipse */}
            {/* <div className="ellipses ellipses__outer--thin">
              <div className="ellipses ellipses__orbit"></div>
            </div>
            <div className="ellipses ellipses__outer--thick"></div> */}
          </div>

          {/* </div> */}
          {/* </div>
          </div> */}

          {/* <div className="diagonals-wrapper"> */}
          <div className="diagonal diagonal-1"></div>
          <div className="diagonal diagonal-2"></div>
          <div className="diagonal diagonal-3"></div>
          <div className="diagonal diagonal-4"></div>
          <div className="diagonal diagonal-5"></div>
          <div className="diagonal diagonal-6"></div>
          <div className="diagonal diagonal-7"></div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
