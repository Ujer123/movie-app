import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import Shopping from "./component/Shopping";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
        
        

function App() {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const imageurl= "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=17a4e3b2288c4c18cc589cd94934e551`)
      .then(response => {
        setMovie(response.data.results);
      })
      .catch(error => {
        console.log('Error message:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = movie.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, movie])

  return (
    <section>
      <Header />
      <div className="flex justify-content-center">
      <InputText type="text" placeholder="Search Movies..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <Button label="Search" className="sea-but" />
      </div>
      <div className="grid pt-4">
        {filteredData.map((item, index) => (
          <>
          
          <Shopping 
            index={index}
            title={item.title}
            image={imageurl+item.poster_path}
            overview={item.overview}
            // date={item.release_date}
            // vote={item.vote_average}
            />
            </>
        ))}
      </div>
    </section>
  );
}

export default App;
