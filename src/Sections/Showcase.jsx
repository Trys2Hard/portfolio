import { Box, Typography, Link } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Showcase() {
    return (
        <Box sx={{ m: '0 auto 0 auto', pt: '6rem', width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
                <Typography variant='h4' component='h1' sx={{ translate: '-0.08rem 0' }}>Hello, I'm Keith LePoidevin</Typography>
                <Typography variant='h6' component='h2' sx={{ lineHeight: '1.2rem' }}>A Full-Stack developer with a focus on Front-End React</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '0.2rem' }}>
                    <Box sx={{ display: 'flex', translate: '-0.25rem 0' }}>
                        <PlaceIcon />
                        <Typography sx={{ mt: '0.2rem' }}>US, Washington State</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: '0.3rem' }}>
                        <Link href='https://github.com/Trys2Hard?tab=repositories' target='_blank' rel='noopener noreferrer' sx={{ color: 'inherit' }}>
                            <GitHubIcon fontSize='large' />
                        </Link>
                        <Link href='https://github.com/Trys2Hard?tab=repositories' target='_blank' rel='noopener noreferrer' sx={{ color: 'inherit' }}>
                            <LinkedInIcon fontSize='large' sx={{ ml: '0.3rem', mr: '0.3rem' }} />
                        </Link>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon fontSize='large' sx={{ mr: '0.1rem' }} />
                            <Typography variant='h6' component='p'>klepoidevin3@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <img style={{ width: '15rem' }} src="profile-pic-placeholder.jpg" alt='profile image' />
            </Box>
        </Box>
    )
}
