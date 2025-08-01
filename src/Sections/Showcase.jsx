import { Box, Typography, Link } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Showcase() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: { xs: 'center', sm: 'flex-start' },
            width: '100%',
            p: '6rem 1rem 0 1rem',

        },
        githubIcon: {
            color: 'inherit',
            '&:hover': {
                color: 'rgba(33, 52, 253, 1)',
            },
        },
        linkedinIcon: {
            color: 'inherit',
            mt: '0.2rem',
            '&:hover': {
                color: 'rgba(33, 52, 253, 1)',
            },
        },
        profilePhoto: {
            width: '10rem',
            height: '100%',
            borderRadius: '50%',
        },
    }

    return (
        <Box id='home' sx={styles.container}>
            <Box sx={{ m: { xs: '0 0 2rem 0', sm: '0 8rem 0 2rem' } }}>
                <Typography variant='h4' component='h1'>Hello, I'm Keith LePoidevin</Typography>
                <Typography variant='subtitle1' component='p' sx={{ ml: '0.1rem' }}>A Full-Stack developer with a focus on Front-End React</Typography>
                <Box sx={{ display: 'flex', translate: '-0.3rem 0' }}>
                    <PlaceIcon />
                    <Typography variant='p' component='p' sx={{ mt: '0.3rem' }}>US, Washington State</Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: '-0.1rem' }}>
                    <EmailIcon fontSize='medium' />
                    <Typography variant='p' component='p' sx={{ ml: '0.1rem' }}>klepoidevin3@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: '-0.25rem' }}>
                    <Link href='https://github.com/Trys2Hard?tab=repositories' target='_blank' rel='noopener noreferrer' sx={styles.githubIcon}>
                        <GitHubIcon fontSize='large' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/keith-lepoidevin-196a21195' target='_blank' rel='noopener noreferrer' sx={styles.linkedinIcon}>
                        <LinkedInIcon fontSize='large' />
                    </Link>
                </Box>
            </Box>
            <Box component='img' src="showcase-photo.jpg" alt='Profile Photo' style={styles.profilePhoto} />
        </Box>
    );
}
