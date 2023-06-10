import {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesSlider from '../MoviesSlider'
import './index.css'

const upcomingMoviesList = [
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686415528/WhatsApp_Image_2023-06-10_at_22.13.36_rl69o1.jpg',
    videoUrl: 'https://youtu.be/qkD5juVLDgM',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686415921/WhatsApp_Image_2023-06-10_at_22.21.46_grtdu5.jpg',
    videoUrl: 'https://youtu.be/V-n_w4t9eEU',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686416017/WhatsApp_Image_2023-06-10_at_22.23.19_qiducs.jpg',
    videoUrl: 'https://youtu.be/6Qh29WWHGe4',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686416147/WhatsApp_Image_2023-06-10_at_22.25.33_ckak7r.jpg',
    videoUrl: 'https://youtu.be/7hDM189hGq4',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686416433/WhatsApp_Image_2023-06-10_at_22.30.20_qnlgsf.jpg',
    videoUrl: 'https://youtu.be/BUt-Ncdff50',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686417313/WhatsApp_Image_2023-06-10_at_22.44.58_aridlt.jpg',
    videoUrl: 'https://youtu.be/ESfnYU_WtFI',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686417247/WhatsApp_Image_2023-06-10_at_22.43.56_gc0zia.jpg',
    videoUrl: 'https://youtu.be/UnVb1wBR4dI',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686416735/WhatsApp_Image_2023-06-10_at_22.35.18_akywwy.jpg',

    videoUrl: 'https://youtu.be/KYuj9hffF20',
    categoryId: 'ACTION',
  },
  {
    id: uuidv4(),
    thumbnailUrl:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1686417192/WhatsApp_Image_2023-06-10_at_22.42.57_pee1a2.jpg',
    videoUrl: 'https://youtu.be/waEFaba3-6c',
    categoryId: 'ACTION',
  },
]

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  }, [])

  let slidesCount
  if (windowWidth < 545) {
    slidesCount = 1
  } else if (windowWidth < 735) {
    slidesCount = 2
  } else if (windowWidth < 900) {
    slidesCount = 3
  } else if (windowWidth < 1100) {
    slidesCount = 4
  } else if (windowWidth < 1300) {
    slidesCount = 5
  } else if (windowWidth < 1400) {
    slidesCount = 6
  } else {
    slidesCount = 7
  }

  const settings = {
    dots: false,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 1,
  }

  return (
    <div className="bg-container">
      <Popup
        open
        modal
        contentStyle={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 0,
          backgroundImage:
            'radial-gradient(ellipse at center, #1e3149, #090e1c)',
        }}
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <div className="close-btn-container">
              <h1 className="promo-movie-title"> Watch this first look 🐯 </h1>
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="react-player-container">
              <ReactPlayer
                url="https://youtu.be/7hDM189hGq4"
                width="100%"
                style={{position: 'relative', top: 0, left: 0, maxWidth: 500}}
                playing
                controls
              />
            </div>
          </div>
        )}
      </Popup>

      <div className="prime-home">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-banner"
        />
        <div className="videos-section">
          <h1 className="genre-title"> Upcoming Movies </h1>
          <div className="slider-container">
            <Slider {...settings}>
              {upcomingMoviesList.map(eachUpcomingMovie => (
                <MoviesSlider
                  movieData={eachUpcomingMovie}
                  key={eachUpcomingMovie.id}
                  id={eachUpcomingMovie.id}
                />
              ))}
            </Slider>
          </div>
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
