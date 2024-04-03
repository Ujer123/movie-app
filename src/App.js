import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import Shopping from "./component/Shopping";

function App() {
  const [movie, setMovie] = useState([]);

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

  return (
    <section>
      <Header />
      <div className="grid pt-4">
        {movie.map((item, index) => (
          <>
          
          <Shopping 
            key={index}
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
