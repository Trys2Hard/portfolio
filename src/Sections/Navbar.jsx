import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
    return (
        <Box>
            <AppBar postion='sticky' sx={{ top: '0', zIndex: '1' }}>
                <Toolbar sx={{ '& > *': { padding: '1rem', '&:hover': { cursor: 'pointer', color: 'blue' } } }}>
                    <Typography variant="h6" component="a">Home</Typography>
                    <Typography variant="h6" component="a">Skills</Typography>
                    <Typography variant="h6" component="a">Projects</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
