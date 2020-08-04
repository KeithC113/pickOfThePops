import React from 'react';

const TrackSelector = (props) => {

  const options = props.tracks.map(track => {
    return <option value={track["im:name"].label} key={track["im:name"].label}>{track["im:name"].label}
    </option>
  })

  function handleChange(event){
    props.onTrackSelected(event.target.value)
  }

  return (

    <select name="track-selector" id = "track-selector" defaultValue="default"
    onChange={handleChange}>
    <option disabled value = "default"> Choose a track...</option>
    {options}
    </select>

  )
};
export default TrackSelector;
