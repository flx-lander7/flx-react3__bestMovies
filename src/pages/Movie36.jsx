import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { useEffect, useState } from 'react';

function Movie36() {
  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [rating, setRating] = useState([]);
  const [ratingCount, setRatingCount] = useState([]);
  const [plot, setPlot] = useState([]);

  function startOfPage() {
    return window.scrollTo(0, 0);
  }

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://raw.githubusercontent.com/flx-lander7/resources/main/img-bestMovies/popularMovies.json';
      const response = await fetch(url);
      const data = await response.json();
      const arrayData = data.items;

      const ids = arrayData.map((item) => {
        return item.id;
      });

      const titles = arrayData.map((item) => {
        return item.title;
      });

      const images = arrayData.map((item) => {
        return item.image;
      });

      const ratings = arrayData.map((item) => {
        return item.imDbRating / 2;
      });

      const ratingsCount = arrayData.map((item) => {
        return item.imDbRatingCount;
      });

      const plots = arrayData.map((item) => {
        return item.plot;
      });

      setId(ids);
      setTitle(titles);
      setImage(images);
      setRating(ratings);
      setRatingCount(ratingsCount);
      setPlot(plots);
    };
    fetchData();
  }, []);

  return (
    <div className='movies-container'>
      <article className='movie-container'>
        <div className='movie-poster'>
          <Link to='/movie36' onClick={startOfPage}>
            <img id='img-movie' src={image[35]} />
          </Link>
        </div>
        <div className='movie-info'>
          <Link to='/movie36' onClick={startOfPage}>
            <h2>36. {title[35]}</h2>
          </Link>
          <div className='rating'>
            <p> {rating[35]}</p>
            <StarRatings
              rating={rating[35]}
              starDimension='16px'
              starSpacing='0.8px'
              starRatedColor='#faaf00'
            />
          </div>
          <p className='reviews'>
            <span> {ratingCount[35]} reviews</span>
          </p>
          <div className='movie-description'>
            <p>{plot[35]}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Movie36;
