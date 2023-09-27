import React from "react";
import followLink from "../../../assets/images/go_icon.svg";

const Work = ({ case: { image, title, body, technologies } }) => {
    return (
        <div className="work_card dark:bg-[#1F2937] bg-[#fff]">
            <div className="img_wrapper">
                <img src={image} alt="Site image" />
            </div>
            <div className="site_title">
                <h3 className="dark:text-white text-[#111827]">{title}</h3>
                <p className="text-[#4B5563] dark:text-white">
                    {body}
                </p>
                <div className="technologies">
                    {
                        technologies.map((item, index) => {
                            return <span className="dark:bg-[#4B5563] bg-[#E5E7EB] dark:text-white text-[#1F2937]" key={index}>{item}</span>
                        })
                    }
                </div>

                <a href="">
                    <img src={followLink} alt="Follow to link icon" />
                </a>
            </div>
        </div>
    );
};

export default Work;
