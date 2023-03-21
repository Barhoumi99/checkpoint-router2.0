import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieCard.css";

const MovieCard = ({ movie, deleteMovie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    deleteMovie(id);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  return (
    <div className="movie-card">
      <Card style={{ width: "18rem", height: "400px" }}>
        <Card.Img variant="top" src={movie.poster} height="70%" style={{aspectRatio: '16/9'}} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <span>{movie.rating} /10</span>
          <Button variant="primary" onClick={handleModalShow}>
            See Details
          </Button>
          <Button variant="danger" onClick={() => handleDelete(movie.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {movie.trailer}
          <p><span style={{fontSize: '20px'}}>Year of release: </span> {movie.year}</p>
          <p><span style={{fontSize: '20px'}}>Imdb Rating: </span> {movie.rating} /10</p>
          <p><span style={{fontSize: '20px'}}>Story:</span> {movie.story}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieCard;
