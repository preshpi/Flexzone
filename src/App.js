import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Main from './component/Main';

function App() {
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=2cb69f52572c60600b44cca55f8e8400&language=en-US&page=1"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  return (
    <div>
        {
          movies.map((data)=> 
          <Main key={data.id} {...data}/>)
        } 
    </div>
  );
}

export default App;
