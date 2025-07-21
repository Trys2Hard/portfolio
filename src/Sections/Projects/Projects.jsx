import { Typography, Box } from '@mui/material';
import KarabastContributions from './CustomProjects/KarabastContributions';
import SWUDraftSim from './CustomProjects/SWUDraftSim';

export default function Projects() {
    return (
        <Box id='projects' sx={{ pt: '5rem' }}>
            <Typography variant='h4' component='h2' sx={{ textAlign: 'center' }}>Projects</Typography>
            <SWUDraftSim />
            <KarabastContributions />
        </Box>
    );
}
