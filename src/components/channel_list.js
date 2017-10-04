import React from 'react';
import ChannelItem from './channel_item';

const ChannelList = (props) => {
  const { color, title } = props;
  
  if (!props.channels || !props.streams) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className={`panel ${color}`}>
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        <ul>
          {props.channels.map((channel, index) => {
            return (
              <li className="channel" key={channel.display_name} >
                <ChannelItem channel={channel} stream={props.streams[index]}/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ChannelList;