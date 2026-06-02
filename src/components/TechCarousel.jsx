import { useEffect, useState, useRef } from "react";
import "../styling/TechCarousel.css";

import {
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaLinux,
  FaUbuntu,
  FaRedhat,
  FaGitAlt,
  FaDocker,
  FaBootstrap,
  FaPauseCircle,
  FaPlayCircle,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

function TechCarousel() {
  const techStack = [
    <FaAws />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaJs />,
    <FaReact />,
    <FaNodeJs />,
    <FaPython />,
    <FaJava />,
    <FaLinux />,
    <FaUbuntu />,
    <FaRedhat />,
    <FaGitAlt />,
    <FaDocker />,
    <SiPostgresql />,
    <SiTypescript />,
    <FaBootstrap />,
    <SiTailwindcss />,
    <SiKubernetes />,
    ];

  const items = [...techStack, ...techStack];

  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const BASE_SPEED = -0.5;
  const holdInterval = useRef(null);
  const touchStartX = useRef(null);
  const startHold = (direction) => {
    if (holdInterval.current) return;

    holdInterval.current = setInterval(() => {
        setOffset((prev) => prev + direction);
    }, 16);
    };
    const stopHold = () => {
        clearInterval(holdInterval.current);
        holdInterval.current = null;
    };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.touches[0].clientX - touchStartX.current;
    touchStartX.current = e.touches[0].clientX;
    setOffset((prev) => {
      const halfWidth = (trackRef.current?.scrollWidth || 0) / 2;
      let next = prev + delta;
      if (next <= -halfWidth) next = 0;
      if (next > 0) next = -halfWidth;
      return next;
    });
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setOffset((prev) => {
        const halfWidth = (trackRef.current?.scrollWidth || 0) / 2;

        const currentSpeed = paused ? 0 : BASE_SPEED;

        let next = prev + currentSpeed;

        if (next <= -halfWidth) next = 0;
        if (next > 0) next = -halfWidth;

        return next;
        });
    }, 16);

    return () => clearInterval(interval);
    }, [paused]);

  return (
    <div className="techstack">
        <header className="tech-stack-header">
            <h2>tech stack</h2>
            <div onClick={() => setPaused((p) => !p)}>
                {paused ? <FaPlayCircle /> : <FaPauseCircle />}
            </div>
        </header>
        <div className="carousel-container">
            <button
                className="arrow"
                onMouseDown={() => startHold(2)}
                onMouseUp={stopHold}
                onMouseLeave={stopHold}
                onTouchStart={(e) => { e.preventDefault(); startHold(2); }}
                onTouchEnd={stopHold}
                onContextMenu={(e) => e.preventDefault()}
                >
                <svg viewBox="0 0 640 640">
                    <path
                    fill="currentColor"
                    d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM199 303L279 223C288.4 213.6 303.6 213.6 312.9 223C322.2 232.4 322.3 247.6 312.9 256.9L273.9 295.9L424 295.9C437.3 295.9 448 306.6 448 319.9C448 333.2 437.3 343.9 424 343.9L273.9 343.9L312.9 382.9C322.3 392.3 322.3 407.5 312.9 416.8C303.5 426.1 288.3 426.2 279 416.8L199 336.8C189.6 327.4 189.6 312.2 199 302.9z"
                    />
                </svg>
            </button>

            <div
                className="carousel-window"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    ref={trackRef}
                    className="carousel-track"
                    style={{
                    transform: `translateX(${offset}px)`,
                    }}
                >
                    {items.map((Icon, index) => (
                        <div key={index} className="tech-icon">
                            {Icon}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="arrow"
                onMouseDown={() => startHold(-2)}
                onMouseUp={stopHold}
                onMouseLeave={stopHold}
                onTouchStart={(e) => { e.preventDefault(); startHold(-2); }}
                onTouchEnd={stopHold}
                onContextMenu={(e) => e.preventDefault()}
            >
                <svg viewBox="0 0 640 640">
                    <path
                    fill="currentColor"
                    d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM361 417C351.6 426.4 336.4 426.4 327.1 417C317.8 407.6 317.7 392.4 327.1 383.1L366.1 344.1L216 344.1C202.7 344.1 192 333.4 192 320.1C192 306.8 202.7 296.1 216 296.1L366.1 296.1L327.1 257.1C317.7 247.7 317.7 232.5 327.1 223.2C336.5 213.9 351.7 213.8 361 223.2L441 303.2C450.4 312.6 450.4 327.8 441 337.1L361 417.1z"
                    />
                </svg>
            </button>
        </div>
    </div>
  );
}

export default TechCarousel;