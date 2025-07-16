import { Typography } from '@mui/material';
import KarabastContributions from './CustomProjects/KarabastContributions';
import SWUDraftSim from './CustomProjects/SWUDraftSim';

export default function Projects() {
    return (
        <>
            <Typography variant='h3' component='h2' sx={{ textAlign: 'center', mt: '5rem' }}>Projects</Typography>
            <SWUDraftSim />
            <KarabastContributions />
        </>
    );
}
