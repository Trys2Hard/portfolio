import { Box, Typography } from '@mui/material';

const styles = {
    skills: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '75%',
        m: '0 auto 0 auto',
        '& .MuiBox-root': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: '1rem',
        },
        '& img': {
            width: '3rem'
        },
        '& .MuiTypography-root': {
            mt: '0.5rem'
        },
    }
}

export default function Skills() {
    return (
        <Box id='skills' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '5rem' }}>
            <Typography variant='h4' component='h2'>Skills</Typography>
            <Box sx={styles.skills}>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <Typography>React</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <Typography>Javascript</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <Typography>HTML</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg" />
                    <Typography>Material UI</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    <Typography>CSS</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                    <Typography>Node.js</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                    <Typography>NPM</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                    <Typography>Express.js</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    <Typography>Git</Typography>
                </Box>
                <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                    <Typography>MongoDB</Typography>
                </Box>
            </Box>
        </Box>
    )
}
