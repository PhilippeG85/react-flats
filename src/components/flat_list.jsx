import React from 'react';
import Card from './card';


const FlatList = (props) => {
  const list = () => {
    return props.flats.map((flat, index) => {
      return <Card flat={flat} key={flat.lat} index={index} selectedFlat={props.flat} slectFlat={props.slectFlat} />;
    });
  };

  return (
    <div className="flat-list">
      {list()}
    </div>
  );
};

export default FlatList;
