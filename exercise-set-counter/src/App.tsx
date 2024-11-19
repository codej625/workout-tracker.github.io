import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/page/Index';
import NotFound from './components/page/NotFound';
import './assets/css/style.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* 404 페이지 (일치하는 경로가 없을 때) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;