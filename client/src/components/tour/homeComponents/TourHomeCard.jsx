import React, { useState } from 'react'
import TourHomeWhatsIncluded from './TourHomeWhatsIncluded';
import ImageViewerContainer from './ImageViewerContainer';
import {motion} from 'framer-motion';

const TourHomeCard = ({data}) => {
    const {image, id, title, desc, type, pricing, preference, inclusionAndExclusion} = data;

    const [imgViewer, setImageViwer] = useState(false)
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
      }
  return (
    <>
      {imgViewer && <ImageViewerContainer imgData={data.image} setImageViwer={setImageViwer} />}
    <motion.div 
    className="cardContainer"
    {...easeScaleUp}
    >
        <div className="imageContainer">
            {data.image.map((ima, index) =>  <img key={index} src={ima} alt=""  onClick={() => setImageViwer(true)}/>)}
        </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>Next available : Tomorrow</p>
            </div>
            <div className="cardBtnContainer">
                <button onClick={() => {
                    // dispatch(choosingBooking({type, title, pricing, preference}))
                    // return navigate("/date-confirm")
                }} className='checkAvailability'>
                    Book Now
                </button>
            </div>
            <div className="extra">
                <TourHomeWhatsIncluded inclusionAndExclusion={inclusionAndExclusion} />
            </div>
        </motion.div>
    </>
  )
}

export default TourHomeCard