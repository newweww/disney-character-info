import React from 'react'
import '../pages/style.css';
import { SearchResult } from './SearchResult';

export const SearchResultList = ({ results }) => {
  return (
    <div className='result-list'>
      {results.map((result, id) => {
        return <SearchResult key={id} result={result} />
      })}
      
    </div>
  )
}
