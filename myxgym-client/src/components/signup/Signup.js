import { Button, Checkbox, FormControlLabel, IconButton, TextField, Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import React, { Fragment, useState } from 'react'
import SignupStyles from './SignupStyles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import Spinner from '../spinner/Spinner';

const Signup = () => {
    const classes = SignupStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };
    const [inputs, setInputs] = useState(initialState);

    const checkHandler = (event) => {
        !event.target.checked === true ? setChecked(false) : setChecked(true);
    }

    const onChangeHandler = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    }

    const { email, password, firstName, lastName } = inputs;

    const onSubmitHandler = async (event) => {
        setLoading(true);

        try {
            const name = firstName + " " + lastName;
            const body = { name, email, password };

            const response = await fetch('http://localhost:8000/api/auth/admin/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            setTimeout(function () {
                if (parseRes) setLoading(false);
                if (parseRes.mail) {
                    toast.success("Mail has been dispatched, kindly verify!");
                    history.push('/signin');
                } else {
                    toast.error(parseRes);
                }
            }, 3000);
        } catch (err) {
            toast.success(err);
        }

    }

    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.paperFilter}>
                    <Spinner loading={loading} />
                    <div className={classes.form}>
                        <Typography variant='h3' className={classes.logo}>MY<IconButton className={classes.Iconbg}><FitnessCenterIcon className={classes.largeIcon} fontSize='large' /><FitnessCenterIcon className={classes.largeIcon} fontSize='large' style={{ marginLeft: '-82', transform: 'rotate(90deg' }} /></IconButton>GYM</Typography>
                        <hr />
                        <div className={classes.headText} >
                            <h3 className={classes.h1}>Signup</h3>
                            <p className={classes.p}>Create your account & join the league</p>
                            <TextField
                                required
                                type="text"
                                name="firstName"
                                id="outlined-basic1"
                                style={{ width: '100%', marginBlock: '10px' }}
                                size='small'
                                label="First Name"
                                variant="outlined"
                                vlaue={firstName}
                                onChange={onChangeHandler}
                            />
                            <br />
                            <TextField
                                type="text"
                                name="lastName"
                                id="outlined-basic2"
                                style={{ width: '100%', marginBlock: '10px' }}
                                size='small' label="Last Name"
                                variant="outlined"
                                vlaue={lastName}
                                onChange={onChangeHandler}
                            />
                            <br />
                            <TextField
                                type="email"
                                name="email"
                                id="outlined-basic3"
                                style={{ width: '100%', marginBlock: '10px' }}
                                size='small'
                                label="Email"
                                variant="outlined"
                                vlaue={email}
                                onChange={onChangeHandler}
                            />
                            <br />
                            <TextField
                                type="password"
                                name="password"
                                size='small'
                                style={{ width: '100%', marginBlock: '10px' }}
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                vlaue={password}
                                onChange={onChangeHandler}
                            />
                            <div >
                                <div className={classes.rememberMeLeft} >
                                    <FormControlLabel onClick={checkHandler} control={<Checkbox checked={checked} sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />} label="i agree to" />
                                    <span style={{ color: 'blue', cursor: 'pointer', marginInlineStart: '-15px', marginBlockEnd: '20%' }}> terms & Conditions</span>
                                </div>
                            </div>
                            <br />
                            <br />
                            <Button disabled={(checked) ? false : true} type='button' variant="outlined" style={{ marginBlockStart: '15px', width: "100%" }} className={classes.signinButton} color="secondary" onClick={onSubmitHandler}>Register </Button>
                            <p>Already have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => history.push('/signin')}>Signin</span></p>
                            <div className={classes.copyrights}><p style={{ color: 'red' }}>© MYVGYM 2021. ALL RIGHTS RESERVED.</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment >

    )
};

export default Signup;