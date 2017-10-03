import each from 'async/each';

const channelNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
const baseUrl = "https://wind-bow.glitch.me/twitch-api/";
let channels = [];
let streams = [];
let online = [];
let offline = [];
let onlineChannels;
let offlineChannels;
let channelsObj = {online: [], offline: []};

function getChannels(name, index) {
  fetch(baseUrl + `channels/${name}`).then((response) => {
    if (response.status !== 200) {
      console.log(`Something went wrong. Status code: ${response.status}`);
      return;
    }
    response.json().then((data) => {
      channels.push(data);
      if (index === channelNames.length - 1) {
        filterStreams();
      }
    });
  });
}

function getOnlineStreams(name, index) {
  fetch(baseUrl + `streams/${name}`).then((response) => {
    if (response.status !== 200) {
      console.log(`Something went wrong. Status code: ${response.status}`);
      return;
    }
    response.json().then((data) => {
      if (data.stream) {
        online.push(data.stream.channel.display_name);
      }
    });
  });
}

channelNames.forEach((name, index) => {
  getOnlineStreams(name, index);
  getChannels(name, index);
});

function filterStreams() {
  let onlineChannels = channels.filter((channel) => {
    return online.indexOf(channel.display_name) !== -1;
  });

  let offlineChannels = channels.filter((channel) => {
    return online.indexOf(channel.display_name) === -1;
  });

  channelsObj.online = onlineChannels;
  channelsObj.offline = offlineChannels;

}




export { channelsObj };
