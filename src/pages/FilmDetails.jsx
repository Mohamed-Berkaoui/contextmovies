import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function FilmDetails() {
    const params=useParams()
  const [movie,setMovie]=useState({})

  useEffect(function(){
    axios.get('http://localhost:3000/movies/'+params.id)
    .then(function(res){
        setMovie(res.data)
    })
    .catch((e)=>console.log(e))
  },[])
  const navigate=useNavigate()
  return (
 <div>
    <h1>{movie.title}</h1>
    <h3>{movie.category} </h3>
    <Button onClick={()=>navigate(-1)}>back</Button>
 </div>
  )
}

export default FilmDetails