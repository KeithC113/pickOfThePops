import React from 'react';

const TrackDetail =(props) => {
  if(!props.track) return null;
  return (
    <div>
    <h3> {props.track}</h3>
    <h3> Is this workiing </h3>
    <h3> {props.track.price}</h3>
    </div>
  )
}
export default TrackDetail;
