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
// import img1 from '../../Assets/img7.jpg'
// import img1 from '../../Assets/img8.jpg'
// import img1 from '../../Assets/img9.jpeg'


const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: "bora" ,
    location:"new zealand",
    grade: "cuttural relax",
    fees: "$788",
    description:"tres beau logement situer en bordure de mer situertres beau logement situer en bordure de mer situer",

  },
    {
    id:2,
    imgSrc: img2,
    destTitle: "bora alca" ,
    location:"new zealand",
    grade: "cuttural relax",
    fees: "$788",
    description:"tres beau logement situer en bordure de mer",

  }
  ,
    {
    id:3,
    imgSrc: img3,
    destTitle: "bora" ,
    location:"new zealand",
    grade: "cuttural relax",
    fees: "$788",
    description:"tres beau logement situer en bordure de mer",

  }
  ,
    {
    id:4,
    imgSrc: img4,
    destTitle: "bora" ,
    location:"new zealand",
    grade: "cuttural relax",
    fees: "$788",
    description:"tres beau logement situer en bordure de mer",

  }
  ,
    {
    id:5,
    imgSrc: img5,
    destTitle: "bora" ,
    location:"new zealand",
    grade: "cuttural relax",
    fees: "$788",
    description:"tres beau logement situer en bordure de mer",

  }
  ,
    {
    id:6,
    imgSrc: img6,
    destTitle: "bora" ,
    location:"new zealand",
    grade: "cuttural relax",
    fees: "$788",
    description:"tres beau logement situer en bordure de mer",

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

            { Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
              return(
                  <div key={id} className="singleDestination">

                     <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                     </div>

                     <div className="cardInfo">
                       <h4 className="destTitle">{destTitle}</h4>
                       <span className="continent flex">
                         <HiOutlineLocationMarker className='icon'/>
                         <span className="name">{location}</span>
                       </span>

                       <div className="fees flex">
                          <div className="grade">
                             <span>{grade}<snall>+1</snall></span>
                          </div>
                          <div className="price">
                            <h5>  { fees}</h5>
                          </div>
                       </div>

                       <div className="desc">
                        {description}
                       </div>

                       <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
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
