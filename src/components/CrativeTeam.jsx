import React from "react";
import Slider from "react-slick";

const teamData = [
  {
    title: "Creative Director",
    desc: "Leads your brand vision with strategic creativity, ensuring every project feels unified, impactful, and results-driven."
  },
  {
    title: "Visualizer",
    desc: "Transforms ideas into clear, compelling visual concepts that strengthen communication and elevate your brand message."
  },
  {
    title: "Graphic Designer",
    desc: "Creates polished, professional designs that capture attention and reinforce your brand identity across all materials."
  },
  {
    title: "Web Designer",
    desc: "Builds user-friendly, modern interfaces that boost engagement and make your online presence visually unforgettable."
  },
  {
    title: "Web Developer",
    desc: "Delivers fast, secure, and functional websites that help your business operate smoothly and scale confidently."
  },
  {
    title: "Social Media Expert",
    desc: "Grows your audience with targeted content, smart strategy, and engagement that builds trust and brand loyalty."
  },
  {
    title: "Data Entry Specialist",
    desc: "Keeps your information accurate, organized, and accessible—ensuring smooth operations and better business decisions."
  },
  {
    title: "Project Manager",
    desc: "Coordinates every detail, ensuring deadlines, communication, and quality stay on track for a seamless experience."
  }
];

const CreativeTeam = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section className="main-wrapper-creative-section padding-top topbottom-40px ">
      <div className="container-fluid creative-section p-3 bg-dark rounded-5">
        <div className="container-fluid">

          {/* Heading */}
          <div className="text-center py-sm-4 pb-sm-4">
            <h2 className="creative-heading text-white Playfair-font">
              Unlocking the Power of <br /> Creative Team
            </h2>
          </div>

          {/* Desktop Grid */}
          <div className="row m-0 d-none d-sm-flex">
            {teamData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="creative-card text-center  bg-dark ">
                  <h5 className="fw-bold text-white mt-2">{item.title}</h5>
                  <p className="small m-0 creative-team-card-p text-white fw-bold fs-0 px-4 mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="d-sm-none mb-4 pb-3">
            <Slider {...sliderSettings}>
              {teamData.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="creative-card text-center h-100">
                    <h5 className="fw-bold text-white">{item.title}</h5>
                    <p className="small m-0 creative-team-card-p">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Button */}
          <div className="text-center mt-3">
            <button className="team-btn-white py-2 px-lg-4 px-sm-2 px-2 border-0">
              <a href="#" className="fw-bold text-white">
                Get Started <i className="fa-solid fa-circle-arrow-right ms-2"></i>
              </a>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeTeam;
