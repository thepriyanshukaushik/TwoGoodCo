import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Product = () => {

    const cursorref = useRef();
    const cursorref2 = useRef();

    //Handle the mousemovement 
    useEffect(() => {
        const onMouseMove = (e) => {
            gsap.to([cursorref.current, cursorref2.current] ,{
                   x:e.clientX,
                    y:e.clientY,
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);


    const handleMouseEnter = () => {
        gsap.to([cursorref.current, cursorref2.current] ,{
            scale: 10,
            duration:.2
        })
    }

    const handleMouseLeave = () => {
        gsap.to([cursorref.current, cursorref2.current] ,{
            scale:0,
            duration:.1
        })
    }


    return (
        <div className='Items'>
            <div ref={cursorref} className="cursor"></div>
            <div className="cont1">
                <div className="product"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img className='pimg' src="https://cdn.sanity.io/images/w8f1ak3c/production/4bb75d35e0a1dd486766939fc3a4971960327b08-5000x5000.png/3.png?w=1024&h=1024&auto=format" alt="" />
                    <div className='pinfo'>
                        <div className="in">Alemais cook in colour apron</div>
                        <div className="in">$190</div>

                    </div>
                </div>
                <div className="product"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img className='pimg' src="https://cdn.sanity.io/images/w8f1ak3c/production/03fefcdd1f2726da85cdd70177f6b87bae75b7e9-5000x5000.png/1.png?w=1024&h=1024&auto=format" alt="" />
                    <div className='pinfo'>
                        <div className="in">Alemais cook in colour napkin-pair</div>
                        <div className="in">$50</div>

                    </div>
                </div>
            </div>
            

            <div ref={cursorref2} className="cursor"></div>

            <div className="cont2">
                <div className="product"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img className='pimg' src="https://cdn.sanity.io/images/w8f1ak3c/production/ee658cdd0e3a23d7c6ec86001a9e098934c1109e-5000x5000.png/66.png?w=1024&h=1024&auto=format" alt="" />
                    <div className='pinfo'>

                        <div className="in">The inside scoop good feels cracker box</div>
                        <div className="in">$79</div>
                    </div>

                </div>
                <div className="product"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img className='pimg' src="https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=1024&h=1024&auto=format" alt="" />
                    <div className='pinfo'>
                        <div className="in">Strawberry gum leaf, coriander, Basil + mint candle </div>
                        <div className="in">$79</div>
                    </div>

                </div>
            </div>

            <div className="productfooter">
                <div className='pf1'>
                    <div className="in">Words of goodness</div>
                    <div className="in">Messages of love and support</div>
                </div>
                <hr />
            </div>

        </div>
    )
}

export default Product
