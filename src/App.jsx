import './styling/App.css';

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import MouseFollower from "./components/MouseFollower";
import TechCarousel from "./components/TechCarousel";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <MouseFollower />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'sticky', top: 15, zIndex: 100 }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Intro />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <TechCarousel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Experience />
      </motion.div>
    </>
  );
}

export default App;