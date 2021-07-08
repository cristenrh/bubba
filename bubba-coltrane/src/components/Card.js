import React from 'react';
import { useState } from "react";

const Card = ({name, instrument, photo, bio}) => {
  const [isFlipped, setClick] = useState(false);

  const handleToggle = () => {
    setClick(!isFlipped);
  };

  return (
      <div className='tc gallery-card dib ma2'>
          <div className={isFlipped ? "gallery-card-inner isFlipped" : "gallery-card-inner"} onClick={handleToggle} >
            <div className="gallery-card-front bg-black pa2">
              <img src ={`http://bubbacoltrane.com/images/${photo}`}  alt = {`${name}`}/>
                    <h3>{name}</h3>
                    <p>{instrument}</p>       
              </div>
              <div className="gallery-card-back pa2">
                <h3>{name}</h3>
                <p>{instrument}</p>
                <p>{bio}</p>
              </div>
            </div>
      </div>
  )
};






// const Card = ({name, instrument, photo, bio}) => {
//   const [click, setClick] = useState(false);
//   // const handleClick = () => setClick(false);
//     return (
//       <div className="gallery-card dib ma2">
//             <div className="gallery-card-inner ">
          
//                   <div className="gallery-card-front bg-black pa2">
//                     <img src ={`http://bubbacoltrane.com/images/${photo}`}  alt = {`${name}`}/>
//                           <h3>{name}</h3>
//                           <p>{instrument}</p>       
//                     </div>
            
//                     <div className="gallery-card-back pa2">
//                       <h3>{name}</h3>
//                       <p>{instrument}</p>
//                       <p>{bio}</p>
//                     </div>
           
//               </div>
//         </div>
//     )
// }



export default Card;