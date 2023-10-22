import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { HomeMini, Settings, Task } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'


const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<HomeMini />);
        case 'SETTINGS':
            return (<Settings />);
        case 'TASK':
            return (<Task />);
        default:
            return (<HomeMini />);
    }
}


const MenuListItems = ({list}) => {

    const navigateTo = useNavigate();

    return (
        <List>
            {list.map(({text, path, icon}, index ) => 
                (
                    <ListItem key={index} button onClick={navigateTo(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                )
            )}
        </List>
    )
}

export default MenuListItems;