import React from 'react'
import constant from "../constants"

type Props = {}

function StickyMail({ }: Props) {
    return (
        <div className="sticky-mail">
            <h3 className="label-3 mail">{constant.MAIL_ID}</h3>
        </div>
    )
}

export default StickyMail