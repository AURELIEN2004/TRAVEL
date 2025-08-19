import React from 'react'
import './main.scss'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

//import d images
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpg'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$788",
    description: "Très beau logement situé en bordure de mer avec une vue imprenable sur l'océan.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Alca",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$788",
    description: "Très beau logement situé en bordure de mer avec des activités nautiques.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Paradise Bay",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$788",
    description: "Très beau logement situé en bordure de mer dans un cadre idyllique.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Ocean View",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$788",
    description: "Très beau logement situé en bordure de mer avec terrasse privée.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Sunset Beach",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$788",
    description: "Très beau logement situé en bordure de mer pour des couchers de soleil magiques.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Crystal Waters",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$788",
    description: "Très beau logement situé en bordure de mer aux eaux cristallines.",
  },
]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  {description}
                </div>

                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className='icon' />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Main