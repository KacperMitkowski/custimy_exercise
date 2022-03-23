import { Button } from "@mui/material"
import { useStyles } from "./styles";
import AddIcon from '@mui/icons-material/Add';

interface IProps {
    handleValue: Function
}

export const AddFilterButtonComponent = ({ handleValue }: IProps) => {
    const classes = useStyles()
    return (
        <Button onClick={() => handleValue("1")} variant="contained" className={classes.button__addFilter} startIcon={<AddIcon />}>Add filter</Button>
    )
}