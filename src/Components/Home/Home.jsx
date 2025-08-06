import React from 'react'
import './home.css'
// import video from '../../Assets/video.mp4'

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      {/* <video src={video} muted autoPlay-loop-type="video/mp4"></video> */}

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            Our packages
          </span>
          
          <h1 className="homeTitle">
            search your holiday
          </h1>
        </div>
      </div>

    </section>
  )
}

export default Home
