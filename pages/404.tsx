import React from 'react'
import Link from 'next/link';
import Cursor from '../components/common/CustomCursor';
type Props = {}

function error404({ }: Props) {
    return (
        <div className="error">
            <Cursor />
            <span className='error__subtitle label-2'>
                Thanks. You just broke it all !
            </span>
            <h1 className="error__title">
                404
            </h1>
            <Link href="/" >
                <span className="error__btn label-3">get me out of here</span>
            </Link>
        </div>

    )
}

export default error404;