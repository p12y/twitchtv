import React from 'react';

const ChannelItem = (props) => {

  const photo = props.channel.logo;
  return (
    <div className="well">
      <img src={photo} style={{width: 50}} className="img-circle" alt="Cinque Terre" />
      <span>{props.channel.display_name}</span>
      <span></span>
    </div>
  );
}

export default ChannelItem;