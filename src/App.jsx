import './styling/App.css'
import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import MouseFollower from './components/MouseFollower';

function App() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <Intro />
    </>
  );
}

export default App;