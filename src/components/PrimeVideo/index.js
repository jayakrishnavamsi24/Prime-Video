import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(eachMovie => {
    if (eachMovie.categoryId === 'ACTION') {
      return true
    }
    return false
  })
  const comedyMovies = moviesList.filter(eachMovie => {
    if (eachMovie.categoryId === 'COMEDY') {
      return true
    }
    return false
  })

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container">
      <div className="prime-home">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-banner"
        />
        <div className="videos-section">
          <h1 className="genre-title"> Action Movies </h1>
          <div className="slider-container">
            <Slider {...settings}>
              {actionMovies.map(eachActionMovie => (
                <MoviesSlider movieData={eachActionMovie} />
              ))}
            </Slider>
          </div>
          <h1 className="genre-title"> Comedy Movies </h1>
          <div className="slider-container">
            <Slider {...settings}>
              {comedyMovies.map(eachActionMovie => (
                <MoviesSlider movieData={eachActionMovie} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
