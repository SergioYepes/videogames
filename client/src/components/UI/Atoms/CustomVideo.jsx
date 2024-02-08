import React from 'react'

function CustomVideo({Video}) {
  return (
    <div className="video-container">
        <video autoPlay loop playsInline muted className="video-bg">
          <source src={Video} type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
  )
}

export default CustomVideo