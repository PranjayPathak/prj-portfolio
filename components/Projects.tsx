import React from 'react'
import HeadingHighlight from './common/HeadingHighlight'
import ProjectCard from './common/ProjectCard'

type Props = {}

const projectInfo = [
    {
        id: 3,
        name: "Codeiva: Reatime Editor",
        description: [
            // 'Online code editor allows real-time collaboration that Compiles and Executes in 40+ Languages with wide range of themes',
            // 'Every code change is streamed in realtime, so that any user in the room can respond instantly.',
            'Online IDE with real-time collaboration and integrated JudgeO API for compilation.',
            'Used sockets to connect all the code editors and stream every code change in real-time.',
            'Having IntelliSense support for 40+ languages and 50+ themes.'
        ],
        github: "https://github.com/PranjayPathak/realtime-editor",
        url: "https://codeiva.up.railway.app/",
        image: [
            "proj3-a.png",
            "proj3-b.png",
            "proj3-c.png",
        ],
        technologies: ['React.js', 'Socket.io', 'Node.js', 'SCSS']
    }, {
        id: 2,
        name: "Pranjay.tech",
        description: [
            'The portfolio page you are currently on is developed with a theme in mind but designed on the way as it progressed.',
            // 'The page is completely responsive and it is powered by Next.js and SCSS',
            'Please feel free to connect over any suggestion, bug report or any doubt regarding the project'

        ],
        github: "https://github.com/PranjayPathak/prj-portfolio",
        url: "http://pranjay.in",
        image: [
            "proj2-c.png",
            "proj2-b.png",
            "proj2-a.png",
        ],
        technologies: ['Next.js', 'TypeScript', 'SCSS', 'Framer Motion']
    },

    {
        id: 1,
        name: "Sudoku Game & Solver",
        description: [
            'Sudoku web application/game developed with its solution visualizer implemented using backtracking algorithm.',
            "The game is fully responsive and can be played on any device that supports a browser.",

        ],
        github: "https://github.com/PranjayPathak/SUDOKUprj",
        url: "https://sudoku-prj.up.railway.app/",
        image: [
            "proj1-c.png",
            "proj1-a.png",
            "proj1-b.png",
        ],
        technologies: ['Node.js', ' Express.js', 'EJS', 'CSS', 'jQuery']
    },
]

function Projects({ }: Props) {
    return (
        <div className='projects container'>
            <h1 className='headline-1'>Fun <HeadingHighlight>Projects</HeadingHighlight></h1>
            <ul className="projects-wrapper">
                {
                    projectInfo.map((project) => {
                        return <li className='project-card' key={project.id}><ProjectCard project={project} /></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Projects