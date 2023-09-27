import "./style.scss";
import email from "../../assets/images/mailicon.svg";
import copy from "../../assets/images/copyIcon.svg";
import phone from "../../assets/images/phoneIcon.svg";
import github from "../../assets/images/github.svg";
import tweeter from "../../assets/images/tweeter.svg";

const index = () => {
    return (
        <footer id="contact" className="bg-white dark:bg-[#030712]">
            <div className="container">
                <div className="f_wrapper">
                    <button className="footer_btn ">Get in touch</button>
                    <p className="footer_text text-[#4B5563] dark:text-white">
                        Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng birinchi
                        hadisi shu hadis bilan boshlangan: “Innamal a’malu bin niyyati” ya’ni,
                        “Barcha amallar niyatga bog’liq”.
                    </p>

                    <div className="email_phone">
                        <div className="email">
                            <img src={email} alt="Email icon" />
                            <p className="text-[#111827] dark:text-white">qadamovs@gmail.com</p>
                            <img src={copy} alt="Copy icon" />
                        </div>
                        <div className="phone">
                            <img src={phone} alt="Phone icon" />
                            <p className="text-[#111827] dark:text-white">+998 77 000 13 76</p>
                            <img src={copy} alt="Copy icon" />
                        </div>
                    </div>

                    <p className="footer_social text-[#4B5563] dark:text-white">You may also find me on these platforms!</p>

                    <div className="footer_social-icon">
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

            </div>
            <div className="footer_bottom bg-[#F9FAFB] dark:bg-[#111827]">
                <p className="text-[#4B5563] dark:text-white">&copy; 2023 | Designed and coded with ❤️️ by NAJOT TA’LIM</p>
            </div>
        </footer>
    );
};

export default index;
