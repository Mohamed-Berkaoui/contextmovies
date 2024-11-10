import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { favoriteStore } from './ContextFav'



function Box({film}) {
    const navigate=useNavigate()
    const favoriteState=useContext(favoriteStore)

  return (
    <Card style={{ width: "18rem" ,display:"flex",flexDirection:"column",justifyContent:'space-between'}}>
    <Card.Img height={150} variant="top" src={film.image} />
    <Card.Body>
      <Card.Title>{film.title}</Card.Title>
      <Card.Text>
      {film.description}
      </Card.Text>
   <div style={{display:"flex" ,alignItems:"center",gap:"10px",justifyContent:"center"}}>
   <Button variant="primary"  onClick={()=>navigate("/film/"+film.id)}> details</Button>
   <Button variant="primary"  onClick={()=>{ favoriteState.setFavorites([...favoriteState.favorites,film])}}>add to  favorites</Button>
   </div>
    </Card.Body>
  </Card>
  )
}

export default Box