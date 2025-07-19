import DefaultProject from '../DefaultProject';
import { Box } from '@mui/material';

export default function KarabastContributions() {
    return (
        <DefaultProject
            src='Karabast.png'
            projectTitle='Open Source Contributions'
            projectSubtitle={
                <>
                    <strong style={{ color: 'green' }}>20+</strong> contributions made to{' '}
                    <Box component='a'
                        href="https://www.karabast.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'inherit', textDecoration: 'underline', '&:hover': { color: 'rgba(33, 52, 253, 1)' } }}
                    >Karabast.net</Box>.
                </>}
            buttons={[
                { href: 'https://github.com/SWU-Karabast/forceteki-client/pulls?q=is%3Apr+is%3Amerged+author%3ATrys2Hard+', label: 'Contributions' },
            ]} />
    );
}
