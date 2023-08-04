import './App.css';
import Home from './components/Home'
import ResultSummaryComponent from './components/ResultSummaryComponent'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ResultSummaryComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
