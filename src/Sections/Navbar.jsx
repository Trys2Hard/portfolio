import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
    return (
        <Box>
            <AppBar sx={{ display: 'flex', alignItems: 'center', top: '0', zIndex: '1', background: 'linear-gradient(to right, rgba(61, 147, 246, 1),rgba(148, 192, 243, 1))' }}>
                <Toolbar sx={{ '& > *': { padding: '1rem', color: 'black', textDecoration: 'none', '&:hover': { cursor: 'pointer', color: 'rgba(236, 236, 236, 1)' } } }}>
                    <Typography variant="h6" component="a" href="#home">Home</Typography>
                    <Typography variant="h6" component="a" href="#skills">Skills</Typography>
                    <Typography variant="h6" component="a" href="#projects">Projects</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
