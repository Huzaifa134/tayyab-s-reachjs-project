import React, { useState, useEffect } from 'react'
import { useSpring, animated } from "react-spring";

const FancyTestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current slide index, or go back to the first slide if it's the last one
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 3000); // Change slide every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array means this effect runs once when the component mounts
  const [isVisible, setIsVisible] = React.useState(false);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 280, friction: 20 },
  });

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    setIsVisible(scrollY > 30); // Adjust the scroll threshold as needed
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <div>

      <animated.div style={springProps}>
        <div className="testimonials-section img-testimonials">
          {Array.from({ length: 5 }, (_, index) => (
            <input
              key={index}
              type="radio"
              name="slider"
              title={`slide${index + 1}`}
              className="slider__nav hidden"
              checked={index === currentSlide}
              readOnly
            />
          ))}
          <div className="slider__inner">
            <div className="slider__contents">
              <img width={'100px'} src='https://bottomlinebenefits.org/wp-content/uploads/2016/03/testimonial-circle-.png'></img>
              <p className="slider__txt ">Our web hosting experience has been phenomenal. Easy to order, we get shipments quick, and my rep solves tough problems the right way.</p>
              <h2 className="slider__caption">Rhonda | NylonCraft</h2>
            </div>
            <div className="slider__contents">
              <img width={'100px'} src='https://pianistinnj.com/wp-content/uploads/2020/03/unnamed-1.png'></img>

              <p className="slider__txt">Choosing your web hosting services was one of the best decisions we made. You all bend over backwards to get it done.</p>
              <h2 className="slider__caption">Jared | Rexam</h2>
            </div>
            <div className="slider__contents">
              <img width={'100px'} src='https://pianistinnj.com/wp-content/uploads/2020/03/Ian-Russell-round.png'></img>

              <p className="slider__txt">Our website's performance has been outstanding. It's the long-term relationship we have with Proheat that keeps me calling you guys.</p>
              <h2 className="slider__caption">Chris | C&M Fine Pack</h2>
            </div>
            <div className="slider__contents">
              <img width={'100px'} src='https://www.sutherlandglobal.bg/wp-content/uploads/2019/05/Testimonials-circle-photos_Vladimir.png'></img>

              <p className="slider__txt">Thank you for the reliable web hosting services. You answer my questions, always take care of problems, and I never have a hassle.</p>
              <h2 className="slider__caption">Rex | LNP Engineering Plastics</h2>
            </div>
            <div className="slider__contents">
              <img width={'100px'} src='https://pianistinnj.com/wp-content/uploads/2020/03/unnamed-1.png'></img>

              <p className="slider__txt">Proheat's web hosting services have exceeded our expectations. Your staff is all so friendly, and everybody goes above and beyond.</p>
              <h2 className="slider__caption">Darlene | Russel Stover</h2>
            </div>
          </div>
        </div>
      </animated.div >
    </div>
  )
}

export default FancyTestimonialsSlider