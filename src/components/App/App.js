import { Routes, Route } from 'react-router-dom';
import './App.css';
import UserList from '../UserList/UserList';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
