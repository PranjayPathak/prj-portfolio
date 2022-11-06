import React from 'react'

type Props = {
    children: String
}

function CornerButton({ children }: Props) {
    return (
        <button className="corner-button label-2">{children}</button>
    )
}

export default CornerButton