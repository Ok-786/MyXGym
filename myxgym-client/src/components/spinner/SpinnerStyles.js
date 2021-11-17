import { makeStyles } from "@material-ui/core";

const SpinnerStyles = makeStyles(theme => ({
    body: {
        backgroundColor: 'rgb(0,0,0,.8)',
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        // paddingTop:'40vh',
        width:'100%',
        height:'60%',
        position: 'absolute',
        left: '0',
        top:'0',
        paddingTop:'40vh',
        // marginInline: '30vh',
        zIndex: '100'
    },
    spinner: {
    }
}));

export default SpinnerStyles;