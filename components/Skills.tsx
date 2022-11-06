import React from 'react'
import HeadingHighlight from './common/HeadingHighlight'
import TechCard from './common/TechCard'

type Props = {}

const skills: any = [
    {
        name: "JavaScript",
        id: 1
    },
    {
        name: "ReactJs", id: 2
    },
    {
        name: "VueJs", id: 3
    },
    {
        name: "Vuex", id: 4
    },
    {
        name: "Redux", id: 5
    },
    {
        name: "NodeJs", id: 11
    },
    {
        name: "TypeScript", id: 6
    },
    {
        name: "NextJs", id: 12
    },
    {
        name: "Git", id: 7
    },
    {
        name: "SASS", id: 8
    },
    {
        name: "HTML", id: 9
    },
    {
        name: "CSS", id: 10
    },
]

function Skills({ }: Props) {
    return (
        <div className='skills container'>
            <h1 className='headline-1'>My <HeadingHighlight>Skills</HeadingHighlight></h1>
            <div className='skills__wrapper'>
                <div className='text-container para para-1'>
                    <p>
                    The following skills are part of my toolbox. One of the things I love is learning and exploring new technologies, but with the pace at which we are getting new technologies and frameworks, these are the ones I&#39;ve been working with recently. </p>
                </div>
                <div className='skills-container'>{
                    skills.map((skill: { name: String, id: any }) => {

                        return <TechCard key={skill.id} skill={skill} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills