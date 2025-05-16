import './App.css'
import { CssBaseline, Box } from '@mui/material';
import Showcase from './Showcase';
import Skills from './Skills';
import Projects from './Projects';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ background: 'linear-gradient(to right, rgba(9, 17, 169, 0.7),rgba(32, 141, 32, 0.5))' }}>
        <Navbar />
        <Showcase />
        <Skills />
        <Projects />
        <Footer />
      </Box>
    </>
  )
}

export default App
