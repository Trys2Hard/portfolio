import { Box, Typography } from '@mui/material';
import LinkButton from '../../LinkButton';

export default function DefaultProject({ src, projectTitle, projectSubtitle, buttons = [] }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m: '1rem auto 0 auto',
            width: { xs: '90%', lg: '60%' },
            p: '1rem',
            borderRadius: '10px',
            backgroundColor: 'rgba(153, 153, 153, 1)',
        },
        title: {
            textAlign: 'center',
        },
        subtitle: {
            mb: '1rem',
            textAlign: 'center',
        },
        image: {
            width: '75%',
            m: '0 auto 0 auto',
        },
        buttonContainer: {
            display: 'flex',
            gap: '1rem',
            mt: '1rem',
        },
    }

    return (
        <Box sx={styles.container}>
            <Typography variant='h4' component='h3' sx={styles.title}>{projectTitle}</Typography>
            <Typography variant='subtitle1' component='p' sx={styles.subtitle}>{projectSubtitle}</Typography>
            <Box component='img' src={src} sx={styles.image}></Box>
            <Box sx={styles.buttonContainer}>
                {buttons.map((btn, index) => (
                    <LinkButton key={index} href={btn.href} children={btn.label} />
                ))}
            </Box>
        </Box>
    );
}