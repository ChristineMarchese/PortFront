import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import IndexPage from './components/IndexPage';
import ShowPage from './components/ShowPage';
import NewPage from './components/NewPage';
import EditPage from './components/EditPage';
import PageNotFound from './components/PageNotFound';
import { Navigate } from 'react-router-dom';


// import './App.css'

function App() {

  return (
    <>
     <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/about" element={< AboutPage />} />
          <Route path="/cats" element={< IndexPage />} />
          <Route path="/cats/:id" element={< ShowPage />} />
          <Route path="/cats/new" element={< NewPage />} />
          <Route path="/cats/:id/edit" element={< EditPage />} />
          <Route path="/notfound" element={< PageNotFound />} />
          <Route path="*" element={< Navigate to="/notfound" />} />
       </Routes>
     </Router>
    </>
  )
}

export default App;
