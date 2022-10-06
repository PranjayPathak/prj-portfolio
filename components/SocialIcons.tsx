import Image from 'next/image';
import React from 'react'
// import { SocialIcon } from 'react-social-icons';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
type Props = {}

function SocialIcons({ }: Props) {

    // const links = [
    //     {
    //         id:1,
    //         label:'Linkedin',
    //         icon: BsLinkedin,
    //         link: "https://www.linkedin.com/in/pranjaypathak/"
    //     },
    //     {
    //         id:2,
    //         label:'Github',
    //         icon: BsGithub,
    //         link: "https://github.com/PranjayPathak"
    //     },
    //     {
    //         id:3,
    //         label:'Instagram',
    //         icon: BsInstagram,
    //         link: "https://www.instagram.com/pranjay_pathak/?hl=en"
    //     },
    // ]
    return (
        <div className='social-icons'>
            <div className='social-icons__icon' ><FaLinkedin /></div>
            <div className='social-icons__icon'><FaGithubSquare /></div>
            <div className='social-icons__icon'><FaInstagramSquare /></div>
        </div>
    )
}

export default SocialIcons