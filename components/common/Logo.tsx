import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import LogoImg from '../../public/images/logo.png';
type Props = {}

export default function Logo({ }: Props) {
    return (
        <div className='logo-container'>
            <Link href='/'>
                <Image src={LogoImg} alt='logo' />
            </Link>
        </div>
    )
}