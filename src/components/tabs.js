import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ChannelList from './channel_list';

class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state = {key : 1};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    const { channels, streams } = this.props;
    console.log('c', this.props.channels);
    console.log('s', this.props.streams);
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab">
        <Tab eventKey={1} title="All">
          <ChannelList color="panel-primary" title="All" channels={channels} streams={streams} />
        </Tab>
        <Tab eventKey={2} title="Online">
          <ChannelList color="panel-success" title="Online" channels={channels} streams={streams} />
        </Tab>
        <Tab eventKey={3} title="Offline">
          <ChannelList color="panel-info" title="Offline" channels={channels} streams={streams} />
        </Tab>
      </Tabs>
    );
  }
}

  export default TabNav;