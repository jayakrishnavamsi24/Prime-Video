import './index.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieData} = props
  const {thumbnailUrl, videoUrl} = movieData
  return (
    <div className="thumbnail-container">
      <MovieItem thumbnailLink={thumbnailUrl} videoLink={videoUrl} />
    </div>
  )
}

export default MoviesSlider
