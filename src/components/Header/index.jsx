import "./style.scss";
import { useState, useEffect } from "react";

const index = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true" || false
    );

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="dark:bg-[#030712] bg-white dark:text-white">
            <div className="container">
                <nav className="nav">
                    <a href="/" className="nav__logo">
                        <h2>{`<SQ/>`}</h2>
                    </a>

                    <ul className="nav__list">
                        <li className="nav__list_item">
                            <a href="#about" className="nav__list_item-link">About</a>
                        </li>
                        <li className="nav__list_item">
                            <a href="#work" className="nav__list_item-link">Work</a>
                        </li>
                        <li className="nav__list_item">
                            <a href="#testimonials" className="nav__list_item-link">Testimonials</a>
                        </li>
                        <li className="nav__list_item">
                            <a href="#contact" className="nav__list_item-link">Contact</a>
                        </li>
                        <div className="h_btns">
                            <i className={`${darkMode ? " moon-icon" : "sun-icon"} bx ${darkMode ? "bx-moon" : "bx-sun"}`} onClick={() => toggleDarkMode()}></i>
                            <button>Download CV</button>
                        </div>
                    </ul>
                    <i className='bx bx-menu'></i>
                </nav>
            </div>
        </header >
    );
};

export default index;