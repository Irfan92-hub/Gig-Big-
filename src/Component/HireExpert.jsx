import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const HireExpert = () => {
    const [category, setCategory] = useState([]);

    const data = async () => {
        try {
            const res = await axios.get("https://www.gig-big.in/category");
            setCategory(res.data);
        } catch (error) {
            console.log("error");
        }
    };

    useEffect(() => {
        data();
    }, []);

    const settings = {
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 7,   
        slidesToScroll: 2,
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className="container-heading">
                <h1>Popular Categories</h1>
            </div>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {category.map((item, index) => (
                        <div key={index} className="slider-box">
                            <div className="box">
                                <h2>{item.category}</h2>
                                <img src={item.image} alt="" style={{ width: "50px", height: "50px" }} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default HireExpert;

