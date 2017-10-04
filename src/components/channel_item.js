import React from 'react';

const ChannelItem = (props) => {
  const { channel } = props;
  return (
    <div>
      <img src={channel.logo} style={{width: 50}} className="img-circle" alt="Cinque Terre" />
      <span className="display-name">{channel.display_name}</span>
      <span className="status">Online</span>
    </div>
  );
}

export default ChannelItem;