import React, { Fragment, useEffect } from 'react';
import { toast } from "react-toastify";
import { useHistory, useParams } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';

const Verify = () => {
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const verifying = async () => {
            try {
                const body = { id };
                const response = await fetch('http://localhost:8000/api/auth/admin/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                const parseRes = await response.json();
                setTimeout(function () {
                    console.log(parseRes.err);
                    parseRes.err ? toast.error(parseRes.err) : toast.success(parseRes)
                    localStorage.removeItem('expTimeToken');
                    history.push('/signin');
                }, 3000)
            } catch (err) {
                console.log(err);
            }
        }
        verifying()
    }, [history, id]);

    return (
        <Fragment>
            <Spinner loading={true} beat={true} />
        </Fragment>
    )
}

export default Verify;