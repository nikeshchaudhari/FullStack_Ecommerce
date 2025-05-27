import {React,useEffect,useState} from 'react';
import logo from "../assets/images/logo.png"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoCloseSharp } from "react-icons/io5";




const SideCategory = (props) => {
 
   const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={()=>props.openSidePanel(false)}>
      <div className="img-1 flex justify-center py-3 ">
        <img src={logo} alt="Logo"  className="max-w-full max-h-full"/>
      </div>
      <div className='py-3 text-center flex items-center pl-4 font-[600] text-[15px]'>
        <h2>Shop By Categories
</h2>
 <IoCloseSharp className='ml-8 font-[800] text-[20px]'  />
        </div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
    
  
      <Drawer open={props.isOpen} onClose={()=>props.openSidePanel(true)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default SideCategory 
