import React from 'react'
// import hostright from "../assets/host-right-img.png";
import hostright from "../assets/host-right-img2.png";
import FAQ from '../components/FAQ'
import ThreeColTestimonials from '../components/FancyTestimonialsSlider'
import migrationimg from "../assets/migration-img.jpg";
import migrationbgimg from "../assets/migration-bg-img.jpg";
import perfomanceimg from "../assets/perfomance-img.webp";


const ReHosting = () => {
    return (
        <div>

            <div className="container-fluid hosting-banner">

                <div className="container banner-child">
                    <div className="row xl:ml-20 md:ml-10 lg:ml-16">
                        <div className="col-lg-6 hosting-left flex flex-col justify-center">
                            <div className="lg:mt-10 lg:pr-20 hosting-left-child">
                            <h1 className='title-new'>Re-Hosting</h1>
                                <p className='banner-p text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                                <div className="banner-btn">
                                <button className=' bg-indigo-500 trye rounded font-bold get-start-btn my-4'>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hosting-right flex flex-col justify-center">
                            <img className='left-text mx-auto' width="380" src={hostright} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* -----custome re hosting section-------- */}

            <section class="customized-solutions background-img">
                <div class="container ">
                    <h2 class="text-center py-5 text-uppercase font-bold fsec-heading  perf-head">Tailored Hosting Solutions for Your Needs</h2>
                    <div class="row justify-content-center lg:px-20">
                        <div class="col-md-4 mb-4">
                            <div class="card solution-card py-4">
                                <div class="card-body">
                                    <h3 class="card-title text-gray-600">E-commerce Hosting</h3>
                                    <p class="card-text">Powerful and scalable hosting optimized for online stores, ensuring seamless performance during peak traffic times.</p>
                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card solution-card py-4">
                                <div class="card-body">
                                    <h3 class="card-title text-gray-600">Enterprise-Level Hosting</h3>
                                    <p class="card-text">Enterprise-grade hosting designed for mission-critical applications, offering high availability and top-notch security.</p>
                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card solution-card py-4">
                                <div class="card-body">
                                    <h3 class="card-title text-gray-600">Developer-Friendly Hosting</h3>
                                    <p class="card-text">Tailored solutions for developers, providing the flexibility and tools needed to build, test, and deploy applications with ease.</p>
                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -----Performance and Reliability------ */}

            <section class="lg:py-40 migration-parent">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="display-5 mb-4 text-white">Performance and Reliability</h2>
                            <p class="mb-4">Experience enhanced website performance and unwavering reliability with our re-hosting services. We prioritize speed, uptime, and stability to ensure your online presence operates flawlessly.</p>
                            <ul class="list-unstyled">
                                <li class="d-flex mb-3">
                                    <i class="fas fa-tachometer-alt fa-2x me-3 text-indigo-500"></i>
                                    <div>
                                        <h3 class="fw-bold text-white">Lightning-Fast Speed</h3>
                                        <p>Optimized servers and cutting-edge infrastructure to deliver exceptional website loading speed.</p>
                                    </div>
                                </li>
                                <li class="d-flex mb-3 py-3">
                                    <i class="fas fa-server fa-2x me-3 text-indigo-500"></i>
                                    <div>
                                        <h3 class="fw-bold text-white">99.9% Uptime Guarantee</h3>
                                        <p>Reliable hosting with a guarantee of 99.9% uptime to ensure your website is always accessible.</p>
                                    </div>
                                </li>
                                <li class="d-flex">
                                    <i class="fas fa-shield-alt fa-2x me-3 text-indigo-500"></i>
                                    <div>
                                        <h3 class="fw-bold text-white">Robust Security Measures</h3>
                                        <p>Advanced security protocols and regular monitoring to safeguard your data and website.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            {/* <img src={perfomanceimg} width="600" alt="Performance and Reliability" class="img-fluid rounded shadow" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* -----Migration Services------ */}

            <section class="py-20 bg-light">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            {/* <img src={migrationimg} alt="Migration Services" class="img-fluid rounded shadow" /> */}
                            <img src={migrationimg} width="500" alt="Performance and Reliability" class="img-fluid rounded shadow  mx-auto" />
                        </div>
                        <div class="col-lg-6">
                            <h2 class="display-4 fw-bold fs-1 mb-4" style={{ color: "#16336d" }}>Seamless Migration Services</h2>
                            <p class="lead">Experience a hassle-free migration process with our expert team. We ensure a seamless transition from your current hosting provider to ours, preserving your data integrity and minimizing downtime.</p>
                            <ul class="list-unstyled my-4">
                                <li><i class="fas fa-check text-success me-2 py-2"></i> Automated transfer process</li>
                                <li><i class="fas fa-check text-success me-2 py-2"></i> No disruption to your online presence</li>
                                <li><i class="fas fa-check text-success me-2 py-2"></i> Comprehensive data backup and security measures</li>
                                <li><i class="fas fa-check text-success me-2 py-2"></i> Expert assistance and 24/7 support</li>
                            </ul>
                            <button className=' bg-indigo-500 trye rounded font-bold get-start-btn my-4'>Read More</button>
                        </div>
                    </div>
                </div>
            </section>




            <ThreeColTestimonials />
            <FAQ />

            {/* --- */}
        </div>


    )
}

export default ReHosting