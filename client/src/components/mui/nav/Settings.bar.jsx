import * as React from 'react'

import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

import { connect } from "react-redux"
import { useTheme } from '@mui/material/styles'

import { setHost, setPort } from "../../../actions/connect"

import {
    Drawer,
    DrawerHeader 
} from '../styled'

const Settings = props => {

    const {
        drawerWidth,
        isOpen,
        handleDrawerClose,
        host,
        port,
        dispatch
    } = props

    const hosts = [ 'localhost', '161.35.79.14' ]
    const ports = [ 3001, 8001, 8002, 8003 ]

    const [selectedHost, setSelectedHost] = React.useState('localhost')
    const [selectedPort, setSelectedPort] = React.useState(3001)

    React.useEffect(() => {
        setSelectedHost(host)
        setSelectedPort(port)
      }, [host, port]);

    const handleHostSelect = (host) => {
        dispatch(setHost(host))
    }

    const handlePortSelect = (port) => {
        dispatch(setPort(port))
    }

    const hostItems = hosts.map((text) => (
        <ListItem 
            selected={text === selectedHost? true : false}
            button 
            key={text}
            onClick={() => handleHostSelect(text)}
            >
            <ListItemText primary={text} />
        </ListItem>
        ))

    const portItems = ports.map((text) => (
        <ListItem 
            selected={text === selectedPort? true : false}
            button 
            key={text}
            onClick={() => handlePortSelect(text)}
            >
            <ListItemText primary={text} />
        </ListItem>
        ))

    const theme = useTheme();
    
    return <Drawer
        drawer_width={drawerWidth}
        variant="persistent"
        anchor="left"
        open={isOpen}
        >
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List
        sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}
        subheader={<ListSubheader>Host</ListSubheader>}
        >{hostItems}
        </List>
        <Divider />
        <List
        sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}
        subheader={<ListSubheader>Port</ListSubheader>}
        >{portItems}            
        </List>
        <Divider />
    </Drawer>
}

const mapStateToProps = state => {
    const { host, port } = state.connect
    return {
      host, 
      port
    };
  }


export default connect(mapStateToProps)(Settings)