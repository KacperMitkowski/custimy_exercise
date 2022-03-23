import { Grid } from "@mui/material"
import { useState } from "react";
import { AddFilterButtonComponent, TabsComponent } from "../components"
import { useStyles } from "../components/styles"

interface IState {
    value: string
}

export const MainPage = () => {
    const classes = useStyles();
    const [state, setState] = useState<IState>({
        value: "",
    })

    const handleValue = (newValue: string) => {
        setState({ ...state, value: newValue })
    }

    return (
        <>
            <Grid item xs={3} className={classes.div__addFilterButtonSection}>
                <AddFilterButtonComponent handleValue={handleValue} />
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={3} className={classes.div__tabsSection}>
                <TabsComponent value={state.value} handleValue={handleValue} />
            </Grid>
            <Grid item xs={9} />
        </>
    )
}