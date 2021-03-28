import React from 'react';
import Card from './Card';

const CardList = ({ band }) => {
    return(
        <div>
            {
            band.map((user, i) => {
                return (
                <Card 
                    key={i} 
                    photo={band[i].photo} 
                    name={band[i].name} 
                    instrument={band[i].instrument}
                    bio={band[i].bio}
                />
            );
        })
    }
    </div>
    );
    }

export default CardList;