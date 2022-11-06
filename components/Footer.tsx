import React from 'react'
import Logo from './common/Logo'
import { IconContext } from "react-icons";
import { BiCoffee } from "react-icons/bi";
import { GiTechnoHeart } from "react-icons/gi";
import { SiNextdotjs } from "react-icons/si";
import { CgFileDocument, CgCodeSlash, CgArrowUpR } from "react-icons/cg";

type Props = {}

function Footer({ }: Props) {
    return (
        <div className='footer container'>
            <div className='footer__wrapper'>
                <div className='footer__content'>
                    <div className='footer__content__logo-container'>
                        <Logo />
                    </div>
                    <div>
                        <h3 className='label-1 thanks-message'>Thanks for visiting!</h3>
                        <div className='footer__credits label-3'>
                            Made with
                            <IconContext.Provider value={{ className: "footer__credits__icon-technoheart" }}>
                                <GiTechnoHeart />
                            </IconContext.Provider> +

                            <IconContext.Provider value={{ className: "footer__credits__icon-coffee" }}>
                                <BiCoffee />
                            </IconContext.Provider>
                            & powered by

                            <IconContext.Provider value={{ className: "footer__credits__icon-nextjs" }}>
                                <SiNextdotjs />
                            </IconContext.Provider>

                        </div>
                    </div>
                    <div className='footer-list label-2'>
                        <IconContext.Provider value={{ className: "li-icon" }}>
                            <ul>
                                <li><a  target="_blank" rel="noopener noreferrer" href='https://github.com/PranjayPathak/prj-portfolio'><CgCodeSlash /> Website repo</a></li>
                                <li><a  target="_blank" rel="noopener noreferrer" href='#'><CgFileDocument /> View resume</a></li>
                                <li><a href='#'><CgArrowUpR /> Back to top</a></li>
                            </ul>
                        </IconContext.Provider>
                    </div>
                </div>
                {/* <div className='footer__credits label-3'>
                    Made with
                    <IconContext.Provider value={{ className: "footer__credits__icon-technoheart" }}>
                        <GiTechnoHeart />
                    </IconContext.Provider> +

                    <IconContext.Provider value={{ className: "footer__credits__icon-coffee" }}>
                        <BiCoffee />
                    </IconContext.Provider>
                    & powered by

                    <IconContext.Provider value={{ className: "footer__credits__icon-nextjs" }}>
                        <SiNextdotjs />
                    </IconContext.Provider>

                </div> */}
            </div>
        </div>
    )
}

export default Footer