import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code';
import { Mail, Notifications } from '@mui/icons-material';

// check out what this is man..
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled(Box)(({theme}) => ({
    display: 'none', 
    gap: '20px',
    alignItems: "center",
    // 600px and above
    [theme.breakpoints.up("sm")]:{
        display: "flex",
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex', 
    gap: '10px',
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography 
                variant="h6"
                sx={{ display: { xs: 'none', sm: "block" }}}
            >
                DEV YOMA
            </Typography>
            <CodeIcon 
                 sx={{ display: { xs: 'block', sm: "none" }}}
            />
            <Search>
                <InputBase placeholder='search...'/>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>

                <Badge badgeContent={2} color="error">
                    <Notifications />
                </Badge>
                <Avatar 
                    sx={{width: 30, height: 30}}
                    // add src
                    onClick={() => setOpen(true)}
                />
            </Icons>

            <UserBox>
                <Avatar 
                    sx={{width: 30, height: 30}}
                    // add src 
                    onClick={() => setOpen(true)}
                />
            <Typography component="span">Yoma</Typography>
            </UserBox>
        </StyledToolbar>
        
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    )
}

export default Navbar