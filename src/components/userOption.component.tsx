import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import { User } from '../models';
import { useStyles } from './styles';

interface IProps {
    user: User,
    handleIsSelectedUser: Function
}

export const UserOptionComponent = ({ user, handleIsSelectedUser }: IProps) => {
    const classes = useStyles();
    return (
        <div className={classes.div__userOption} onClick={() => handleIsSelectedUser(user)} style={{backgroundColor: user.isSelected ? "#339933" : "#fff"}}>
            <div><AccountCircleIcon /></div>
            <div style={{marginLeft: "10px"}}><Typography style={{color: user.isSelected ? "#fff" : "#9FA2B4"}}>{user.name}</Typography></div>
        </div>
    )
}