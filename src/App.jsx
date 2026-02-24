import { Routes, Route, useLocation } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Companies from './pages/Companies';
import Students from './pages/Students';
import Educators from './pages/Educators';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Welcome from './pages/auth/Welcome';
import ChoosePath from './pages/auth/ChoosePath';
import GetStarted from './pages/auth/GetStarted';
import SignUp from './pages/auth/SignUp';
import Personalization from './pages/auth/Personalization';
import Experience from './pages/auth/Experience';
import ProgramSelection from './pages/auth/ProgramSelection';
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith('/auth');
  const isDashboardPage = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && !isDashboardPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/students" element={<Students />} />
          <Route path="/educators" element={<Educators />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          
          {/* Auth Routes */}
          <Route path="/auth/welcome" element={<Welcome />} />
          <Route path="/auth/choose-path" element={<ChoosePath />} />
          <Route path="/auth/get-started" element={<GetStarted />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/personalization" element={<Personalization />} />
          <Route path="/auth/experience" element={<Experience />} />
          <Route path="/auth/program-selection" element={<ProgramSelection />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      {!isAuthPage && !isDashboardPage && <Footer />}
    </div>
  );
}

export default App;
