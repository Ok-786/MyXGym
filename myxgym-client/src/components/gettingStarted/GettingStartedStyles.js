import { makeStyles } from '@material-ui/core';
import Image from '../../images/13.jpg';

const GettingStartedStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'center'
    },

    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundPosition: 'center',
    },
    paperFilter: {
        background: 'linear-gradient(90deg, rgba(2,0,36,0.7122199221485469) 0%, rgba(81,92,114,0.6561975131849616) 53%, rgba(67,73,73,0.6870098381149334) 100%)',
        backgroundSize: 'cover',
        height: '100vh',
        backgroundPosition: 'center',
    },
    cardContainer: {
        alignItems: 'center',
    },
    largeIcon: {
        fontSize: "3em",
        color:'rgb(0,0,0,.7)'
    },
    Iconbg: {
        '& svg': {
            fontSize: 90,
        },
        marginBlockStart:'-60px',
        backgroundColor:'rgb(255,255,255,.05)',
        roundedRadius: '25vh'
    },
    card: {
        marginTop:'10px',
        padding: '30px',
        backgroundColor: 'rgb(255,255,255,.8)',
    },
    logo: {
        color: 'red',
        fontWeight:'bold',
        textAlign:'center'
    },
    cardHeaderText: {
        color: '#1A2B56',
        marginBlockEnd:'15px',
        textAlign:'center'
    },
    cardText: {
        fontWeight: '200',
        color: 'grey',
        textAlign:'center'
    },
    button: {
        textAlign:'center',
        alignItems: 'center',
        color:'red',
        justifyContent: 'center',
        justify:"center",
        marginBlockStart: '2px'
    }
}));

export default GettingStartedStyles;