import React from 'react'

type Props = {}

function LeftMenu({ }: Props) {
    const items = [
        {
            label: 'About',
            link: '#'
        },
        {
            label: 'Skills',
            link: '#'
        },
        {
            label: 'Experience',
            link: '#'
        },
        {
            label: 'Projects',
            link: '#'
        },
    ]
    return (
        <div className='left-navigation'>
            {
                items.map((item) => {
                    return (
                        <div className='left-navigation__item' key={item.label} >
                            <div className='left-navigation__item__bar'></div>
                            {item.label}
                        </div>
                    )
                })
            }
        </div >
    )
}

export default LeftMenu