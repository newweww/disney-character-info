import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import './style.css';

const Character = () => {
  const [character, setCharacter] = useState(null);
  const { _id } = useParams();
  const navigate = useNavigate();

  console.log('_id:', _id);

  const getCharacter = async (id) => {
    try {
      const res = await axios.get(`https://api.disneyapi.dev/character/${id}`);
      setCharacter(res.data);
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };

  useEffect(() => {
    getCharacter(_id);
  }, [_id]);


  const goToPreviousCharacter = () => {
    const previousId = parseInt(_id, 10) - 1;
    navigate(`/allcha/${previousId}`);
  };

  const goToNextCharacter = () => {
    const nextId = parseInt(_id, 10) + 1;
    navigate(`/allcha/${nextId}`);
  };

  const goToHome = () => {
    navigate('/');
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='container d-flex justify-content-center align-items-center row mt-3'>
        <div className='d-flex justify-content-between align-items-center mb-3' style={{ width: '700px' }}>
          <button className='btn border text-white' onClick={goToPreviousCharacter}>Previous</button>
          <button className='btn border text-white' onClick={goToHome}>Home</button>
          <button className='btn border text-white' onClick={goToNextCharacter}>Next</button>
        </div>
        <div className='border d-flex shadow bg-light rounded rows' style={{ width: '700px', height: 'auto' }} alt="card">
          <div className='p-4 justify-content-center align-items-center' style={{ width: '300px', height: '100%' }}>
            <img
              className='card-img-top'
              src={character.data.imageUrl}
              alt="Character Image"
              width="100%"
              height="100%"
            />
          </div>
          <div className='p-4 justify-content-start align-items-start flex-column' style={{ width: '400px' }}>
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
            <br />
            <div>
              <strong>Source :</strong>
              <div className="source-url">
                {character.data.sourceUrl && character.data.sourceUrl.length > 0
                  ? character.data.sourceUrl
                  : "None"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
