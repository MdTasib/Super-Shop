import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { Typography } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader className='d-flex' component="div" id="nested-list-subheader">
                        <AppsIcon className='mr-3 mt-1 text-warning' /><Typography variant="h5" gutterBottom>Dashbord</Typography>
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button>
                    <ListItemIcon>
                        <ControlCameraIcon className='mr-3 mt-1 text-danger' />
                    </ListItemIcon>
                    <ListItemText primary="Manage Product" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddIcon className='mr-3 mt-1 text-success' />
                    </ListItemIcon>
                    <ListItemText primary="Add Product" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <EditIcon className='mr-3 mt-1 text-primary' />
                    </ListItemIcon>
                    <ListItemText primary="Edit Product" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;