import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import axios from "./axios";
import ImageCard from "./ImageCard";
import { Form, Button } from 'react-bootstrap'
// import Reviews from "../reviews/Reviews";

// for testings
// import { connect } from "react-redux";
// import ReviewItem from "../reviews/ReviewItem";
// import { getReviews } from "../../actions/review";
// import ReviewForm from "../reviews/ReviewForm";

// import Reviews from "../reviews/Reviews";
// import axios from "axios";
const initialToken = "b43be22b6a5309d4edfa333956d60b88";
// const initialUrl = "https://api.themoviedb.org/3";

const pages = Math.floor(Math.random() * 500);
// const generateRandom = `/trending/all/week?api_key=${initialToken}&language=en-US`;
const generateRandom =
  `/discover/movie?api_key=${initialToken}&certification_country=UScertification.lte=G&sort_by=popularity.desc&page=` +
  pages;

const SearchResults = () => {
  const [formData, setFormData] = useState({
    Search: "",
  });
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState(false);
  const [images, setImages] = useState([]);
  // const [movieOption, setMovieOption] = useState(generateRandom);
  // const { movieOption } = data;
  const { Search } = formData;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(generateRandom);
      console.log(request.data.results);
      setImages(request.data.results);
      console.log(images);
      return request;
    }
    fetchData();

    setSearch(true);
  }, []);

  const getItemData = (Search) => {
    fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${Search}&page=1&r=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        setFormData(data.Search);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    getItemData(Search);
  };

  // const getReviewData = (Search) => {
  //   const Reviews = ({ getReviews, review: { reviews, loading } }) => {
  //     useEffect(() => {
  //       getReviews();
  //     }, [getReviews]);
  //   };
  return (
    <Fragment>
      <div className="about-item">
        Search for your favorite Movies, TV Shows, and Games!
      </div>
      <div className="search">
        {/* <form id="search" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="Search"
            placeholder="ex: Lion King"
            onChange={handleChange}
          />

          <button type="submit">Search</button>
        </form> */}
        <Form onSubmit={(e) => onSubmit(e)}>
  <Form.Group controlId="formBasicEmail">
    {/* <Form.Label>Search</Form.Label> */}
    <Form.Control type="text" name='Search' placeholder="Ex: Lion King" onChange={handleChange}/>
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>

      <div className='buttons'>
        <button onClick={() => setFilter("movie")} type="button">
          Movies
        </button>
        <button onClick={() => setFilter("game")} type="button">
          Games
        </button>
        <button onClick={() => setFilter("series")} type="button">
          TV Shows
        </button>

        {formData.length >= 0 &&
          formData
            .map((movie) => <Movie key={movie.imbdID} {...movie} />)
            .filter((items) => {
              console.log(items.props);
              return filter ? items.props.Type === filter : true;
            })}
      </div>

      <div className="results">
        {images.map((image) => (
          <ImageCard image={image} />
        ))}
      </div>
      {/* testing */}
      {/* <ReviewForm /> */}
      {/* <div className="reviews">
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </div> */}
      {/* <Reviews /> */}
    </Fragment>
  );
};
// };

// Reviews.propTypes = {
//   getPosts: PropTypes.func.isRequired,
//   review: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   review: state.review,
// });

SearchResults.propTypes = {};

// export default connect(mapStateToProps, { getReviews })(SearchResults);

export default SearchResults;
