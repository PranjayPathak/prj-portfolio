import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

type Props = {}

function Cursor({ }: Props) {
    return <AnimatedCursor
        innerSize={9.5}
        outerSize={47}
        innerScale={0.7}
        outerScale={1.4}
        outerAlpha={0}

        innerStyle={{
            backgroundColor: 'var(--blue-shade)',
            boxShadow:'0 0 2px rgba(0, 0, 0, 0.8)'
        }}

        outerStyle={{
            border: '2px solid var(--blue-shade)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            // boxShadow:'0 0 8px rgba(0, 0, 0, 0.2)'
        }} />
}

export default Cursor
