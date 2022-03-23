import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useStyles } from './styles';
import { SearchInputComponent } from './searchInput.component';
import { useState } from 'react';
import { UserOptionComponent } from './userOption.component';
import { User } from '../models';

interface IProps {
    value: string,
    handleValue: Function
}

interface IState {
    users: User[]
}

export const TabsComponent = ({ value, handleValue }: IProps) => {
    const classes = useStyles();
    const [state, setState] = useState<IState>({
        users: [{ name: "Louie Popp", isSelected: false },
        { name: "Jonas Rafn", isSelected: false },
        { name: "Fiona Rakipi", isSelected: false },
        { name: "Martin Navne", isSelected: false },
        { name: "Kristofer Degn", isSelected: false }]
    })

    const handleIsSelectedUser = (userToChange: User) => {
        let newUsers = [...state.users]
        newUsers = newUsers.map((user: User) => {
            if (user.name === userToChange.name) {
                user.isSelected = !user.isSelected
            }
            return user;
        })
        setState({ ...state, users: newUsers })
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={(event: React.SyntheticEvent, newValue: string) => handleValue(newValue)}>
                    <Tab label="Users" value="1" className={classes.div__tab} />
                    <Tab label="Integrations" value="2" className={classes.div__tab} />
                </TabList>
            </Box>

            <TabPanel value="1">
                <SearchInputComponent />
                {state.users.map((user: User) => <UserOptionComponent user={user} handleIsSelectedUser={handleIsSelectedUser} />)}
            </TabPanel>
            <TabPanel value="2">
                <SearchInputComponent />
            </TabPanel>
        </TabContext>
    )
}