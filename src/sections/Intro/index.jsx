import React from "react";
import "./style.scss";
import user from "../../assets/images/user.png";
import location from "../../assets/images/location.svg";
import github from "../../assets/images/github.svg";
import tweeter from "../../assets/images/tweeter.svg";

const index = () => {
    return (
        <section id="intro" className="dark:bg-[#030712] text-white">
            <div className="container">
                <div className="intro_wrapper">
                    <div className="intro_text">
                        <h2 className="dark:text-white text-[#111827]">Hi, I’m Sunnatbek 👋</h2>
                        <p className="dark:text-white text-[#4B5563]">
                            I'm a Frontend developer (React.js)
                            with a focus on creating exceptional digital experiences that are
                            fast, accessible, visually appealing, and responsive.
                        </p>
                        <div className="location">
                            <img src={location} alt="Location icon" />
                            <span className="location_text dark:text-white text-[#4B5563]">Tashkent, Chilonozor</span>
                        </div>
                        <div className="status">
                            <div className="status_dot"></div>
                            <span className="status_text dark:text-white text-[#4B5563]">Available for new projects</span>
                        </div>

                        <div className="intro_social">
                            <a href="">
                                <img src={github} className="icon" alt="GitHub icon" />
                            </a>
                            <a href="">
                                <img src={tweeter} className="icon" alt="Tweeter icon" />
                            </a>
                            <a href="">
                                <i className='bx bxl-telegram icon' ></i>
                            </a>
                        </div>
                    </div>
                    <div className="intro_img">
                        <div className="img_bg bg-[#E5E7EB] dark:bg-[#9CA3AF]">

                        </div>
                        <div className="img_wrapper">
                            <img src={user} className="my-image" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
