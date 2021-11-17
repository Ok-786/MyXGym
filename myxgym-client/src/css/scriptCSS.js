import { makeStyles } from "@material-ui/core";

const scriptCSS = makeStyles(theme =>({
    topContainer: {
        marginTop: '10px'
    },

    topbar: {
        width:'100%',
        height:'50px',
        backgroundColor: 'white',
        position: 'sticky',
        top:0,
        zIndex:999
    },
    
    topbarWrapper: {
        height:'100%',
        paddingBlock:0,
        paddingInline:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },

    topLeft: {

    },

    logo: {
        fontWeight: 'bold',
        fontSize:'30px',
        color: 'darkblue',
        cursor:'pointer'
    },

    topRight: {
        display:'flex',
        alignItems:'center'
    },

    topbarIconContainer: {
        position:'relative',
        cursor: 'pointer',
        marginRight:'10px',
        color:'#555'
    },

    topIconBadge: {
        width:'18px',
        height: '18px',
        position:'absolute',
        top:'-7px',
        right:'-7px',
        backgroundColor:'#d0000095',
        color:'white',
        borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize: '10px',
    },

    topAvatar: {
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        cursor:'pointer'
    },

    container: {
        display:'flex'
    },

    sidebar: {
        flex:1,
        height: 'calc(100vh - 66px)',
        backgroundColor:'#11212111',
        position:'sticky',
        top:'50px'
    },

    sidebarWrapper: {
        padding:'20px',
        color:'#555'
    },

    sidebarMenu: {
        marginBottom: '20px'
    },

    sidebarTitle: {
        fontSize:'14px',
        color:'grey',
        marginBottom:0
    },

    sidebarList: {
        listStyle:'none',
        padding:'5px'
    },

    sidebarListItem: {
        padding:'5px',
        cursor: 'pointer',
        display:'flex',
        alignItems: 'center',
        borderRadius:'10px'
    },

    sidebarIcon: {
        fontSize: '20px ' 
    },

    home1: {
        flex:5,
    },

    featured: {
        width:'100%',
        display:'flex',
        justifyContent:'space-between'
    },

    featuredItem: {
        flex:1,
        marginBlock:0,
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '1px 0px 18px 0px rgba(0,0,0,0.75)',
        backgroundImage: 'linear-gradient(to right, lightgrey, rgba(255,130,90,.3))',
    },

    featuredTitle: {

    },

    featuredMoneyContainer: {
        marginBlock:'10px',
        display:'flex',
        alignItems:'center',
    },

    featuredMoney: {
        fontSize: '30px',
        fontWeight:'bold'
    },

    featuredMoneyRate: {
        display:'flex',
        alignItems: 'center',
        marginLeft: '20px'
    },

    featuredIconNegative :{
        fontSize: '25px',
        marginLeft:'5px',
        color:'red'
    },

    featuredIconPositive :{
        fontSize: '25px',
        marginLeft:'5px',
        color:'green'
    },

    featuredSub: {
        fontSize:'15px',
        color:'grey'
    },

    chart: {
        marginTop:'80px',
        display: 'table',
        width: '90%',
        margin:'20px',
        padding: '10px',
        boxShadow: '1px 0px 18px 0px rgba(0,0,0,0.15)',
    },

    chartTitle: {
        marginBottom: '0px',
        display:'flex',
        alignItems:'center',
        alignContent: 'center',
        justifyContent:'center',
        fontSize:'20px'
    },

    homeWidgets: {
        display: 'flex',
        marginTop: '30%',
    },

    widgetsm: {
        flex:1,
        boxShadow: '1px 0px 12px 0px rgba(0,0,0,0.75)',
        padding:'20px',
        marginRight:'20px'
    },

    widgetlg: {
        flex:2,
        
        boxShadow: '1px 0px 12px 0px rgba(0,0,0,0.75)',
        padding:'20px',
    },

    widgetlgTextField: {
        marginTop:'5px',
        marginRight:'20px',
        padding:'5px',
        maxWidth: '25ch',
        // display:'flex'
    },

    productInsertion: {
        flexWrap: 'wrap',
        boxShadow: '1px 0px 6px 0px rgba(0,0,0,0.25)',
        backgroundColor:'rgba(0,0,0,0.05)',
        padding:'10px',
        borderRadius:'10px',
        display:'flex',
        justifyContent:'center'
    },

    userProfile: {
        marginTop:'5%',
        padding:'20px',
        display:'flex',
    },

    profilePic: {
        width:'30vh',
        height:'40vh',
        borderRadius:'5%',
        cursor:'pointer'
    },

    profileLeft: {
        flex:1,
    },

    profileRight: {
        paddingInline:'5%',
        paddingBlock:'5%',
        flex:3,
        boxShadow: '1px 0px 6px 0px rgba(0,0,0,0.25)',
    },
    openButton: {
        backgroundColor: '#555',
        color: 'white',
        padding: '16px 20px',
        border: 'none',
        cursor: 'pointer',
        opacity: '0.8',
        position: 'fixed',
        bottom: '23px',
        right: '28px',
        width: '280px'
      },
      
      /* The popup form - hidden by default */
      formPopup: {
        display: 'none',
        position: 'fixed',
        bottom: 0,
        right: 0,
        backgroundImage: 'linear-gradient(to right, grey, rgba(255,130,90,.9))',
        border: '3px solid #f1f1f1',
        borderRadius:'1%',
        zIndex: 9,
      },
      
      /* Add styles to the form container */
      formContainer: {
          right:0,
        maxWidth: '350px',
        padding: '10px',
        paddingRight:'40px',
        
      },
      
      /* Full-width input fields */
      formContainerT: {
        width: '100%',
        padding: '15px',
        margin: '5px 0 22px 0',
        border: 'none',
        background: '#f1f1f1'
      },

      formContainerP: {
        width: '100%',
        padding: '15px',
        margin: '5px 0 22px 0',
        border: 'none',
        background: '#f1f1f1'
      },
      
      
      /* Set a style for the submit/login button */
      formContainerBtn: {
        padding: '16px 20px',
        marginLeft:'10px',
        cursor: 'pointer',
        width: '100%',
        marginBottom:'10px',
      },
      
      /* Add a red background color to the cancel button */
      formContainerCancel: {
        padding: '16px 20px',
        cursor: 'pointer',
        width: '100%',
        marginBottom:'10px',
        opacity: '0.8'
      },
      
      file: {
        boxSizing:'border-box',
      },

      uploadImg: {
        margin: 0,
        padding: '2rem 1.5rem',
        font: '1rem/1.5 "PT Sans", Arial, sans-serif',
        color: '#5a5a5a'
      },
      /* Add some hover effects to buttons */
      


//................................Signup form.........................
    centerCon: { 
        textAlign: 'center',
        justify: 'center', 
        justifyContent: 'center', 
        display: 'flex' 
    },

    formStyle: {
        padding: 20, 
        width: 450,
        boxShadow: ' -1px 5px 12px 5px rgba(0,0,0,0.47) ',
        justifyContent: 'center' ,
        backgroundImage: 'linear-gradient(to right, lightgrey, rgba(255,170,110,.4))',
        textAlign: 'center',
        justify:'center',
        
    },

    paperStyle: { 
        // padding: 20, 
        width: 1300,
        // paddingBlock:'8%',
        // height:"80vh"
    },

    formStyle3: {
        padding: 20 
    },

    avatarBackground: {
        marginInline: '45%'
    },

    table: {
        // minWidth: 50,
    },

    checkBox: {
        width: 50,
        height: 20,
    },

    delButton: {
        background: 'red',
        padding: 8,
        marginRight: 5
    },
    
    editButton: {
        padding: 8,

        background: '#fccd02',
        // marginRight: -1080
    },

    signinMessage: {
        color:'red',
        cursor:'pointer'
    },

    dFlex: {
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
    },

    mainContainer: {
        // display:'flex',
        flexDirection: "column",
        width:'100%',
        height:'100%',
        top:0,
        // paddingTop:'80px',
        paddingLeft:'10%',
        boxSizing:'border-box'
    },

    card: {
        position:'relative',
        marginTop:'29vh',
        marginInline:'2%',
        display:'inline-flex',
        padding:'3%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#dac7ca26',
        borderRadius:'10%',
        cursor:'pointer',
        width:'22vh',
    },

    mainContent: {
        display:'inline',
        justifyContent: 'center',
        alignItems:'center',
        width:'45%',
        // height:'100%',
        margin: '50px auto',
        padding:'40px 0 0',
        boxSizing:'border-box',
        flex:'wrap',
        transition:'all .3s ease-in-out',
    },

    cardImg: {
        position:'absolute',
        marginTop:'-320px'
        

    },

    cardHeader: {
        flexDirection:'column',
        margin:'25px 0'
    }
    

}))

export default scriptCSS;

