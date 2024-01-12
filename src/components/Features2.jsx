import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Features2 = () => {
    const ScrollToView = ({ children, offset = 0 }) => {
        const [isVisible, setIsVisible] = useState(false);

        const props = useSpring({
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : `translateY(${offset}px)`,
        });

        const handleScroll = () => {
            setIsVisible(true);
        };

        // Attach scroll event listener
        React.useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return <animated.div style={props}>{children}</animated.div>;
    };
    return (
        <div className='background-img'>
            <ScrollToView offset={200}>
                <div className="why-heading max-w-2xl mx-auto mb-10 text-center ">
                    <h2 className="text-4xl font-bold lg:text-5xl">Why You Choose Us</h2>
                </div>
                <div className="ag-format-container ">
                    <div className="ag-courses_box">
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg" />
                                <div className="ag-courses-item_title">
                                    Powerful Hosting Infrastructure.
                                </div>
                                <div className="ag-courses-item_date-box">
                                    Start:
                                    <span className="ag-courses-item_date">
                                        04.11.2022
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg" />
                                <div className="ag-courses-item_title">
                                    Data Centers with 24/7.asasd
                                </div>
                                <div className="ag-courses-item_date-box">
                                    Start:
                                    <span className="ag-courses-item_date">
                                        04.11.2022
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg" />
                                <div className="ag-courses-item_title">
                                    Our Easy-to-Use Controlasdads.
                                </div>
                                <div className="ag-courses-item_date-box">
                                    Start :
                                    <span className="ag-courses-item_date">
                                        04.11.2022
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg" />
                                <div className="ag-courses-item_title">
                                    99.9% Uptime Guarantee.
                                </div>
                                <div className="ag-courses-item_date-box">
                                    Start :
                                    <span className="ag-courses-item_date">
                                        04.11.2022
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg" />
                                <div className="ag-courses-item_title">
                                    24/7 Customer Support.
                                </div>
                                <div className="ag-courses-item_date-box">
                                    Start :
                                    <span className="ag-courses-item_date">
                                        30.11.2022
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg" />
                                <div className="ag-courses-item_title">
                                    Our Scalable Hosting asdasd.
                                </div>
                                <div className="ag-courses-item_date-box">
                                    Start :
                                    <span className="ag-courses-item_date">
                                        30.11.2022
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollToView>
        </div>
    )
}

export default Features2