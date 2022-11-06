import Image from 'next/image'
import React from 'react'
// import Skills from '../Skills'

type Props = { skill: { name: String } }

function TechCard({ skill }: Props) {
    return (<
        div className="wrapper para para-2">
        <div className="tiles-card root">
            <div className="tiles-overlay">

            </div>
            <div className="tiles-circle">
                <Image className='tiles-img' alt="jj" src={`/images/skills/${skill.name.toLocaleLowerCase()}.svg`} height="65" width="65" />
                <p>
                    {skill.name}
                </p>
            </div>
        </div>
    </div>
    )
}

export default TechCard