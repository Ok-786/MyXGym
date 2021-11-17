import React, { Fragment } from 'react';
import { BounceLoader, BeatLoader } from 'react-spinners';
import { css } from '@emotion/react';
import SpinnerStyles from './SpinnerStyles';

const loaderCSS = css`
`;

export default function Spinner(props) {
    const classes = SpinnerStyles();

    if (props.loading) {
        return (
            <Fragment>
                <div className={classes.body}>
                    {
                        props.beat?<BeatLoader css={loaderCSS} className={classes.spinner} size={30} color='teal' speedMultiplier={.7} loading={props.loading ? props.loading : true} /> : <BounceLoader css={loaderCSS} className={classes.spinner} size={80} color='teal' speedMultiplier={.7} loading={props.loading ? props.loading : true} />
                    }
                </div>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>

            </Fragment>
        )
    }
}



