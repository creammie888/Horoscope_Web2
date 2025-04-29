import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './pages/result';
import Index1 from './pages/index1';
import Index2 from './pages/index2';
import Pick from './pages/pick';
import Type from './pages/selectType';
import TarotType from './pages/selectTypeofTarot';
import Sticks from './pages/fortuneSticks';

function App() {
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;