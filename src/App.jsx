import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pags/Home'; // Sua landing page atual
import ProjectDetail from './Pags/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota da sua Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Rota para o detalhe de cada projeto */}
        <Route path="/projeto/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;