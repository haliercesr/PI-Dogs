import React, { useState } from 'react';
import './searchbar.css'; 
import { withRouter,useHistory } from 'react-router-dom';
import { searchDogs,queryDogs } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

function SearchBar(props) {
  const { location } = props;
  const pathname = location.pathname;
  const [query, setQuery] = useState('');
  const history = useHistory();
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchDogs(query));
    dispatch(queryDogs(true))
  };

  const backHome = () => {
    history.push('/home');
  };

  const exitForm = () => {
    history.push('/');
  };

  const create = () => {
    history.push('/create');
  };

  return (<>
    {pathname==='/home'?<div className="search-bar-container">
    <button onClick={create} className="search-button">
        Create
      </button>
      <input
        type="text"
        placeholder="Buscar raza de perro..."
        value={query}
        onChange={handleInputChange}
        className="search-input" 
      />
      <button onClick={handleSearch} className="search-button">
        Buscar
      </button>
      <button onClick={exitForm} className="search-button">
        salir
      </button>
    </div>:null}
    {pathname!=='/home'&& pathname!=='/'?<div className="search-bar-container">
    <button onClick={backHome} className="search-button">
        Volver al inicio
      </button>
    </div>:null}

  </>);
}

export default withRouter(SearchBar);
