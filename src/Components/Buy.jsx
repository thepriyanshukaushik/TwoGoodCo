import React, { useState } from "react";


const Buy = () => {

    
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    
    const showSecondBlock = () => {
        setIsVisible(true);
        
    };
    const showSecondBlock2 = () => {
        setIsVisible2(true);
        
    };
    const showSecondBlock3 = () => {
        setIsVisible3(true);
        
    };
    
    const hideSecondBlock = () => {
        setIsVisible(false);
    }
    const hideSecondBlock2 = () => {
        setIsVisible2(false);
    }
    const hideSecondBlock3 = () => {
        setIsVisible3(false);
    }


    
 
    
    return (
        <div className="buy">
            <div className="uppersection">
                <div>
                    <span>Buy good</span>
                    <span>Do Good</span>
                </div>
                <hr />
            </div>

            <div  className="products">
                <div  className="item item1">
                    <div className="indsideblock" >
                        <div
                            data-scroll data-scroll-speed = "3"
                            onMouseOver={showSecondBlock}
                            onMouseOut={hideSecondBlock}
                            className="firstblock fb1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={"8px"}
                                height={"8px"}
                                fill="#000"
                            >
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                            </svg>
                            <span>Shop</span>
                            <span>Gifts for good</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={"15px"}
                                height={"15px"}
                                fill="#000"
                            >
                                <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                            </svg>
                        </div>
                        <div data-scroll data-scroll-speed = "2" className="secondblock sb1"
                        style={{ opacity: isVisible ? 1 : 0 }}>
                            <div className="firstpart">
                                <img
                                    src="https://cdn.sanity.io/images/w8f1ak3c/production/ee658cdd0e3a23d7c6ec86001a9e098934c1109e-5000x5000.png/66.png?w=320&h=320&auto=format"
                                    alt=""
                                />
                                <p>The inside scoop good feels cracker box</p>
                            </div>
                            <div className="secondpart">
                                <img
                                    src="https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=640&h=640&auto=format"
                                    alt=""
                                />
                                <p>Strawberry gum leaf, coriander, basil+Mint candle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="item item2">
                    <div className="indsideblock">
                        <div
                            data-scroll data-scroll-speed = "3"
                            onMouseOver={showSecondBlock2}
                            onMouseOut={hideSecondBlock2}
                            className="firstblock fb2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={"8px"}
                                height={"8px"}
                                fill="#000"
                            >
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                            </svg>
                            <span>Shop</span>
                            <span>Alemais</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={"15px"}
                                height={"15px"}
                                fill="#000"
                            >
                                <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                            </svg>
                        </div>
                        <div data-scroll data-scroll-speed = "2" className="secondblock sb2" 
                        style={{ opacity: isVisible2 ? 1 : 0 }}
                        >
                            <div className="firstpart">
                                <img
                                    src="https://cdn.sanity.io/images/w8f1ak3c/production/4bb75d35e0a1dd486766939fc3a4971960327b08-5000x5000.png/3.png?w=1024&h=1024&auto=format"
                                    alt=""
                                />
                                <p>Alemais cook in colour apron</p>
                            </div>
                            <div className="secondpart">
                                <img
                                    src="https://cdn.sanity.io/images/w8f1ak3c/production/2285a9a86490345f28eff52adb8526b22c399553-5000x5000.png/6.png?w=320&h=320&auto=format"
                                    alt=""
                                />
                                <p>alemais food is love lunch set</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item item3">
                    <div className="indsideblock">
                        <div

                        data-scroll data-scroll-speed = "3"
                            onMouseOver={showSecondBlock3}
                            onMouseOut={hideSecondBlock3}
                            className="firstblock fb3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={"8px"}
                                height={"8px"}
                                fill="#000"
                            >
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                            </svg>
                            <span>Shop</span>
                            <span>Soaps for hope</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={"15px"}
                                height={"15px"}
                                fill="#000"
                            >
                                <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                            </svg>
                        </div>
                        <div
                        data-scroll data-scroll-speed = "2"
                            className="secondblock sb3"
                            style={{ opacity: isVisible3 ? 1 : 0 }}
                        >
                            <div className="firstpart">
                                <img
                                    src="https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format"
                                    alt=""
                                />
                                <p>Cleanse and nourish handwash</p>
                            </div>
                            <div className="secondpart">
                                <img
                                    src="https://cdn.sanity.io/images/w8f1ak3c/production/a8322c8a7b51e0ad54947a730aabb3f1c249c2a3-1408x1408.png/Cleanse%20&%20Nourish%20Body%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format"
                                    alt=""
                                />
                                <p>Cleanse and nourish bodywash</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;
