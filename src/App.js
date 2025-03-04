import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './pages/result';
import Index1 from './pages/index1';
import Index2 from './pages/index2';
import TarotCard from './pages/torotcards';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Index1 />} />
          <Route path="/wish" element={<Index2 />} />
          <Route path="/pick" element={<TarotCard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;