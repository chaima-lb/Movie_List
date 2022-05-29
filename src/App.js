import React, { useState } from 'react';
import {movies} from "./data";
import List from './component/List/List';
import './App.css';
import Add from './component/Add/Add';
import Filter from './component/Filter/Filter';

function App() {
  const [moviedata, setMoviedata] = useState(movies);
  const [filter, setFilter] = useState('');
  const add = (x) => { setMoviedata([...moviedata, x]); };
  const FilterMovie = (x) => { setFilter(x); };
  return (
    <div>
      <div className="control">
        <Add AddMovie={add} />
        <Filter FilterMovie={FilterMovie} />
      </div>
      <List movies={moviedata.filter(el => el.title.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase()))} />
    </div>
  );
}
export default App;
