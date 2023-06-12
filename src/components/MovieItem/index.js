import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {thumbnailLink, videoLink} = props
  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailLink} alt="thumbnail" className="thumbnail-img" />
      }
      contentStyle={{
        width: '100%',
        maxWidth: 600,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: '#ffffff',
      }}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <div className="close-btn-container">
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
              url={videoLink}
              width="100%"
              style={{position: 'relative', top: 0, left: 0, maxWidth: 500}}
              playing
              controls
            />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
