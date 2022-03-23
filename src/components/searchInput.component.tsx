import { Autocomplete, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from "./styles";

export const SearchInputComponent = () => {
    const classes = useStyles();

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            sx={{ width: 300 }}
            options={[]}
            popupIcon={<AddIcon />}
            className={classes.div__autocomplete}
            renderInput={(params) => <TextField {...params} label="Search options" />}
        />
    )
}