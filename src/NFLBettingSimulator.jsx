import { ImageList, ImageListItem, Box, Typography, Button } from '@mui/material';

const itemData = [
    {
        img: 'index_1.png',
        title: 'NFL Betting Simulator Index 1',
    },
    {
        img: 'index_2.png',
        title: 'NFL Betting Simulator Index 2',
    },
    {
        img: 'bets.png',
        title: 'NFL Betting Simulator Bets',
    },
    {
        img: 'register.png',
        title: 'NFL Betting Simulator Index Register',
    },
];

export default function NFLBettingSimulator() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: '3rem auto 0 auto', border: '2px solid blue', width: '60%', p: '1rem', borderRadius: '10px', backgroundColor: 'gray' }}>
            <Typography variant='h4' component='h3' sx={{ mb: '1rem' }}>NFL Betting Simulator</Typography>
            <Typography variant='p' component='p' sx={{ mb: '1rem' }}>A website for placing simulated bets on real NFL games. Note: This is a portfolio/learning project only and is not currently in production.</Typography>
            <ImageList cols={1} sx={{ width: '100%', maxHeight: '400px' }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ '&:hover': { cursor: 'pointer' } }}>
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Button variant='contained' component='a' target='_blank' rel='noopener noreferrer' href='https://github.com/Trys2Hard/nflbettingsimulator'>Source Code</Button>
        </Box>
    );
}
