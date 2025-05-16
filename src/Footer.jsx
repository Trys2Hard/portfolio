import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', background: 'gray', p: '0.5rem', mt: '1rem' }}>
            <Link href='https://github.com/Trys2Hard?tab=repositories' target='_blank' rel='noopener noreferrer' sx={{ color: 'inherit' }}>
                <GitHubIcon fontSize='large' />
            </Link>
            <Link href='https://github.com/Trys2Hard?tab=repositories' target='_blank' rel='noopener noreferrer' sx={{ color: 'inherit' }}>
                <LinkedInIcon fontSize='large' sx={{ ml: '0.3rem', mr: '0.3rem' }} />
            </Link>
            <Link href='https://github.com/Trys2Hard?tab=repositories' target='_blank' rel='noopener noreferrer' sx={{ color: 'inherit' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon fontSize='large' sx={{ mr: '0.1rem' }} />
                    <Typography variant='h6' component='p'>klepoidevin3@gmail.com</Typography>
                </Box>
            </Link>
        </Box>
    )
}
