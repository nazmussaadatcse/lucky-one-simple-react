import React from 'react';

const RandomOne = (props) => {
    
    // console.log(RandomProduct);
    const {name} = props.RandomProduct;

    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default RandomOne;