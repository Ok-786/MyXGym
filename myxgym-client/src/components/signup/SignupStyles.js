import { makeStyles } from "@material-ui/core";
import Image from '../../images/8.jpg';

const SignupStyles = makeStyles(theme => ({
    container: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        background: 'bottom',
        position:'absolute',
        top: 0
    },
    paperFilter: {
        // background: 'linear-gradient( rgba(31,20,30,0.6561975131849616) 53%, rgba(67,73,73,0.6870098381149334) 100%)',
        backgroundSize: 'cover',
        height: '100%',
        backgroundPosition: 'center',
        width:'100%',
        position:'absolute',
        display: 'flex',
        justifyContent: 'center',
        top: 0
    },
    form: {
        backgroundColor: 'rgb(255,255,255,.92)',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        justify: "center",
        width:'80vh'
    },
    largeIcon: {
        fontSize: "3em",
        color: 'rgb(0,0,0,.7)'
    },
    Iconbg: {
        '& svg': {
            fontSize: 90,
        },
        paddingBlockStart: '-50px',
        backgroundColor: 'rgb(0,0,0,.05)',
        roundedRadius: '25vh'
    },
    logo: {
        paddingBlockStart: '55px',
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headText: {
        marginInline: '40px',
        marginBlockStart: '25px',
    },
    h1: {
        marginBlock: '20px',
        paddingInlineEnd: '20px',
        fontSize: "1.3em",
        color: 'darkblue',
    },
    p: {
        color: 'darkgrey',
    },
    forgetPasswordRight: {
        marginBlockStart: '-6px',
        color: 'blue',
        cursor: 'pointer',
        textAligh: 'right',
        float: 'right',
    },
    rememberMeLeft: {
        textAligh: 'left',
        float: 'left',
    },
    copyrights: {
    }
}));

export default SignupStyles;