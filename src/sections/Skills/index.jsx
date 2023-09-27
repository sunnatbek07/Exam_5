import React from 'react';
import SkillsCard from '../../components/Ui/Cards/SkillsCard';
import icon_js from "../../assets/images/icon-javscript.svg";
import icon_ts from "../../assets/images/icon-typescript.svg";
import icon_react from "../../assets/images/icon-react.svg";
import icon_sass from "../../assets/images/icon-sass.svg";
import icon_tailwindcss from "../../assets/images/icon-tailwindcss.svg";
import icon_git from "../../assets/images/icon-git.svg";
import "./style.scss"


const index = () => {
    return (
        <section id='skills' className='dark:bg-[#030712] dark:text-white'>
            <div className="container">
                <button className='skills_btn'>Skills</button>
                <p className='skills_title dark:text-white text-[#4B5563]'>The skills, tools and technologies I am really good at:</p>
                <div className='skills_wrapper'>
                    <SkillsCard
                        image={icon_js}
                        title="Javascript"
                    />

                    <SkillsCard
                        image={icon_ts}
                        title="Typescript"
                    />

                    <SkillsCard
                        image={icon_react}
                        title="React"
                    />

                    <SkillsCard
                        image={icon_sass}
                        title="Sass/Scss"
                    />
                    <SkillsCard
                        image={icon_tailwindcss}
                        title="Tailwindcss"
                    />
                    <SkillsCard
                        image={icon_git}
                        title="Git"
                    />
                </div>
            </div>
        </section>
    )
}

export default index