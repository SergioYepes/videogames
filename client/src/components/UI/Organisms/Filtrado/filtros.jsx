import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, filtradoAS, filtradoDS, minRating, maxRating, filtradoByGenres, getGenres, filtradoByOrigin } from '../../../../redux/actions';
import '../../../../styles/filtros.css';

function Filtros({ setCurrentPage }) {
  const dis = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [az, setAz] = useState('');
  const [Rating, setRating] = useState('');
  const [Genres, setGenres] = useState('');
  const [orden, setOrden] = useState('');
  const [buttonStates, setButtonStates] = useState({
    nameFGenres: false,
    nameFOrigin: false,
    nameFName: false,
    nameFRating: false,
  });

  useEffect(() => {
    if (az !== '') {
      if (az === 'Select') {
        dis(getAllGames());
      }
      if (az === 'asc') {
        dis(filtradoAS());
      }
      if (az === 'desc') {
        dis(filtradoDS());
      }
    }
  }, [dis, az]);

  useEffect(() => {
    if (Rating !== '') {
      if (Rating === 'Select') {
        dis(getAllGames());
      }
      if (Rating === 'desc') {
        dis(minRating());
      }
      if (Rating === 'asc') {
        dis(maxRating());
      }
    }
  }, [dis, Rating]);

  useEffect(() => {
    dis(getGenres());
    dis(filtradoByGenres(Genres));
  }, [dis, Genres]);

  function SortByNameAZ(e) {
    setAz(e.target.value);
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function SortByRating(e) {
    setRating(e.target.value);
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleGenres(e) {
    e.preventDefault();
    setCurrentPage(1);
    dis(filtradoByGenres(e.target.value));
  }

  function FilterOrigin(e) {
    e.preventDefault();
    setCurrentPage(1);
    dis(filtradoByOrigin(e.target.value));
  }

  function handleClic(button) {
    setButtonStates((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === button ? !prev[key] : false;
        return acc;
      }, {}),
    }));
  }

  return (
    <div>
      <ul className="listado">
        <li className="content-select">
          <button className="nameFGenres" onClick={() => handleClic('nameFGenres')}>
            Genres ☯
          </button>
          {buttonStates.nameFGenres && (
            <select onChange={(e) => handleGenres(e)} className='nameFGenresSelect'>
              <option key={0} value="All">
                Select 🌛
              </option>
              {genres
                ?.sort(function (a, b) {
                  if (a.name > b.name) return -1;
                  if (a.name < b.name) return 1;
                  return 0;
                })
                .map((Genres) => {
                  return <option key={Genres.id} value={Genres.name}>{Genres.name}</option>;
                })}
            </select>
          )}
        </li>
        <li className="content-select">
          <button className="nameFOrigin" onClick={() => handleClic('nameFOrigin')}>
            Origin
          </button>
          {buttonStates.nameFOrigin && (
            <select onChange={(e) => FilterOrigin(e)} className='nameFOriginSelect'>
              <option value="All">All Games</option>
              <option value="api">Existent Games</option>
              <option value="created">Created Games</option>
            </select>
          )}
        </li>
        <li className="content-select">
          <button className="nameFName" onClick={() => handleClic('nameFName')}>
            Name
          </button>
          {buttonStates.nameFName && (
            <select onChange={(e) => SortByNameAZ(e)} className='nameFNameSelect'>
              <option value="selected" hidden>
                Sort Games by name
              </option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          )}
        </li>
        <li className="content-select">
          <button className="nameFRating" onClick={() => handleClic('nameFRating')}>
            Rating
          </button>
          {buttonStates.nameFRating && (
            <select onChange={(e) => SortByRating(e)} className='nameFRatingSelect'>
              <option value="selected" hidden>
                Sort Games by Rating
              </option>
              <option value="asc">Max</option>
              <option value="desc">Min</option>
            </select>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Filtros;
