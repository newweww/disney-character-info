import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

const Home = () => {

    const navigate = useNavigate();

const handleClick = () => {   
        navigate('/allcha/112');
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='text-center'>
                    <h1 className='text-white'>Desney</h1>
                    <h2 className='text-white'>Where am at</h2>
                    <input style={{ width: '500px'}} type='text' className='form-control' placeholder='Search Character' />
                    <button className='btn border mt-2' onClick={handleClick}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Home