import { Grid } from "@mui/material";

interface IProps {
    children: any;
}

export const Layout = ({ children }: IProps) => {
    return (
        <Grid container>
            {children}
        </Grid>
    );
}; 