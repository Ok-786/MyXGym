import { createTheme, makeStyles } from "@material-ui/core";

const values = {
    xs: 500,
    sm: 806,
    md: 960,
    lg: 1200,
    xl: 1450
};

const theme = createTheme({
    palette: {
        primary1: {
            main: "#000000"
        },
        secondary2: {
            main: "#9f9f9f"
        },
    },
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: (key) => `@media (min-width:${values[key]}px)`
    }
});

const ClientGraphInfoStyles = makeStyles(theme => ({
    topContainer: {
        marginTop: '0px',
    },

    container: {
        display: 'flex',

    },

    home1: {
        flex: 3,
    },

    centerDiv: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        display:'flex',
        width: '100%',
        // marginTop:'5vh'
    },
    
    featured: {
        width: '100%',
        display: 'flex',
        // justifyContent: 'space-between'
    },

    featuredItem: {
        flex: 1,
        marginBlock: 0,
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '1px 0px 18px 0px rgba(0,0,0,0.75)',
    },
    button: {
        display:"block",
        marginLeft:'auto'
    },

    featuredTitle: {

    },

    featuredMoneyContainer: {
        marginBlock: '10px',
        display: 'flex',
        alignItems: 'center',
    },

    featuredMoney: {
        fontSize: '30px',
        fontWeight: 'bold'
    },

    featuredMoneyRate: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px'
    },

    featuredIconNegative: {
        fontSize: '25px',
        marginLeft: '5px',
        color: 'red'
    },

    featuredIconPositive: {
        fontSize: '25px',
        marginLeft: '5px',
        color: 'green'
    },

    featuredSub: {
        fontSize: '15px',
        color: 'grey',
    },

}))

export default ClientGraphInfoStyles;
export {
    theme
}

