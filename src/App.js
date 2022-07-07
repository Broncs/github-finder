import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NoutFound from './pages/NoutFound'

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router className="container bg-primary">
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NoutFound />} />
              <Route path="/*" element={<NoutFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
