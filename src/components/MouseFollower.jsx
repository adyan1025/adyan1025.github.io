import { color } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const style = useMemo(() => ({
    position: "fixed",
    left: 0,
    top: 0,
    width: "30px",
    height: "30px",
    border: "2px solid #FF4928",
    backgroundColor: "#ff482839",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 99999,
    transform: `translate3d(${position.x - 15}px, ${position.y - 15}px, 0)`,
    transition: "transform 1s cubic-bezier(0.1, 0.76, 0.55, 0.94)"
  }), [position.x, position.y]);

  return <div style={style} />;
}
