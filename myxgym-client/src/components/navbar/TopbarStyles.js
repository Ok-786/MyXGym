import { createTheme, makeStyles } from "@material-ui/core";

const values = {
    xs: 500,
    sm: 806,
    md: 960,
    lg: 1280,
    xl: 1920
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        secondary: {
            main: "#9f9f9f"
        }
    },
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: (key) => `@media (min-width:${values[key]}px)`
    }
});

const TopbarStyles = makeStyles(theme => ({
    topContainer: {
        marginTop: '10px'
    },

    topbar: {
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 999
    },

    topbarWrapper: {
        height: '100%',
        paddingBlock: 0,
        paddingInline: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    topLeft: {

    },

    logo: {
        fontWeight: 'bold',
        fontSize: '30px',
        cursor: 'pointer'
    },

    topRight: {
        display: 'flex',
        alignItems: 'center'
    },

    topbarIconContainer: {
        position: 'relative',
        cursor: 'pointer',
        marginRight: '10px',
        color: '#555'
    },

    topIconBadge: {
        width: '18px',
        height: '18px',
        position: 'absolute',
        top: '-7px',
        right: '-7px',
        backgroundColor: '#d0000095',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
    },
    button: {
        background: 'none',
        border: '1px red solid',
        padding: '10px',
        color: 'rgb(230,0,0)',
        cursor: 'pointer',
        borderRadius: '3px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBlockStart: '10px',
        '&:hover': {
            backgroundColor: 'rgb(0,0,0,.03)',
            border: '1px rgb(230,0,0,.7) solid',
            padding: '10px',
            color: 'rgb(230,0,0,.7)',
        },
    },
    topAvatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        cursor: 'pointer'
    },
}))

export default TopbarStyles;
export {
    theme
}

