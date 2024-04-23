import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './style.css';

const Character = () => {
  const [character, setCharacter] = useState(null);
  const { _id } = useParams();

  console.log('_id:', _id); 

  const getCharacter = async () => {
    try {
      const res = await axios.get(`https://api.disneyapi.dev/character/${_id}`);
      setCharacter(res.data);
      console.log({_id});
      console.log('Character data:', res.data);
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, [_id]);

  if (!character) {
    return <div>Loading...</div>;
  }


  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='border d-flex shadow bg-light rounded rows' style={{ width: '700px', height: 'auto', marginTop: '40px' }} alt="card">
          <div className='p-4 jutify-content-center align-items-center' style={{ width: '300px', height: '100%' }}>
            <img
              className='card-img-top'
              src={character.data.imageUrl}
              alt="Character Image"
              width="100%"
              height="100%"
            />
          </div>
          <div className='p-4 jutify-content-start align-items-start flex-column' style={{ width: '400px' }}>
            <h1>
              {character.data.name}
              <span style={{ fontSize: '20px' }}> #{character.data._id}</span>
            </h1>
            <hr style={{ width: '300px' }} />
            <div>
              <strong>Film :</strong>
              {
                character.data.films && character.data.films.length > 0
                  ? character.data.films.join(", ")
                  : "None"
              }
            </div>
            <br />
            <div>
              <strong>Short Films :</strong>
              {
                character.data.shortFilms && character.data.shortFilms.length > 0
                  ? character.data.shortFilms.join(", ")
                  : "None"
              }
            </div>
            <br />
            <div>
              <strong>Tv Shows :</strong>
              {
                character.data.tvShows && character.data.tvShows.length > 0
                  ? character.data.tvShows.join(", ")
                  : "None"
              }
            </div>
            <br />
            <div>
              <strong>Video Games :</strong>
              {
                character.data.videoGames && character.data.videoGames.length > 0
                  ? character.data.videoGames.join(", ")
                  : "None"
              }
            </div>
            <br />
            <div>
              <strong>Park Attractions :</strong>
              {
                character.data.parkAttractions && character.data.parkAttractions.length > 0
                  ? character.data.parkAttractions.join(", ")
                  : "None"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
