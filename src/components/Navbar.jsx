import { useState, useRef, useEffect } from "react";
import { FaCloud, FaBars } from "react-icons/fa";
import "../styling/Navbar.css";

function Navbar() {
    const [active, setActive] = useState("home");
    const [underlineStyle, setUnderlineStyle] = useState({});
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const refs = {
        home: useRef(null),
        experience: useRef(null),
        resume: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const element = refs[active].current;
        if (element) {
            setUnderlineStyle({
                width: `${element.offsetWidth}px`,
                left: `${element.offsetLeft}px`,
            });
        }
    }, [active]);

    const handleNavClick = (section) => {
        setActive(section);
        setMobileMenuOpen(false);
    };

    return (
        <nav>
            <div className="logo">
                <FaCloud />
                <h3>adyan chowdhury</h3>
            </div>
            <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <FaBars />
            </div>

            <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
                <li
                    ref={refs.home}
                    className={active === "home" ? "active" : "inactive"}
                    onClick={() => handleNavClick("home")}
                >
                    <h3>home</h3>
                </li>

                <li
                    ref={refs.experience}
                    className={active === "experience" ? "active" : "inactive"}
                    onClick={() => handleNavClick("experience")}
                >
                    <h3>experience</h3>
                </li>

                <li
                    ref={refs.resume}
                    className={active === "resume" ? "active" : "inactive"}
                    onClick={() => handleNavClick("resume")}
                >
                    <h3>resume</h3>
                </li>

                <li
                    ref={refs.contact}
                    className={active === "contact" ? "active" : "inactive"}
                    onClick={() => handleNavClick("contact")}
                >
                    <h3>contact</h3>
                </li>

                <div className="underline" style={underlineStyle}></div>
            </ul>
        </nav>
    );
}

export default Navbar;