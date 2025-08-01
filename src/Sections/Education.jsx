import { Box, Typography, Link, List, ListItem } from '@mui/material';

export default function Education() {
    const styles = {
        container: {
            pt: '5rem',
            textAlign: 'center',
            width: { xs: '90%', lg: '60%' },
            m: '0 auto 0 auto',
        },
        courses: {
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
        },
        courseImg: {
            width: '100%',
            height: '100%',
            transition: 'transform 0.5s ease-in-out',
            borderRadius: '10px',
            '&:hover': {
                outline: '2px solid rgba(61, 147, 246, 1)',
                boxShadow: '0 0 20px rgba(61, 147, 246, 1)',
                transform: 'translateY(-5px)',
            },
        },
    }

    return (
        <Box id='education' sx={styles.container}>
            <Typography variant='h4' component='h2' sx={{ pb: '1rem' }}>Education</Typography>

            <Box component='li'>Associate's degree from Clark College 2017-2019</Box>
            <Box component='li' sx={{ m: '0.5rem 0 0.5rem 0' }}>As a self taught developer a majority of my learning has been through Colt Steele's Udemy Courses</Box>



            <Box sx={styles.courses}>
                <Link
                    href='https://www.udemy.com/course/the-web-developer-bootcamp/?couponCode=KEEPLEARNING'
                    target="_blank"
                    rel="noopener noreferrer" >
                    <Box
                        component='img'
                        src='./web-dev-bootcamp.png'
                        alt='Udemy Course Web Developer Bootcamp'
                        sx={styles.courseImg} />
                </Link>
                <Link
                    href='https://www.udemy.com/course/javascript-beginners-complete-tutorial/?couponCode=KEEPLEARNING'
                    target="_blank"
                    rel="noopener noreferrer" >
                    <Box
                        component='img'
                        src='./js-bootcamp.png'
                        alt='Udemy Course Javascript Bootcamp'
                        sx={styles.courseImg} />
                </Link>
                <Link
                    href='https://www.udemy.com/course/git-and-github-bootcamp/?couponCode=KEEPLEARNING'
                    target="_blank"
                    rel="noopener noreferrer" >
                    <Box
                        component='img'
                        src='./git-github-bootcamp.png'
                        alt='Udemy Course Git & Github Bootcamp'
                        sx={styles.courseImg} />
                </Link>
            </Box>
        </Box>
    );
}