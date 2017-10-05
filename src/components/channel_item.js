import React from 'react';

const ChannelItem = (props) => {
  if (!props.stream) {
    return (
      <div>Loading...</div>
    )
  }

  const { channel } = props;
  const { stream } = props;
  let currentlyPlaying = "";

  if (stream.stream) {
    currentlyPlaying = stream.stream.channel.status;
  }

  const status = stream.stream ? 'online' : 'offline';
  
  return (
    <div className={status}>
      <img src={channel.logo} style={{width: 50}} className="img-circle" alt="Cinque Terre" />
      <span className="display-name">{channel.display_name}</span>
      <span className="currently-playing">{currentlyPlaying}</span>
    </div>
  );
}

export default ChannelItem;