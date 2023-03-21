import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieCard.css";

const MovieCard = ({ movie, deleteMovie }) => {
  const handleDelete = (id) => {
    deleteMovie(id)
  }
  return (
    <div className="movie-card">
      <Card style={{ width: "18rem", height: "400px" }}>
        <Card.Img variant="top" src={movie.poster} height="63%" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
            <span>{movie.rating} /10</span>
          <Button variant="primary">See Details</Button>
          <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
