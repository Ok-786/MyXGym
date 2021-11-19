import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AccountCircle, Assistant, Timeline, NoteAdd, PersonAdd, DonutLarge, KeyboardArrowRight, KeyboardArrowDown, Dashboard } from '@material-ui/icons';
import SidebarStyles from './SidebarStyles';
import { useState } from 'react';
import { ManageAccounts } from '@mui/icons-material';

const Sidebar = (props) => {
    const classes = SidebarStyles();
    const [open, setOpen] = useState(false);

    const openHandler = () => {
        setOpen(!open);
    }

    const profile = () => {
        if (open) {
            return (
                <div >
                    <List className={classes.sidebarList}>
                        {['Update Profile', 'Update Password'].map((text, index) => (
                            <ListItem button onClick={openHandler} className={classes.dropDownPanel} key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}

                    </List>
                </div>
            )
        }
    }

    return (
        <div className={classes.sidebarBg}>
            <div className={classes.sidebar}>

                <div className={classes.backCover}>
                    <div className={classes.sidebarWrapper}>
                        <div className={classes.sidebarMenu}>
                            <h3 className={classes.sidebarTitle}>
                                Dashboard
                            </h3>
                            <List className={classes.sidebarList}>
                                {['Dashboard'].map((text, index) => (
                                    <ListItem button className={classes.sidebarListItem} key={text} onClick={() => {
                                        props.displayHandler('adminDashboard');
                                    }}>
                                        <ListItemIcon >
                                            {index === 0 ? <Dashboard className={classes.sidebarIcon} /> : <div></div>}
                                            {index === 1 ? <Timeline className={classes.sidebarIcon} /> : <div></div>}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>

                            <hr style={{ borderTop: '1px solid gray', opacity: '.2', marginBlockEnd: '5vh' }} />
                        </div>
                        <div className={classes.sidebarMenu}>
                            <h3 className={classes.sidebarTitle}>
                                Profile Management
                            </h3>
                            <List className={classes.sidebarList}>
                                {['Profile'].map((text, index) => (
                                    <ListItem button onClick={openHandler} className={classes.sidebarListItem} key={text}>
                                        <ListItemIcon >
                                            {index === 1 ? <Assistant className={classes.sidebarIcon} /> : <div></div>}
                                            {index === 0 ? <AccountCircle className={classes.sidebarIcon} /> : <div></div>}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />

                                        {!open ? <KeyboardArrowRight /> : <KeyboardArrowDown />}
                                    </ListItem>
                                ))}

                                {profile()}
                            </List>
                            <hr style={{ borderTop: '1px solid gray', opacity: '.2', marginBlockEnd: '5vh' }} />
                        </div>

                        {
                            props.role === 'admin' &&
                            <div className={classes.sidebarMenu}>
                                <h3 className={classes.sidebarTitle}>
                                    Client Area
                                </h3>
                                <List className={classes.sidebarList}>
                                    {['Create New Clients', 'Manage Clients', 'Clients Progress', 'Consulatations'].map((text, index) => (
                                        <ListItem button className={classes.sidebarListItem} key={text}>
                                            <ListItemIcon >
                                                {index === 0 ? <PersonAdd className={classes.sidebarIcon} /> : <div></div>}
                                                {index === 1 ? <ManageAccounts className={classes.sidebarIcon} /> : <div></div>}
                                                {index === 2 ? <DonutLarge className={classes.sidebarIcon} /> : <div></div>}
                                                {index === 3 ? <NoteAdd className={classes.sidebarIcon} /> : <div></div>}
                                            </ListItemIcon>

                                            {index === 0 ? <ListItemText primary={text} onClick={() => {
                                                props.displayHandler("CreateClients");
                                            }} /> : <ListItemText primary={text} />}
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        }
                    </div>
                    {/* <Button variant="outlined" color="secondary" style={{ marginInline: '30%' }} onClick={() => { history.push("/Signup"); localStorage.removeItem("Login User") }}>Logout</Button> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;


// import { useEffect } from 'react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {
//   Avatar,
//   Box,
//   Button,
//   Divider,
//   Drawer,
//   Hidden,
//   List,
//   Typography
// } from '@material-ui/core';
// import {
//   AlertCircle as AlertCircleIcon,
//   BarChart as BarChartIcon,
//   Lock as LockIcon,
//   Settings as SettingsIcon,
//   ShoppingBag as ShoppingBagIcon,
//   User as UserIcon,
//   UserPlus as UserPlusIcon,
//   Users as UsersIcon
// } from 'react-feather';
// import NavItem from './NavItem';

// const user = {
//   avatar: '../../images/2.jpg',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith'
// };

// const items = [
//   {
//     href: '/app/dashboard',
//     icon: BarChartIcon,
//     title: 'Dashboard'
//   },
//   {
//     href: '/app/customers',
//     icon: UsersIcon,
//     title: 'Customers'
//   },
//   {
//     href: '/app/products',
//     icon: ShoppingBagIcon,
//     title: 'Products'
//   },
//   {
//     href: '/app/account',
//     icon: UserIcon,
//     title: 'Account'
//   },
//   {
//     href: '/app/settings',
//     icon: SettingsIcon,
//     title: 'Settings'
//   },
//   {
//     href: '/login',
//     icon: LockIcon,
//     title: 'Login'
//   },
//   {
//     href: '/register',
//     icon: UserPlusIcon,
//     title: 'Register'
//   },
//   {
//     href: '/404',
//     icon: AlertCircleIcon,
//     title: 'Error'
//   }
// ];

// const Sidebar = ({ onMobileClose, openMobile }) => {
//   const location = useLocation();

//   useEffect(() => {
//     if (openMobile && onMobileClose) {
//     //   onMobileClose();
//     }
//   }, []);

//   const content = (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%'
//       }}
//     >
//       <Box
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//           p: 2
//         }}
//       >
//         <Avatar
//           component={RouterLink}
//           src={user.avatar}
//           sx={{
//             cursor: 'pointer',
//             width: 64,
//             height: 64
//           }}
//           to="/app/account"
//         />
//         <Typography
//           color="textPrimary"
//           variant="h5"
//         >
//           {user.name}
//         </Typography>
//         <Typography
//           color="textSecondary"
//           variant="body2"
//         >
//           {user.jobTitle}
//         </Typography>
//       </Box>
//       <Divider />
//       <Box sx={{ p: 2 }}>
//         <List>
//           {items.map((item) => (
//             <NavItem
//               href={item.href}
//               key={item.title}
//               title={item.title}
//               icon={item.icon}
//             />
//           ))}
//         </List>
//       </Box>
//       <Box sx={{ flexGrow: 1 }} />
//       <Box
//         sx={{
//           backgroundColor: 'background.default',
//           m: 2,
//           p: 2
//         }}
//       >
//         <Typography
//           align="center"
//           gutterBottom
//           variant="h4"
//         >
//           Need more?
//         </Typography>
//         <Typography
//           align="center"
//           variant="body2"
//         >
//           Upgrade to PRO version and access 20 more screens
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             pt: 2
//           }}
//         >
//           <Button
//             color="primary"
//             component="a"
//             href="https://react-material-kit.devias.io"
//             variant="contained"
//           >
//             See PRO version
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       {/* <Hidden lgUp> */}
//         <Drawer
//           anchor="left"
//           onClose={onMobileClose}
//           open={openMobile}
//           variant="temporary"
//           PaperProps={{
//             sx: {
//               width: 256
//             }
//           }}
//         >
//           {content}
//         </Drawer>
//       {/* </Hidden> */}
//       {/* <Hidden xlDown> */}
//         <Drawer
//           anchor="left"
//           open
//           variant="persistent"
//           PaperProps={{
//             sx: {
//               width: 256,
//               top: 64,
//               height: 'calc(100% - 64px)'
//             }
//           }}
//         >
//           {content}
//         </Drawer>
//       {/* </Hidden> */}
//     </>
//   );
// };

// Sidebar.propTypes = {
//   onMobileClose: PropTypes.func,
//   openMobile: PropTypes.bool
// };

// Sidebar.defaultProps = {
//   onMobileClose: () => {
//   },
//   openMobile: false
// };

// export default Sidebar;