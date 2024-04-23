import React from 'react'
import { useNavigate } from "react-router-dom";
import '../pages/style.css';

export const SearchResult = ({ result }) => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/allcha/${result._id}`);
  }

  return (
    <div className='search-result' onClick={handleClick}>{result.name}</div>
  )
}
