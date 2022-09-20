import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import Book from './pages/Book';

function App() {
  return (
     <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/book/:id" element={<Book />} />
     </Routes>
  );
}


export default App;
