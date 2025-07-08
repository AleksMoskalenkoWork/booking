// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Link from '@mui/material/Link';
// import { SwipeableDrawer, List, ListItem, useTheme } from '@mui/material';

// export default function MobileNav() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const theme = useTheme();

//   const iOS =
//     typeof navigator !== 'undefined' &&
//     /iPad|iPhone|iPod/.test(navigator.userAgent);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   return (
//     <>
//       <Box
//         sx={{
//           flexGrow: 1,
//           height: '64px',
//           display: { xs: 'flex', md: 'none' },
//         }}
//       >
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleOpenNavMenu}
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//         <SwipeableDrawer
//           disableBackdropTransition={!iOS}
//           disableDiscovery={iOS}
//           open={Boolean(anchorElNav)}
//           onClose={handleCloseNavMenu}
//         >
//           <Box
//             sx={{
//               display: { xs: 'block', md: 'none' },
//               height: '100%',
//               width: '50%',
//               position: 'fixed',
//               top: '64px',
//               backgroundColor:
//                 theme.palette.mode === 'light'
//                   ? theme.palette.background.default
//                   : theme.palette.background.paper,
//             }}
//           >
//             <List>
//               <ListItem>
//                 <Link onClick={handleCloseNavMenu} href="/">
//                   Home
//                 </Link>
//               </ListItem>
//               <ListItem>
//                 <Link onClick={handleCloseNavMenu} href="hotels">
//                   Hotels
//                 </Link>
//               </ListItem>
//               <ListItem>
//                 <Link onClick={handleCloseNavMenu} href="about">
//                   About
//                 </Link>
//               </ListItem>
//             </List>
//           </Box>
//         </SwipeableDrawer>
//       </Box>
//     </>
//   );
// }

import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { SwipeableDrawer, List, ListItem, useTheme } from '@mui/material';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: '64px',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton
          size="large"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <SwipeableDrawer
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          anchor="left"
        >
          <Box
            sx={{
              width: '250px',
              paddingTop: '64px',
              backgroundColor:
                theme.palette.mode === 'light'
                  ? theme.palette.background.default
                  : theme.palette.background.paper,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem>
                <Link href="/" underline="none" color="textPrimary">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/hotels" underline="none" color="textPrimary">
                  Hotels
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about" underline="none" color="textPrimary">
                  About
                </Link>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </Box>
    </>
  );
}
