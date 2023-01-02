import Image from 'next/image'
import React from 'react'
import HeadingHighlight from './common/HeadingHighlight'

type Props = {}

function Experience({ }: Props) {
    // Staking improved performance from old wallet to new staking platform
    // Removed bugs
    // improved overall ux
    // old-12s  -> s1.05s

    //other application - new wallet integrations
    //bug fixes and API integrations

    const exp = [
        {
            id: 2,
            position: 'Frontend Intern',
            company: 'Polygon',
            logo: 'polygon.svg',
            logoColor: '#7B3FE4',
            dates: 'March 2022 - Aug. 2022',
            work: [
                <>Developed the new <a href='https://staking.polygon.technology/' target="_blank" rel="noopener noreferrer">Staking UI</a> platform used by the validator nodes and delegators to stake MATIC on the Matic network.</>,
                <>Optimized the initial rendering time of the Staking UI platform from <strong>9.5s to 1.05s (89% reduction)</strong> using Vue, Vuex and web3.js.</>,
                <>Refactored <strong>Gas-swap</strong> and <strong>Token-swap</strong> in <a href='https://wallet.polygon.technology/' target="_blank" rel="noopener noreferrer">Wallet Suite v3</a>, also improved the decimal-UX of the dAaps</>,
                <>Developed the <strong>login flow</strong> and added <strong>multi-wallet support</strong> in the Burn UI platform using Web3Modal and Vuex</>],
            workedWith: ['Vue.js', 'Vuex', 'Web3.js', 'TypeScript', 'SCSS']
        }
        ,
        {
            id: 1,
            position: 'Frontend Intern',
            company: 'Credochain',
            logo: 'credochain.png',
            logoColor: '#fff',//'#001061',
            dates: 'July 2021 - Feb. 2022',
            work: [
                <>Built and shipped the <strong>product landing page</strong> for the <a href='https://pemant.in/' target="_blank" rel="noopener noreferrer">PEMANT Application</a>, a digital credit line platform for MSMEs.</>,
                <>Worked on the <strong>admin dashboard</strong> for the underwriter team using React, Redux and React-Bootstrap.</>,
                <>Enhanced the <strong>SEO and responsiveness</strong> of the website in conjunction with the design and digital marketing team.</>
            ],
            // work: [<>Developed an optimized <strong>Product Landing Page</strong> for their <a href='https://pemant.in/' target="_blank" rel="noopener noreferrer">PEMANT-Application</a>.</>, <>Worked with the digital marketing team & designers to improve the website SEO.</>, <>Also assisted in develpment of <strong>Underwrite Dashboard</strong> panels in improving the UX and flow of the dashboards.</>],
            workedWith: ['React.js', 'Redux', 'JavaScript', 'SCSS']
        }
    ]
    return (
        <div className='workexp container'>
            <h1 className='headline-1'>Work <HeadingHighlight>Experience</HeadingHighlight></h1>
            <ul className="timeline">
                {
                    exp.map((exp) => {
                        return (
                            <li key={exp.id} className="event" data-date={exp.dates}>
                                <div className='heading headline-3'>

                                    <span className='position'>{exp.position}</span>

                                    <div className='company' style={{ color: exp.logoColor }}>
                                        <span className='at'>
                                            {/* &#64; */}
                                            |
                                        </span>
                                        <span className='company__logo-container'><Image src={`/images/${exp.logo}`} height={39} width={52} alt='logo' /></span>
                                        <span className='company__name'>{exp.company}</span>
                                    </div>
                                </div>
                                <ul className='event__list '>
                                    {
                                        exp.work.map((point, i) => {
                                            return <li className='event__list__item para' key={i}>{point}</li>
                                        })
                                    }
                                    <li className='point event__list__item para-1 '>
                                        <div className='technologies'>
                                            {
                                                exp.workedWith.map((tech, i) => {
                                                    return <div key={i} className='tech'>{tech}</div>;
                                                })
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Experience