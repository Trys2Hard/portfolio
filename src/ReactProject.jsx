import { ImageList, ImageListItem, Box, Typography, Button } from '@mui/material';

const itemData = [
    {
        img: 'Karabast.png',
        title: 'React Project',
    },
];

export default function ReactProject() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: '3rem auto 0 auto', border: '2px solid blue', width: '60%', p: '1rem', borderRadius: '10px', backgroundColor: 'gray' }}>
            <Typography variant='h4' component='h3' sx={{ mb: '1rem' }}>React Project (todo list?)</Typography>
            <Typography variant='p' component='p' sx={{ mb: '1rem' }}>A React project probably a todo list showcasing my skills in React and Material UI</Typography>
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
            <Button variant='contained' component='a' target='_blank' rel='noopener noreferrer' href='#'>Source Code</Button>
        </Box>
    );
}
