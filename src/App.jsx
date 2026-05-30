import './styling/App.css'
import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import MouseFollower from './components/MouseFollower';
import TechCarousel from './components/TechCarousel';

function App() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <Intro />
      <TechCarousel />
    </>
  );
}

export default App;