import { CssBaseline, Box } from '@mui/material';
import Showcase from './Sections/Showcase';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects/Projects';
import Navbar from './Sections/Navbar';
import Footer from './Sections/Footer';

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
