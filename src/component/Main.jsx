import React from 'react'

const getPoster = (posterpath)=>{
  return `https://www.themoviedb.org/t/p/w440_and_h660_face/${posterpath}`
}
const Main = ({name, poster_path, relase_date, overview})=>{
  return (
    <div>
      <h1>{overview}</h1>
      <img src={getPoster(poster_path)}/>
      {name}
    </div>
  )
}

export default Main