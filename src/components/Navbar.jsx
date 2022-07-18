import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { LogOutButton, NavbarLink } from '../pages/MUI-components';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Fab, Fade, useScrollTrigger } from '@mui/material';


const settings = ['coming soon...'];

const Navbar = ({isAuth, signUserOut}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleFabClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    }
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleFabClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography    //fix to useNavigate
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blog-17
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem onClick={handleCloseNavMenu}>
                    <NavbarLink to='/'>Home</NavbarLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <NavbarLink to='/createpost'>Create New Post</NavbarLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    {!isAuth ? <NavbarLink to='/login'> Login </NavbarLink> : <LogOutButton onClick={signUserOut}>LogOut</LogOutButton>}
                </MenuItem>

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blog-17
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={handleCloseNavMenu}>
                    <NavbarLink to='/'>Home</NavbarLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <NavbarLink to='/createpost'>Create New Post</NavbarLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    {!isAuth ? <NavbarLink to='/login'> Login </NavbarLink> : <LogOutButton onClick={signUserOut}>LogOut</LogOutButton>}
                </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuth && (
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {/* <Avatar>{auth.currentUser.displayName.slice(0,1)}</Avatar> */}
                    <Typography variant='h6' sx={{color: "#fff"}}>
                        <Box display='flex' alignItems='center'>
                          <FingerprintIcon sx={{color: 'var(--color-hightlight)'}}/>
                          <Typography>
                              Online
                          </Typography>
                        </Box>
                    </Typography> 
                </IconButton>
                </Tooltip>
            )}

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </AppBar>
  );
};
export default Navbar;
