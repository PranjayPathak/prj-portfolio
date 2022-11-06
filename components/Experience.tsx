import Image from 'next/image'
import React from 'react'
import HeadingHighlight from './common/HeadingHighlight'

type Props = {}

function Experience({ }: Props) {
    //     Polygon Wallet Suite v3: 
    // - Created Token Assets Page on Wallet v3 end-to-end with Vue3, TypeScript and Vuex. Used by 2.5M people monthly to manage their token assets.
    // - Developed complete user login with web3Modal to token transfer flow. Currently supporting 5+ wallets.
    // - Refactored Widget Dashboard and entire App Navigation of Wallet v3, reduced initial page load time from 12s (v2) to 2.5s (v3) (70% reduction).

    // Polygon Quest: 
    // - Developed Polygon Quest end-to-end for onboarding new users onto the web3 space in the most seamless user experience possible.
    // - Created twitter flows with TwitterAPI and VueX state management.

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
            dates: 'March 2022 - Aug 2022', 
            work: [<>Developed the new <a href='https://staking.polygon.technology/' target="_blank" rel="noopener noreferrer">Staking UI</a> used by all the Validators and Delegators on Matic Network. (<strong>Reducing the initial page load time from 12s to 1.05s, ~90% reduction</strong>).</>, <>Refactored the Staking UI and <a href='https://wallet.polygon.technology/'> Wallet v3</a> for handling assets and amount with higher accuracy and improved the overall user experience</>
            ,<>Refactored the <strong>Gas-swap</strong> and <strong>Token-swap</strong>in the new Wallet v3 and developed the login flow for Burn UI by integrating multiple wallets.</>],
            workedWith: ['Vue.js', 'Vuex', 'Web3.js', 'Typescript', 'SCSS']
        }
        ,
        {
            id: 1,
            position: 'Frontend Intern',
            company: 'Credochain',
            logo: 'credochain.png',
            logoColor: '#fff',//'#001061',
            dates: 'July 2021 - Feb 2022',
            work: [<>Developed an optimized <strong>Product Landing Page</strong> for their <a href='https://pemant.in/' target="_blank" rel="noopener noreferrer">PEMANT-Application</a>.</>, <>Worked with the digital marketing team & designers to improve the website SEO.</>, <>Also assisted to the develpment of <strong>Underwrite Dashboard</strong> panels in improving the UX and flow of the dashboards.</>],
            workedWith: ['React.js', 'Redux', 'Javascript', 'SCSS']
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
                                        <span className='company__logo-container'><Image src={`/images/${exp.logo}`} height={39} width={52} alt='logo'/></span>
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