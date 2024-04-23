import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import axios from 'axios';
import { SearchResultList } from '../component/SearchResultList';

const Home = () => {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const getSearch = async (value) => {
        try {
            const response = await axios.get('https://api.disneyapi.dev/character?pageSize=10000');
            const result = response.data.data.filter((data) => {
                return value && data && data.name && data.name.toLowerCase().startsWith(value.toLowerCase());
            });
            setResults(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleChange = (value) => {
        setInput(value);
        getSearch(value);
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='text-center'>
                    <h1 className='text-white'>Desney</h1>
                    <h2 className='text-white'>Where am at</h2>
                    <input
                        style={{ width: '500px' }}
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Search Character' />
                    <SearchResultList results={results} />
                </div>

            </div>
        </div>
    );
}

export default Home