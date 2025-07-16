import { Button } from "@mui/material";

export default function LinkButton({ href, children }) {
    return (
        <Button variant='contained' component='a' target='_blank' rel='noopener noreferrer' href={href}>{children}</Button>
    )
}