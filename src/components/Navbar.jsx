import { useState, useRef, useEffect } from "react";
import { FaCloud } from "react-icons/fa";
import "../styling/Navbar.css";

function Navbar() {
    const [active, setActive] = useState("home");
    const [underlineStyle, setUnderlineStyle] = useState({});

    const refs = {
        home: useRef(null),
        experience: useRef(null),
        resume: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const element = refs[active].current;

        setUnderlineStyle({
            width: `${element.offsetWidth}px`,
            left: `${element.offsetLeft}px`,
        });
    }, [active]);

    return (
        <nav>
            <div className="logo">
                <FaCloud />
                <h3>adyan chowdhury</h3>
            </div>

            <ul className="nav-links">
                <li
                    ref={refs.home}
                    className={active === "home" ? "active" : "inactive"}
                    onClick={() => setActive("home")}
                >
                    <h3>home</h3>
                </li>

                <li
                    ref={refs.experience}
                    className={active === "experience" ? "active" : "inactive"}
                    onClick={() => setActive("experience")}
                >
                    <h3>experience</h3>
                </li>

                <li
                    ref={refs.resume}
                    className={active === "resume" ? "active" : "inactive"}
                    onClick={() => setActive("resume")}
                >
                    <h3>resume</h3>
                </li>

                <li
                    ref={refs.contact}
                    className={active === "contact" ? "active" : "inactive"}
                    onClick={() => setActive("contact")}
                >
                    <h3>contact</h3>
                </li>

                <div className="underline" style={underlineStyle}></div>
            </ul>
        </nav>
    );
}

export default Navbar;