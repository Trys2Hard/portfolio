import { Button } from "@mui/material";

export default function LinkButton({ href, children }) {
    const styles = {
        button: {
            background: 'linear-gradient(to right, rgba(61, 147, 246, 1),rgba(148, 192, 243, 1))',
            p: '0.5rem',
            borderRadius: '15px',
            color: 'inherit',
            '&:hover': {
                filter: 'brightness(1.1)',
            },
            boxShadow: '-3px 3px 5px rgba(122, 122, 122, 1)',
        }
    }

    return (
        <Button variant='contained' component='a' sx={styles.button} target='_blank' rel='noopener noreferrer' href={href}>{children}</Button>
    )
}