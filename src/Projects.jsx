import { Typography } from '@mui/material';
import KarabastContributions from './KarabastContributions';
import ReactProject from './ReactProject';

export default function Projects() {
    return (
        <>
            <Typography variant='h3' component='h2' sx={{ textAlign: 'center', mt: '5rem' }}>Projects</Typography>
            <ReactProject />
            <KarabastContributions />
        </>
    );
}
