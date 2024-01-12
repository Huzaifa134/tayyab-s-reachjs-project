import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


import pleskimg from "../assets/plesk-img.png";
import plesksecond from "../assets/plesk-second.jpg";
// import ServeurPlesk from "../assets/Serveur-Plesk.webp";
import plesksecond1 from "../assets/plesk-second1.jpg";



const PleskHosting = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const initialFeaturesCount = 5;
  const pricingRef = useRef(null);

  const fadeInSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(100px)' },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (pricingRef.current) {
        const pricingTop = pricingRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (pricingTop < windowHeight * 0.75) {
          fadeInSpring.opacity.start(1);
          fadeInSpring.transform.start('translateY(0)');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fadeInSpring]);


  // review code

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
  
      <div className="container-fluid hosting-banner">

        <div className="container banner-child">
          <div className="row xl:ml-20 md:ml-10 lg:ml-16">
            <div className="col-lg-6 hosting-left flex flex-col justify-center">
              <div className="lg:mt-10 lg:pr-20 hosting-left-child">
              <h1 className='title-new'>Plesk Hosting</h1>
                <p className='banner-p text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                {/* <div className="banner-btn">
                                    <button className='btn btn-primary trye my-4'>Get Start</button>
                                </div> */}
              </div>
            </div>
            <div className="col-lg-6 hosting-right flex flex-col justify-center">
              <img className='left-text mx-auto' width="450" src={pleskimg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section class="bg-light background-img">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <img src={plesksecond1} alt="Plesk Hosting" class="plesk-intro-img rounded shadow bg-light" />
            </div>
            <div class="col-lg-6">
              <h2 class="display-4 fw-bold mb-4 py-2 text-uppercase font-bold fsec-heading">Plesk Hosting Introction</h2>
              <p class="lead">Welcome to Plesk hosting - a powerful and user-friendly platform designed to simplify server management and hosting experience. Whether you're a developer, agency, or business, Plesk offers an intuitive control panel, robust security measures, and seamless application deployment.</p>
              {/* <a href="#" class="btn btn-primary btn-lg my-3">Get Started</a> */}
              <div className="banner-btn">
                <button className=' bg-indigo-500 trye rounded font-bold get-start-btn my-4'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>


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



<div className="bg-white-img">
      {/* Security and Backup Solutions */}

      <section class="py-5">
        <div class="container fsec-container">
          <h2 class="text-center  py-5 text-uppercase font-bold fsec-heading">Security and Backup Solutions</h2>
          {/* <h1 class="sm:text-3xl text-2xl font-medium title-font text-center faq-heading">Security and Backup Solutions</h1> */}
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card h-100 border-0 rounded shadow-sm">
                <div class="card-body text-center">
                  <i class="fas fa-shield-alt fa-4x mision-fision-icons mb-4"></i>
                  <h3 class="card-title text-gray-600 fs-5 fw-bold mb-3">Robust Security Measures</h3>
                  <p class="card-text">Plesk provides advanced security tools including SSL certificates, firewalls, and malware scanning to protect your website from threats.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 border-0 rounded shadow-sm">
                <div class="card-body text-center">
                  <i class="fas fa-database fa-4x mision-fision-icons mb-4"></i>
                  <h3 class="card-title text-gray-600 fs-5 fw-bold mb-3">Automated Backup Solutions</h3>
                  <p class="card-text">With Plesk hosting, ensure the safety of your data with automated backup options, allowing easy recovery in case of data loss.</p>
                </div>
              </div>
            </div>
            {/* <!-- Add more columns for additional solutions if needed --> */}
          </div>
        </div>
      </section>


      {/* feature section */}
      <section class=" py-10 fsec-img">
        <div class="container fsec-container">
          <h2 class="text-center py-5 text-uppercase font-bold fsec-heading">Feature Highlights</h2>
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card h-100 border-0 shadow">
                <div class="card-body text-center">
                  <i class="fas fa-server fa-4x mb-3 mision-fision-icons"></i>
                  <h3 class="card-title text-gray-600 font-bold">Easy Server Management</h3>
                  <p class="card-text">Effortlessly manage your servers with an intuitive control panel.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card h-100 border-0 shadow">
                <div class="card-body text-center">
                  <i class="fas fa-shield-alt fa-4x mb-3 mision-fision-icons"></i>
                  <h3 class="card-title text-gray-600 font-bold">Robust Security Tools</h3>
                  <p class="card-text">Advanced security measures to protect your website and data.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card h-100 border-0 shadow">
                <div class="card-body text-center">
                  <i class="fas fa-globe fa-4x mb-3 mision-fision-icons"></i>
                  <h3 class="card-title text-gray-600 font-bold">Application Deployment</h3>
                  <p class="card-text">Seamlessly deploy various applications and frameworks.</p>
                </div>
              </div>
            </div>
            {/* <!-- Add more columns as needed --> */}
          </div>
        </div>
      </section>
      </div>
    </div>

  )
}

export default PleskHosting