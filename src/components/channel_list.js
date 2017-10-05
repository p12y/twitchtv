import React from 'react';
import ChannelItem from './channel_item';

const ChannelList = (props) => {
  const { color } = props;
  
  if (!props.channels || !props.streams) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className={`panel ${color}`}>
      <div className="panel-heading">
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