import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <section className='mp'> 
                <div className="hero-section ">
                    <div className="hero-text">
                        <h1>Hire Experts. <br/>
                            Get Results. <br />
                            Zero Hassle.</h1>
                        <p>Skip the talent search—simply choose a service <br />
                            and Gigbig  handles the rest.</p>
                        <button>Get Start</button>
                    </div>
                    <div className="members-b">
                        <button><i className="fa-solid fa-check"></i>Verified Members</button>
                        <button><i className="fa-solid fa-bars-progress"></i> Project Manager Included</button>
                        <button><i className="fa-brands fa-servicestack"></i> 1500 + Serice</button>
                        <button><i className="fa-solid fa-hand-holding-dollar"></i> Payment Protection</button>
                    </div>
                    <div className="membes-m">
                        <div className="member-card">
                            <div className="item">
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Verified Members</span>
                            </div>

                            <div className="item">
                                <i className="fa-solid fa-briefcase"></i>
                                <span>Project Manager Included</span>
                            </div>

                            <div className="item">
                                <i className="fa-solid fa-lock"></i>
                                <span>1500+ Service</span>
                            </div>

                            <div className="item">
                                <i className="fa-solid fa-shield-halved"></i>
                                <span>Payment Protection</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default HeroSection;
