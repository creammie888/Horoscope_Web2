import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './pages/result';
import Index1 from './pages/index1';
import Index2 from './pages/index2';
import Pick from './pages/pick';
import Type from './pages/selectType';
import TarotType from './pages/selectTypeofTarot';
import Sticks from './pages/fortuneSticks';
import LovePage from './pages/lovePage';
import PickType from './pages/pickType';
import WorkPage from './pages/workPage';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const audio = new Audio('/music/Ferris Wheel.mp3');
    audio.loop = true;
    audio.volume = 0;

    const fadeIn = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + 0.01, 0.1);
      } else {
        clearInterval(fadeIn);
      }
    }, 200);

    const startMusic = () => {
      audio.play();
      document.removeEventListener('click', startMusic);
    };

    document.addEventListener('click', startMusic);

    return () => {
      clearInterval(fadeIn);
      document.removeEventListener('click', startMusic);
      audio.pause();
    };
  }, []);


  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Index1 />} />
          <Route path="/wish" element={<Index2 />} />
          <Route path="/result" element={<Result />} />
          <Route path="/pick" element={<Pick />} />
          <Route path="/selectType" element={<Type />} />
          <Route path="/selectTypeofTarot" element={<TarotType />} />
          <Route path="/fortuneSticks" element={<Sticks />} />
          <Route path="/tarotofLove" element={<LovePage />} />
          <Route path="/picktarot" element={<PickType />} />
          <Route path="/picktarotofWorkandStudy" element={<WorkPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;