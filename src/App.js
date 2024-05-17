
import './App.css';
// import HeroSection from './components/Hero Section/hero';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from './components/Sign In/SignIn';
import Layout from './components/Layout/Layout';
import SignUp from './components/Sign Up/SignUp';
import Error404 from './components/404 page/Error404';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Layout/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="error404" element={<Error404/>} />
      </Routes>
    </BrowserRouter>  
    </>
    
  );
}

export default App;
