import Top_Box from './Top_Box.jsx';
import Bottom_Box from './Bottom_Box.jsx';
import Footer from './Footer.jsx'

/*
(runs local web)
npm run dev

(uploads to github)
npm run deploy
*/ 

function App() {
  return (
    <>
      <Top_Box></Top_Box>
      <Bottom_Box></Bottom_Box>
      <Footer></Footer>
    </>
  );
}

export default App
