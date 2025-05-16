import { ImageList, ImageListItem, Box, Typography, Button } from '@mui/material';

const itemData = [
    {
        img: 'Karabast.png',
        title: 'Karabast',
    },
];

export default function KarabastContributions() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: '3rem auto 0 auto', border: '2px solid blue', width: '60%', p: '1rem', borderRadius: '10px', backgroundColor: 'gray' }}>
            <Typography variant='h4' component='h3' sx={{ mb: '1rem' }}>Open Source Contributions</Typography>
            <Typography variant='p' component='p' sx={{ mb: '1rem' }}>Contributions that I have made to Karabast.net, an open source project on Github. I started contributing to the project a few weeks before the beta launch.</Typography>
            <ImageList cols={1} sx={{ width: '100%', maxHeight: '400px' }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Button variant='contained' component='a' target='_blank' rel='noopener noreferrer' href='https://github.com/SWU-Karabast/forceteki-client/pulls?q=is%3Apr+is%3Amerged+author%3ATrys2Hard+'>My Contributions</Button>
        </Box>
    );
}
