import React from 'react';
import ChannelItem from './channel_item';

const ChannelList = (props) => {
  const { color, title, channels } = props;

  return (
    <div className={`panel ${color}`}>
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        <ul>
          {channels.map((channel, index) => {
            return (
              <li key={channel.display_name}>
                <ChannelItem channel={channel} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default ChannelList;