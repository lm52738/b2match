import './App.css';
import { Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Item from './pages/Item';

function App() {
  return (
     <Routes>
      <Route path="/" element={<List />} />
      <Route path="/item/:id" element={<Item />} />
     </Routes>
  );
}


export default App;
