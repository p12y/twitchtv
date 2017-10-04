const baseUrl = "https://wind-bow.glitch.me/twitch-api/";

export const REQUEST_CHANNELS = 'REQUEST_CHANNELS';
function requestChannels() {
  return {
    type: REQUEST_CHANNELS,
    name
  }
}

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
function receiveChannels(name, json) {
  return {
    type: RECEIVE_CHANNELS,
    name,
    channels: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchChannels(name) {
  const channelNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

  return function (dispatch) {
    dispatch(requestChannels());

    return fetch(baseUrl + `channels/${name}`)
      .then(
        response => response.json(), 
        error => console.log('Error', error)
      )
      .then(json =>
        dispatch(receiveChannels(channel, json))
      )
  }
}