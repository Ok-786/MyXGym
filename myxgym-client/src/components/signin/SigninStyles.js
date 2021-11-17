import { makeStyles } from "@material-ui/core";
import Image1 from '../../images/1.jpg';
import Image2 from '../../images/5.jpg';

const SigninStyles = makeStyles(theme => ({
    leftDiv: {
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        background: 'bottom',
    },
    rightDiv: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        justify: "center",
    },
    paperPictureRight: {
        backgroundImage: `url(${Image2})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundPosition: 'center',
    },
    paperFilterRight: {
        background: 'rgb(255,255,255,.97)',
        backgroundSize: 'cover',
        height: '100vh',
        // backgroundPosition: 'center',
    },
    largeIcon: {
        fontSize: "3em",
        color: 'rgb(0,0,0,.7)'
    },
    Iconbg: {
        '& svg': {
            fontSize: 90,
        },
        paddingBlockStart: '-60px',
        backgroundColor: 'rgb(0,0,0,.05)',
        roundedRadius: '25vh'
    },
    logo: {
        paddingBlockStart: '65px',
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    paperFilterLeft: {
        background: 'linear-gradient(90deg, rgba(30,0,36,0.7122199221485469) 0%, rgba(81,92,114,0.6561975131849616) 53%, rgba(67,73,73,0.6870098381149334) 100%)',
        backgroundSize: 'cover',
        height: '100%',
        backgroundPosition: 'center',
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

export default SigninStyles;