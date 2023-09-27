import React from "react";
import user from "../../assets/images/user.png";
import "./style.scss";

const index = () => {
    return (
        <section id="about" className="dark:bg-[#111827] bg-[#F9FAFB]">
            <div className="container">
                <button className="about_btn">About me</button>

                <div className="about_wrapper">
                    <div className="about_text">
                        <h3 className="dark:text-white text-[#111827]">Curious about me? Here you have it:</h3>
                        <p className="dark:text-white text-[#4B5563]">
                            I'm a passionate, software engineer who specializes in full stack
                            development (Vue.js & Node.js). I am very enthusiastic about
                            bringing the technical and visual aspects of digital products to
                            life. User experience, pixel perfect design, and writing clear,
                            readable, highly performant code matters to me. <br /> <br />
                            I began my journey as a web developer in 2015, and since then,
                            I've continued to grow and evolve as a developer, taking on new
                            challenges and learning the latest technologies along the way.
                            Now, in my early thirties, 7 years after starting my web
                            development journey, I'm building cutting-edge web applications
                            using modern technologies such as Next.js, TypeScript, Nestjs,
                            Tailwindcss, Supabase and much more. <br /> <br></br>
                            I am very much a progressive thinker and enjoy working on products
                            end to end, from ideation all the way to development. <br />{" "}
                            <br />
                            When I'm not in full-on developer mode, you can find me hovering
                            around on twitter or on indie hacker, witnessing the journey of
                            early startups or enjoying some free time. You can follow me on
                            Linked where I share tech-related bites and build in public, or
                            you can follow me on GitHub. <br /> <br />
                        </p>

                        <p className="dark:text-white">Finally, some quick bits about me.</p>

                        <ul className="dark:text-white text-[#4B5563]">
                            <li>B.E. in Computer Engineering</li>
                            <li>Full time coding</li>
                        </ul>

                        <p className="last_p dark:text-white">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                    </div>
                    <div className="about_img_wrapper">
                        <div className="about_img_bg bg-[#E5E7EB] dark:bg-[#9CA3AF]"></div>
                        <div className="user_img_wrapper">
                            <img src="https:/picsum.photos/id/2/400/480" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
