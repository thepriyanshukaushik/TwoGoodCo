import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'


const Head = () => {
    const headcomp1 = useRef();
    const headcomp2 = useRef();
    const headcomp3 = useRef();
    const imageref = useRef();
    useGSAP(()=>{
        var tl = gsap.timeline()
        tl.from(headcomp1.current, {
            y:50,
            opacity:0,
            duration:.4,
            delay:.2,
        })
        tl.from(headcomp2.current, {
            y:50,
            opacity:0,
            duration:.4,
            delay:.2
        })
        tl.from(headcomp3.current, {
            y:50,
            opacity:0,
            duration:.4,
            delay:.2
        })
        tl.from(imageref.current, {
            opacity:0,
            duration:.2,
            scale:1.1
        })
    })

    return (
        <div className='Head'>
            <div className='headcomp'>
                <h1 ref={headcomp1} className='heading'>Change</h1>
                <div className='head2'>
                    <h1 ref={headcomp2} className='heading'>the </h1>
                    <h1 ref={headcomp3} className="heading">course.</h1>
                </div>
            </div>

        
            <img data-scroll data-scroll-speed =".7" ref={imageref} id='headerimg'  src="https://cdn.sanity.io/images/w8f1ak3c/production/b183ed175d0b3aa67ecef72cfb4d146cd5fc9b2e-1500x1000.jpg/Teaser%20-%20A7R00739_DexterKim.jpg?rect=0,93,1500,814&w=1280&h=695&fit=min&auto=format" alt="header.image" />
        </div>
    )
}

export default Head