import React, { useState } from 'react';
import axios from 'axios';
import gif from '../image/gif.gif';
import {IoIosArrowRoundBack} from 'react-icons/io'

const ResetPassword = () => {
    const userEmail = JSON.parse(localStorage.getItem('email'));
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: userEmail,
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState("")

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!data.email || !data.otp || !data.newPassword || !data.confirmPassword) {
            setError('Please fill in all fields');
            setLoading(false);
        } else if (data.newPassword !== data.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
        } else {
            setError('');
            axios.post('https://databackend-lirs.onrender.com/student/reset', data)
                .then((res) => {
                    console.log(res.data.message); // Handle success response
                    setMessage(res.data.message)
                    
                })
                .catch((err) => {
                    console.log(err.response.data.message); // Handle error
                    setMessage(err.response.data.message)
                    
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <section className='passwordrecovery border p-4'>
            <form id='reset' className='col-lg-4 mx-auto p-4 shadow rounded bg-white' onSubmit={handleSubmit}>
            <div  className={message == "" ? "" : "alert alert-danger"}>{message}</div>
                <h5>A token has been sent to your email, use it to reset your password</h5>
                <label className='fw-bold' htmlFor="otp">Otp</label>
                <input className='form-control my-2 border-black' type="password" name='otp' onChange={handleChanges} />
                <label className='fw-bold' htmlFor="newPassword">New Password</label>
                <input className='form-control my-2 border-black' type="password" name='newPassword' onChange={handleChanges} />
                <label className='fw-bold' htmlFor="confirmPassword">Confirm Password</label>
                <input className='form-control my-2 border-black' type="password" name='confirmPassword' onChange={handleChanges} />
                <div className='d-flex my-3'>
                <IoIosArrowRoundBack className='arr' size={25} />
                <div id='backtoLogin' className='text-center'><a className='underline' href="/student/signin">back to Login</a></div>
              </div>
                {error && <div className="text-danger">{error}</div>}
                <button type='submit' className='bg-primary form-control text-light fw-bold mt-3'>
                    {loading ? <img src={gif} alt="" width={25} /> : 'Submit'}
                </button>
            </form>
        </section>
    );
};

export default ResetPassword;
