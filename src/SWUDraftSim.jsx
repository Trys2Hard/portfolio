import { ImageList, ImageListItem, Box, Typography } from '@mui/material';
import LinkButton from './LinkButton';

const itemData = [
    {
        img: 'swudraftsim.png',
        title: 'swudraftsim',
    },
];

export default function SWUDraftSim() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: '3rem auto 0 auto', width: '60%', p: '1rem', borderRadius: '10px', backgroundColor: 'rgba(153, 153, 153, 1)' }}>
            <Typography variant='h4' component='h3' sx={{ mb: '1rem', textAlign: 'center' }}>SWUDraftSim.com</Typography>
            <Typography variant='p' component='p' sx={{ mb: '1rem', textAlign: 'center' }}>A Star Wars Unlimited TCG Draft Simulator</Typography>
            <ImageList cols={1} sx={{ width: '100%', maxHeight: '400px' }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: '75%', m: '0 auto 0 auto' }}>
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <LinkButton href='https://github.com/Trys2Hard/swu-draft-sim' children='Source Code' />
                <LinkButton href='https://www.swudraftsim.com/' children='Website' />
            </Box>
        </Box>
    );
}
