import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './pages/result';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Result />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;