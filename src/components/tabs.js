import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ChannelList from './channel_list';
import { getChannels, getStreams } from '../api';
import map from 'async/map';

const channelNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state = {key : 1, channels: [], streams: [], online: [], offline: []};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({key});
  }

  componentDidMount() {
    var self = this;
    
    map(channelNames, getChannels, function (err, results) {
      self.setState({channels: results});

      map(channelNames, getStreams, function (err, results) {
        self.setState({streams: results});
  
        results.forEach((stream) => {
          if (stream.stream) {
            self.setState({online: self.state.online.concat(stream.stream.channel)});
          }
        });
  
        self.setState({offline: self.state.channels.slice(self.state.online.length)});
      });
    });
  }

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab">
        <Tab eventKey={1} title="All">
          <ChannelList 
            color="panel-primary" 
            title="All" 
            channels={this.state.channels} 
            streams={this.state.streams} 
          />
        </Tab>
        <Tab eventKey={2} title="Online">
          <ChannelList 
            color="panel-success" 
            title="Online" 
            channels={this.state.online} 
            streams={this.state.streams} 
          />
        </Tab>
        <Tab eventKey={3} title="Offline">
          <ChannelList 
            color="panel-info" 
            title="Offline" 
            channels={this.state.offline} 
            streams={this.state.streams.slice(this.state.online.length)} 
          />
        </Tab>
      </Tabs>
    );
  }
}

  export default TabNav;