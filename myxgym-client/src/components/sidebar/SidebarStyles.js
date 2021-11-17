import { makeStyles } from "@material-ui/core";
import Image from '../../images/14.jpg';

const SidebarStyles = makeStyles(theme => ({
    backCover: {
        height: '100vh',
        background: 'linear-gradient(90deg, rgba(28,27,32,.7) 0%, rgba(0,0,0,.8) 100%)',
        // position: 'sticky',
    },
    sidebarBg: {
        // width:'100%',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        background: 'bottom',
        height:'100%',
    },

    sidebar: {
        height: '100%',
        background: 'linear-gradient(90deg, rgba(28,27,32,.7) 0%, rgba(0,0,0,.8) 100%)',
        // position: 'sticky',
        // top: '50px'
    },

    sidebarWrapper: {
        paddingBlockStart: '20px',
        paddingInline:'20px',
        color: 'white',
    },

    sidebarMenu: {
        // marginBottom: '20px'
    },

    sidebarTitle: {
        fontSize: '14px',
        color: 'darkgrey',
        marginBottom: 0
    },

    sidebarList: {
        listStyle: 'none',
        // padding: '5px'
    },

    sidebarListItem: {
        padding: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        '&:hover': {
            background: "rgb(250,200,200,.1)",
         },
    },

    sidebarIcon: {
        fontSize: '20px ',
        color:'white'
    },

    dropDownPanel: {
        // backgroundColor:'black'   ,
        // paddingBlockEnd: '10px',
        
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        marginTop:'-5px',
        color:'rgb(230,230,230)',
        '&:hover': {
            background: "rgb(250,200,200,.1)",
         },
        paddingLeft:'7vh'
    }

}))

export default SidebarStyles;

