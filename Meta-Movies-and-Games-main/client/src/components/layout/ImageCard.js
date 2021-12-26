import React from "react";
import { Card } from 'react-bootstrap'

const baseURL = "https://image.tmdb.org/t/p/original/";

function ImageCard({ image }) {
  return (
    // <div className="image-card">
    //   <h1>{image.title}</h1>
    //   <img
    //     src={`${baseURL}${image.backdrop_path || image.poster_path} `}
    //     alt="movie poster"
    //   />
    //   {/* <p>{image.overview}</p> */}
    //   <h2>{image.title || image.original_name}</h2>
    //   <p>{image.vote_count}</p>
    // </div>
<div >
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={`${baseURL}${image.backdrop_path || image.poster_path} `} />
<Card.Body>
  <Card.Title>Title: {image.title}</Card.Title>
  <Card.Text>
  Original Name: {image.title || image.original_name}
  </Card.Text>
  <Card.Text>
  Votes: {image.vote_count}
  </Card.Text>
</Card.Body>
</Card>
</div>
  );
}

export default ImageCard;
