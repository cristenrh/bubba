import React from 'react';

const Card = ({name, instrument, photo, bio}) => {
    return (
      
        <div className='tc gallery-card dib ma2'>
            <div class="gallery-card-inner ">
              <div class="gallery-card-front bg-black pa2">
                <img src ={`http://bubbacoltrane.com/images/${photo}`}  alt = {`${name}`}/>
                      <h3>{name}</h3>
                      <p>{instrument}</p>       
                </div>
                <div class="gallery-card-back pa2">
                  <h3>{name}</h3>
                  <p>{instrument}</p>
                  <p>{bio}</p>
                </div>
              </div>
        </div>
    )
};

export default Card;